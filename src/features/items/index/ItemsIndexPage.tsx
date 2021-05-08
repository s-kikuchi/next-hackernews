import React from 'react';

import { ItemsContainer } from '@/features/items/index/ItemsContainer';
import { MainPageLayout } from '@/common/components/Layout';

export function ItemsIndexPage(): JSX.Element {
  return (
    <MainPageLayout>
      <ItemsContainer />
    </MainPageLayout>
  );
}
