import React, { ReactElement } from 'react';

import { ItemsCollectionContainer } from '@/common/components/containers';
import { MainPageLayout } from '@/common/components/Layouts';

function ItemsIndexPage(): ReactElement {
  return (
    <MainPageLayout>
      <ItemsCollectionContainer />
    </MainPageLayout>
  );
}

export { ItemsIndexPage };
