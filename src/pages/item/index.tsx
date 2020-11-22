import * as React from 'react';
import Head from 'next/head';

import { ItemsCollectionContainer } from '@/components/containers/';
import { MainLayout } from '@/components/layouts';

const Item: React.FC = () => {
  return (
    <>
      <Head>
        <title>Next HN | Item List</title>
      </Head>

      <MainLayout>
        <ItemsCollectionContainer />
      </MainLayout>
    </>
  );
};

export default Item;
