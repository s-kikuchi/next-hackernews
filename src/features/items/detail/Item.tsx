import React from 'react';
import Header from 'next/head';
import styled from 'styled-components';

import { ItemDetail } from '@/features/items/detail/ItemDetail';
import { Comments } from '@/features/items/detail/Comments';
import { Spinner } from '@/common/components/Spinner';
import { Item as ModelItem } from '@/common/models/Item';

interface Props {
  item: ModelItem;
}

export function Item(props: Props): JSX.Element {
  const { item } = props;

  if (!item) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

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

const Wrapper = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 3em;
  padding-right: 3em;
`;
