import * as React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { ListLayout } from '@/common/components/Layouts';
import Link from 'next/link';
import { itemsState } from '@/common/hooks/useItems';
import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
}

const CommentListItem: React.FC<Props> = (props) => {
  const { item } = props;
  const items = useRecoilValue(itemsState);

  if (!item) {
    return <div style={{ paddingTop: '100px' }}>Loading</div>;
  } else {
    return (
      <Wrapper>
        <div style={{ fontSize: '.9em', margin: '1em 0', color: '#828282' }}>
          <Link href={'/users/' + item.by}>
            <a style={{ color: '#828282', textDecoration: 'underline' }}>{item.by}</a>
          </Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: item.text }} />
        {item.kids && item.kids.length ? (
          <ListLayout>
            {item.kids.map((kid) => {
              return <CommentListItem key={kid} item={items[kid]} />;
            })}
          </ListLayout>
        ) : null}
      </Wrapper>
    );
  }
};

const Wrapper = styled.li`
  // border-top: 1px solid #eee;
  position: relative;
  margin-left: 1.5em;
`;

export { CommentListItem };
