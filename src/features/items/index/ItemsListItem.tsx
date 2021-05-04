import React from 'react';

import { List } from '@/common/components/List';
import { ItemsListScore, ItemsListTitle, ItemsListMeta } from '@/common/components/domain/elements/Items';
import { ItemsListScore } from '@/features/items/index/ItemsListScore';

import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
}

export function ItemsListItem(props: Props): JSX.Element {
  const { item } = props;

  return (
    <List>
      <ItemsListScore score={item.score} />
      <ItemsListTitle id={item.id} title={item.title} url={item.url} />
      <ItemsListMeta id={item.id} by={item.by} time={item.time} descendants={item.descendants} />
    </List>
  );
}
