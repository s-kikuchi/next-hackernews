import React, { ReactElement } from 'react';

import { MainLayout } from '@/common/components/Layouts';
import { ItemCollectionContainer } from '@/common/components/containers';

export function ItemIdPage(): ReactElement {
  return (
    <MainLayout paddingTop={'65px'}>
      <ItemCollectionContainer />
    </MainLayout>
  );
}
