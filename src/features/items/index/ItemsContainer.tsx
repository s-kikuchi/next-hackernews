import * as React from 'react';

import { Items } from '@/common/components/domain/objects/Items';
import { useIds, useActiveItems, useItems } from '@/common/hooks';

export function ItemsContainer(): React.ReactElement {
  const ids = useIds();
  const { items } = useItems(ids);
  const { activeItems, itemsPerPage, activeItemType } = useActiveItems(ids, items);

  return (
    <Items
      ids={ids}
      itemsPerPage={itemsPerPage}
      activeItemType={activeItemType}
      activeItems={activeItems}
    />
  );
}
