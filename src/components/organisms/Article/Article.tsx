import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Property } from 'csstype';

import article from '@/interfaces/article';
import { ListItem } from '@/components/atoms/List';

interface Props {
  article: article,
}

const Article = (props: Props) => {

  const { article } = props;

  const articleTitle = article.url ? (
    <>
      <a href={article.url} target="_blank" rel="nonopener">{ article.title }</a>
      <span style={{ fontSize: '.85em', color: '#828282' }}> ({ article.url })</span>
    </>
  ) : (
    <Link href={'/item/' + article.id }>
      { article.title }
    </Link>
  );

  return (
    <ListItem>
      <ScoreWrapper>
        Score
      </ScoreWrapper>
      <TitleWrapper>
        { articleTitle }
      </TitleWrapper>
      <br />
      <MetaWrapper>
        <span>by <Link href={'/user/' + article.by }>{ article.by }</Link></span>
        <span> 1 hour ago</span>
      </MetaWrapper>
    </ListItem>
  )
};

const ScoreWrapper = styled.span`
  color: #ff6600;
  font-size: 1.1em;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 0;
  text-align: center;
  margin-top: -10px;
`;

const TitleWrapper = styled.span`
`;

const MetaWrapper = styled.span`
  font-size: .85em;
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
  },
};

export default Article;
