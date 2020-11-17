import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { ItemsCollectionContainer } from '@/components/containers/';
import { MainLayout } from '@/components/layouts';

const Top: React.FC = () => {
  const type = 'top';

  return (
    <>
      <Head>
        <title>Next HN | Top</title>
      </Head>

      <MainLayout>
        <ItemsCollectionContainer type={type} />
      </MainLayout>
    </>
  );
};

export default Top;
