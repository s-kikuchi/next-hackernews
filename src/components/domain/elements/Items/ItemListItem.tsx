import * as React from 'react';

import { ListItemLayout } from "@/components/gui/parts/List";
import { ItemListScore, ItemListTitle, ItemListMeta } from '@/components/domain/elements/Items';
import * as Model from '@/models';

interface Props {
  item: Model.Item
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
      <ItemListMeta by={item.by} time={item.time} />
    </ListItemLayout>
  );
};

export default ItemListItem;
