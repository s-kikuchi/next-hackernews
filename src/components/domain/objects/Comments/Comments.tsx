import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { ListLayout } from '@/components/layouts';
import { CommentsHeader } from '@/components/domain/elements/Comments';
import { CommentListItem } from '@/components/domain/elements/Comments';
import { itemsState } from '@/hooks/useItems';
import * as Model from '@/models';

interface Props {
  item: Model.Item;
}
const Comments: React.FC<Props> = (props) => {
  const { item } = props;
  const items = useRecoilValue(itemsState);

  return (
    <>
      <CommentsHeader descendants={item.descendants} />
      <ListLayout>
        {item.kids.map((kid: number) => {
          return <CommentListItem key={kid} item={items[kid]} />;
        })}
      </ListLayout>
    </>
  );
};

export default Comments;
