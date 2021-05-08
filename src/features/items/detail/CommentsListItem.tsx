import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { UnorderedList } from '@/common/components/List';
import { useItem } from '@/common/hooks/useItem';

interface Props {
  kidId: string;
}

function CommentsListItem(props: Props): JSX.Element {
  const { kidId } = props;
  // TODO: Data fetch code should be moved to container component
  const { data: item } = useItem(kidId);

  if (!item) {
    return <div style={{ paddingTop: '100px' }}>Loading</div>;
  }

  return (
    <Wrapper>
      <div style={{ fontSize: '.9em', margin: '1em 0', color: '#828282' }}>
        <Link href={'/users/' + item.by}>
          <a style={{ color: '#828282', textDecoration: 'underline' }}>{item.by}</a>
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: item.text }} />
      {item.kids && item.kids.length ? (
        <UnorderedList>
          {item.kids.map((kid) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return <CommentsListItem key={kid} kidId={kid} />;
          })}
        </UnorderedList>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.li`
  // border-top: 1px solid #eee;
  position: relative;
  margin-left: 1.5em;
`;

export { CommentsListItem };
