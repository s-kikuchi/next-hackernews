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
    <div>
      {!items
        ? <div>Loading!!</div>
        : items.map((item) => <Items key={item.id + item.title} item={item} />)}
    </div>
  )
};

export default ItemsCollectionContainer;

