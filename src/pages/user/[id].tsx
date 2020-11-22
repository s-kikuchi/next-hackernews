import * as React from 'react';
import Header from 'next/head';

import { MainLayout } from '@/components/layouts';
import { UserCollectionContainer } from '@/components/containers';

export default (): React.ReactElement => {
  return (
    <>
      <Header>
        <title>Next HK | User</title>
      </Header>

      <MainLayout paddingTop={'65px'}>
        <UserCollectionContainer />
      </MainLayout>
    </>
  );
};
