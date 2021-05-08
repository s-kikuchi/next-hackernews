import React from 'react';

import { UnorderedList } from '@/common/components/List';
import { CommentsHeader } from '@/features/items/detail/CommentsHeader';
import { CommentsListItem } from '@/features/items/detail/CommentsListItem';
import { Item } from '@/common/models/Item';

interface Props {
  item: Item;
}

export function Comments(props: Props): JSX.Element {
  const { item } = props;

  return (
    <>
      <CommentsHeader descendants={item.descendants} />
      <UnorderedList>
        {item.kids.map((kid: number) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return <CommentsListItem key={kid} kidId={kid as string} />;
        })}
      </UnorderedList>
    </>
  );
}
