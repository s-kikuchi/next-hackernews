import React from 'react';
import { useRecoilValue } from 'recoil';

import { UnorderedList } from '@/common/components/List';
import { CommentsHeader } from '@/features/items/detail/CommentsHeader';
import { CommentsListItem } from '@/features/items/detail/CommentsListItem';
import { itemsState } from '@/common/hooks/useItems';
import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
}

const Comments: React.FC<Props> = (props) => {
  const { item } = props;
  const items = useRecoilValue(itemsState);

  return (
    <>
      <CommentsHeader descendants={item.descendants} />
      <UnorderedList>
        {item.kids.map((kid: number) => {
          return <CommentsListItem key={kid} item={items[kid]} />;
        })}
      </UnorderedList>
    </>
  );
};

export { Comments };
