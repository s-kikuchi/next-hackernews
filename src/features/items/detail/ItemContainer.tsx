import * as React from 'react';
import { Item } from '@/common/components/domain/objects/Item';
import { useItem, useComments } from '@/common/hooks';

export function ItemContainer():React.ReactElement {
  const item = useItem();
  // TODO: Look again custom hook ans state structure
  const commentIsLoading = useComments(item);

  return <Item item={item} loading={commentIsLoading} />;
}
