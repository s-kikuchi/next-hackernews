import * as React from 'react';
import Head from 'next/head';
import { useRecoilState } from 'recoil';

import { ItemsCollectionContainer } from '@/components/containers/';
import { MainLayout } from '@/components/layouts';

import { useList, allState } from '@/hooks';

const Item: React.FC = () => {
  const [state, setState] = useRecoilState(allState);
  useList();

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
