import * as React from 'react';

import { MainLayout } from '@/common/components/Layouts';
import { UserCollectionContainer } from '@/common/components/containers';

export default (): React.ReactElement => {
  return (
    <>
      <MainLayout paddingTop={'65px'}>
        <UserCollectionContainer />
      </MainLayout>
    </>
  );
};
