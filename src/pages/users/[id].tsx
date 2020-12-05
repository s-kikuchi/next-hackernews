import * as React from 'react';

import { MainLayout } from '@/components/layouts';
import { UserCollectionContainer } from '@/components/containers';

export default (): React.ReactElement => {
  return (
    <>
      <MainLayout paddingTop={'65px'}>
        <UserCollectionContainer />
      </MainLayout>
    </>
  );
};
