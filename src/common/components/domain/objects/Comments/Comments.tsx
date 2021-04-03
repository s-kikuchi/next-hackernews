import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { ListLayout } from '@/common/components/Layouts';
import { CommentsHeader } from '@/common/components/domain/elements/Comments';
import { CommentListItem } from '@/common/components/domain/elements/Comments';
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
      <ListLayout>
        {item.kids.map((kid: number) => {
          return <CommentListItem key={kid} item={items[kid]} />;
        })}
      </ListLayout>
    </>
  );
};

export default Comments;
