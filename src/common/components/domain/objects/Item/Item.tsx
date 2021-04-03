import React from 'react';
import Header from 'next/head';
import styled from 'styled-components';

import { ItemDetail } from '@/common/components/domain/elements/Item';
import { Comments } from '@/common/components/domain/objects/Comments';
import { Spinner } from '@/common/components/Spinner';
import * as Model from '@/common/models';

interface Props {
  item: Model.Item;
  loading: boolean;
}

/**
 * Item Domain object
 * @param props
 */
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
export default Item;