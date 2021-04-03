import React, { ReactElement } from 'react';
import { ItemsContainer } from '@/features/items/index/ItemsContainer';
import { MainPageLayout } from '@/common/components/Layout';

function ItemsIndexPage(): ReactElement {
  return (
    <MainPageLayout>
      <ItemsContainer />
    </MainPageLayout>
  );
}

export { ItemsIndexPage };
