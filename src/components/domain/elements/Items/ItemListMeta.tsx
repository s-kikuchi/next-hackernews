import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { timeAgo } from '@/utils/filter';

interface Props {
  by: string,
  time: number,
}

const ItemListMeta: React.FC<Props> = (props): React.ReactElement => {
  const { by, time } = props;
  return (
    <Wrapper>
      <span>
        by <Link href={'/user/' + by}>{by}</Link>
      </span>
      <span> {timeAgo(time)} ago</span>
    </Wrapper>
  )
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