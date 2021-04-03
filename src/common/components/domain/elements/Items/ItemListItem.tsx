import * as React from 'react';

import { ListItemLayout } from '@/common/components/Layouts';
import { ItemListScore, ItemListTitle, ItemListMeta } from '@/common/components/domain/elements/Items/index';
import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
}

/**
 *
 * ItemListItem domain element
 * @param props
 *
 */
const ItemListItem: React.FC<Props> = (props): React.ReactElement => {
  const { item } = props;

  return (
    <ListItemLayout>
      <ItemListScore score={item.score} />
      <ItemListTitle id={item.id} title={item.title} url={item.url} />
      <ItemListMeta id={item.id} by={item.by} time={item.time} descendants={item.descendants} />
    </ListItemLayout>
  );
};

export default ItemListItem;
