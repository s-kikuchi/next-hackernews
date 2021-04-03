import React, { ReactElement } from 'react';

import { MainPageLayout } from '@/common/components/Layouts';
import { ItemCollectionContainer } from '@/common/components/containers';

export function ItemIdPage(): ReactElement {
  return (
    <MainPageLayout paddingTop={'65px'}>
      <ItemCollectionContainer />
    </MainPageLayout>
  );
}
