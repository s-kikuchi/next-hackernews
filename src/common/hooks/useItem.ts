import useSWR, { SWRResponse } from 'swr';
import { fetchItem } from '@/common/api';
import { Item } from '@/common/models/Item';

export function useItem(id?: string): Pick<SWRResponse<Item | undefined, Error>, 'data' | 'error'> {
  const key: string | undefined = id ? JSON.stringify(`/api/items/${id}`) : undefined;
  const fetcher = async () => fetchItem(Number(id)).then((item: Item) => item);

  const { data, error } = useSWR(key, fetcher);
  return {
    data,
    error,
  };
}
