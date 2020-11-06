import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { ListItem } from '@/components/gui/parts/List';

interface Props {
  item: {
    url: string,
    by: string,
    title: string,
    id: number,
    score: number,
    descendants: number,
    __lastUpdated: number,
    time: number
  };
}

/**
 * Items domain object. This component shows Items.
 * @param props
 */
const Items: React.FC<Props> = (props): React.ReactElement => {
  const { item } = props;

  const itemTitle = item.url ? (
    <>
      <a href={item.url} target="_blank" rel="noreferrer">
        {item.title}
        <span style={{ fontSize: '.85em', color: '#828282' }}> ({item.url})</span>
      </a>
    </>
  ) : (
    <Link href={'/item/' + item.id}>{item.title}</Link>
  );

  return (
    <Wrapper>
      <ScoreWrapper>{item.score}</ScoreWrapper>
      <TitleWrapper>{itemTitle}</TitleWrapper>
      <MetaWrapper>
        <span>
          by <Link href={'/user/' + item.by}>{item.by}</Link>
        </span>
        <span> 1 hour ago</span>
      </MetaWrapper>
    </Wrapper>
  );
};

// TODO: Refactoring
const Wrapper = styled(ListItem)`
  display: grid;
  grid-template-rows: 32px 12px;
  grid-template-columns: 80px 1fr;
`;

const ScoreWrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  color: #ff6600;
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
  line-height: 44px;
`;

const TitleWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  line-height: 32px;
  padding-left: 10px;
`;

const MetaWrapper = styled.div`
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

Items.defaultProps = {
  item: {
    id: 1234,
    title: 'Title Title',
    url: 'http://example.com',
    by: 'Test user',
    score: 123,
    descendants: 123,
    __lastUpdated: 1234545,
    time: 123344556
  },
};

export default Items;
