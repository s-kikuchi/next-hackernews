import * as React from 'react';
import { useRecoilState } from 'recoil';

import { Items } from '@/components/domain/objects/Items';
import { useList, useActiveIds, useItems, allState } from '@/hooks';

interface Props {
  type: string,
}

const ItemsCollectionContainer: React.FC<Props> = (props): React.ReactElement => {
  const { type } = props;
  const [ state, setState ] = useRecoilState(allState);

  useList(type);
  const ids = useActiveIds();
  useItems(ids);

  return (
    <Items
      items={state.items}
      itemsPerPage={state.itemsPerPage}
      lists={state.lists}
      type={type}
    />
  )
};

export default ItemsCollectionContainer;
