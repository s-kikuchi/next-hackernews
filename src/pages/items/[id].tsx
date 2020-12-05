import * as React from 'react';

import { MainLayout } from '@/components/layouts';
import { ItemCollectionContainer } from '@/components/containers';

export default (): React.ReactElement => {
  return (
    <MainLayout paddingTop={'65px'}>
      <ItemCollectionContainer />
    </MainLayout>
  );
};
