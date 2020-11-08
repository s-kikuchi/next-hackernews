import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { useItems, itemsState } from '@/hooks';
import { Items } from '@/components/domain/objects/Items';

interface Props {
  type: string,
}

const ItemsCollectionContainer: React.FC<Props> = (props): React.ReactElement => {
  const { type } = props;
  useItems(type);
  const items = useRecoilValue(itemsState);

  return (
    // @ts-ignore
    <Items items={items} />
  )
};

export default ItemsCollectionContainer;
