import React, { ReactElement } from 'react';

import { ItemsCollectionContainer } from '@/common/components/containers';
import { MainLayout } from '@/common/components/Layouts';

function ItemsIndexPage(): ReactElement {
  return (
    <MainLayout>
      <ItemsCollectionContainer />
    </MainLayout>
  );
}

export { ItemsIndexPage };
