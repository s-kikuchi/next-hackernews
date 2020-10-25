import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import article from '@/models/article';
import { ListItem } from '@/components/atoms/List';

interface Props {
  article: article;
}

const Article = (props: Props): React.ReactElement => {
  const { article } = props;

  const articleTitle = article.url ? (
    <>
      <a href={article.url} target="_blank" rel="noreferrer">
        {article.title}
      </a>
      <span style={{ fontSize: '.85em', color: '#828282' }}> ({article.url})</span>
    </>
  ) : (
    <Link href={'/item/' + article.id}>{article.title}</Link>
  );

  return (
    <Wrapper>
      <ScoreWrapper>
        {article.score}
      </ScoreWrapper>
      <TitleWrapper>
        {articleTitle}
      </TitleWrapper>
      <MetaWrapper>
        <span>
          by <Link href={'/user/' + article.by}>{article.by}</Link>
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

Article.defaultProps = {
  article: {
    id: 'name',
    title: 'Title Title',
    url: 'http://example.com',
    by: 'Test user',
    score: 123,
  },
};

export default Article;
