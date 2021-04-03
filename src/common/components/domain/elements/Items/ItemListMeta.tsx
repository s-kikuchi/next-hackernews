import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { timeAgo } from '@/common/utils/filter';

interface Props {
  id: number;
  by: string;
  time: number;
  descendants: number | undefined;
}

const ItemListMeta: React.FC<Props> = (props): React.ReactElement => {
  const { id, by, time, descendants } = props;
  return (
    <Wrapper>
      <span>
        by <Link href={'/users/' + by}>{by}</Link>
      </span>
      <span> {timeAgo(time)} ago </span>
      {/* Don't remove below section when descendants are 0, but remove when descendants === undefined */}
      {descendants !== undefined ? (
        <span>
          <Link href={'/items/' + id}>
            <a>{descendants} comments</a>
          </Link>
        </span>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  padding-left: 10px;
  line-height: 12px;
  font-size: 0.85em;
  color: #828282;
  a {
    color: #828282;
    text-decoration: underline;
    &:hover: {
      color: #ff6600;
    }
  }
`;

export default ItemListMeta;
