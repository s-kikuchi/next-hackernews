import React from 'react';
import Header from 'next/head';
import { useRouter } from 'next/router';

import { useItems } from '@/common/hooks/useItems';
import { ItemsBody } from '@/features/items/index/ItemsBody';
import { ItemsHeader } from '@/features/items/index/ItemsHeader';

import { ITEMS_PER_PAGE } from '@/common/utils/constants';

export function ItemsContainer(): JSX.Element {
  const router = useRouter();
  const { type, page } = router.query;

  const { items, ids } = useItems({ type: type as string, page: page as string });
  const isLoading: boolean = items && ids.length > 0;

  return (
    <>
      <Header>
        <title>Next HN | Item</title>
      </Header>
      {isLoading && (
        <>
          <ItemsHeader ids={ids} itemsPerPage={ITEMS_PER_PAGE} type={type} />
          <ItemsBody activeItems={items} />
        </>
      )}
    </>
  );
}
