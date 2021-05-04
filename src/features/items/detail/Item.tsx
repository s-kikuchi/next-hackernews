import React from 'react';
import Header from 'next/head';
import styled from 'styled-components';

import { ItemDetail } from '@/features/items/detail/ItemDetail';
import { Comments } from '@/features/items/detail/Comments';
import { Spinner } from '@/common/components/Spinner';
import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
  loading: boolean;
}

const Item: React.FC<Props> = (props): React.ReactElement => {
  const { item, loading } = props;

  if (!item || loading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  } else {
    return (
      <>
        <Header>
          <title>Next HN | {item.title}</title>
        </Header>

        <Wrapper>
          <ItemDetail by={item.by} title={item.title} score={item.score} />
          <Comments item={item} />
        </Wrapper>
      </>
    );
  }
};

const Wrapper = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 3em;
  padding-right: 3em;
`;

export { Item };
