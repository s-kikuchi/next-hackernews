import * as React from 'react';
import { Item } from '@/components/domain/objects/Item';
import { useItem, useComments } from '@/hooks';

const ItemCollectionContainer: React.FC = () => {
  const item = useItem();
  useComments(item);

  return <Item item={item} />;
};

export default ItemCollectionContainer;
