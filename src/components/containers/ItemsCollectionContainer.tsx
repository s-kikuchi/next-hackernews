import * as React from 'react';

import { Items } from '@/components/domain/objects/Items';
import { useIds, useActiveItems, useItems } from '@/hooks';

const ItemsCollectionContainer: React.FC = (): React.ReactElement => {
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
};

export default ItemsCollectionContainer;
