import useSWR from 'swr';
import { fetchIdsByType, fetchItems } from '@/common/api';
import { Item } from '@/common/models/Item';
import { ITEMS_PER_PAGE } from '@/common/utils/constants';

interface UseItemsRequest {
  type?: string;
  page?: string;
}

interface UseItemsResponse {
  ids: number[];
  items: Item[];
}

export function useItems({ type, page }: UseItemsRequest): UseItemsResponse {
  const itemIdsKey: string | undefined = type ? JSON.stringify(`/api/ids/type=${type}`) : undefined;
  const itemIdsFetcher = async () => fetchIdsByType(type).then((ids: number[]) => ids);
  const { data: itemIdsData } = useSWR(itemIdsKey, itemIdsFetcher);

  const { activeIds } = extractActiveIds({ ids: itemIdsData, page });
  const itemsKey: string | undefined = activeIds
    ? JSON.stringify(`/api/items/type=${type}?page=${page}`)
    : undefined;

  const itemsFetcher = async () => fetchItems(activeIds).then((items: Item[]) => items);
  const { data: itemsData } = useSWR(itemsKey, itemsFetcher);

  return {
    items: itemsData,
    ids: itemIdsData,
  };
}

interface ExtractActiveIdsRequest {
  ids: number[];
  page?: string;
}

interface ExtractActiveIdsResponse {
  activeIds?: number[];
}

function extractActiveIds({ ids, page }: ExtractActiveIdsRequest): ExtractActiveIdsResponse {
  const _page = Number(page);
  const start = page ? (_page - 1) * ITEMS_PER_PAGE : ITEMS_PER_PAGE;
  const end = page ? _page * ITEMS_PER_PAGE : ITEMS_PER_PAGE;
  return { activeIds: ids ? ids.slice(start, end) : undefined };
}
