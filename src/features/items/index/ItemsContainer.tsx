import React from 'react';
import Header from 'next/head';
import { useActiveItems, useIds, useItems } from '@/common/hooks';
import { ItemsBody, ItemsHeader } from '@/common/components/domain/elements/Items';

export function ItemsContainer(): React.ReactElement {
  const ids = useIds();
  const { items } = useItems(ids);
  const { activeItems, itemsPerPage, activeItemType } = useActiveItems(ids, items);
  const isLoading = !items.length || activeItems.length || !itemsPerPage || !activeItemType

  return (
    <>
      <Header>
        <title>Next HN | Item</title>
      </Header>
      { isLoading && (
        <>
          <ItemsHeader ids={ids} itemsPerPage={itemsPerPage} type={activeItemType} />
          <ItemsBody activeItems={activeItems} />
        </>
      )}
    </>
  );
}
