import * as React from 'react';
import { useRecoilState } from 'recoil';

import { Items } from '@/components/domain/objects/Items';
import { useList, useActiveIds, useItems, allState } from '@/hooks';

const ItemsCollectionContainer: React.FC = (): React.ReactElement => {
  const [state, setState] = useRecoilState(allState);

  const ids = useActiveIds();
  useItems(ids);

  return (
    <Items
      items={state.items}
      itemsPerPage={state.itemsPerPage}
      lists={state.lists}
      type={state.activeType}
    />
  );
};

export default ItemsCollectionContainer;
