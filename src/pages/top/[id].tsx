import * as React from 'react';
import Head from 'next/head';

import { ItemsCollectionContainer } from '@/components/containers/';
import { MainLayout } from '@/components/layouts';

import { useList } from '@/hooks';

const Top: React.FC = () => {
  const type = 'top';
  useList(type);

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
