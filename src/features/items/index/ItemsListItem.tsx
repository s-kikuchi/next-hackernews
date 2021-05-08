import React from 'react';

import { List } from '@/common/components/List';
import { ItemsListItemScore } from '@/features/items/index/ItemsListItemScore';
import { ItemsListItemTitle } from '@/features/items/index/ItemsListItemTitle';
import { ItemsListItemMeta } from '@/features/items/index/ItemsListItemMeta';

import { Item } from '@/common/models/Item';

interface Props {
  item: Item;
}

export function ItemsListItem(props: Props): JSX.Element {
  const { item } = props;

  return (
    <List>
      <ItemsListItemScore score={item.score} />
      <ItemsListItemTitle id={item.id} title={item.title} url={item.url} />
      <ItemsListItemMeta
        id={item.id}
        by={item.by}
        time={item.time}
        descendants={item.descendants}
      />
    </List>
  );
}
