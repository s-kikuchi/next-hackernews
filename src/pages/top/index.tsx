import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { ItemsCollectionContainer } from '@/components/containers/';

const Top: React.FC = () => {
  const type = 'top';

  return (
    <>
      <Head>
        <title>Next HN | Top</title>
      </Head>

      <Wrapper>
        <ItemsCollectionContainer type={type} />
      </Wrapper>
    </>
  );
};

// TODO: Refactoring
const Wrapper = styled.main`
  width: 800px;
  margin: 0 auto;
  position: relative;
  padding-top: 100px;
`;

export default Top;
