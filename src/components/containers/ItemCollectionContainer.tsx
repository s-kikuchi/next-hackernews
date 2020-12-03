import * as React from 'react';
import { Item } from '@/components/domain/objects/Item';
import { useItem, useComments } from '@/hooks';

const ItemCollectionContainer: React.FC = () => {
  const item = useItem();
  // TODO: Look again custom hook ans state structure
  const commentIsLoading = useComments(item);

  return <Item item={item} loading={commentIsLoading}/>;
};

export default ItemCollectionContainer;
