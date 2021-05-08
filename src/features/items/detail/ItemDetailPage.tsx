import React from 'react';

import { MainPageLayout } from '@/common/components/Layout';
import { ItemContainer } from '@/features/items/detail/ItemContainer';

export function ItemDetailPage(): JSX.Element {
  return (
    <MainPageLayout paddingTop={'65px'}>
      <ItemContainer />
    </MainPageLayout>
  );
}
