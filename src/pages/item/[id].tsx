import * as React from 'react';
import Header from 'next/head';

import { MainLayout } from '@/components/layouts'
import { ItemCollectionContainer } from '@/components/containers';

export default (): React.ReactElement => {
  return (
    <>
      <Header>
        <title>Next HK | Item</title>
      </Header>

      <MainLayout paddingTop={'65px'}>
        <ItemCollectionContainer />
      </MainLayout>
    </>
  );
};
