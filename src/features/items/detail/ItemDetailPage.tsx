import React, { ReactElement } from 'react';

import { MainPageLayout } from '@/common/components/Layout';
import { ItemContainer } from '@/features/items/detail/ItemContainer';

export function ItemDetailPage(): ReactElement {
  return (
    <MainPageLayout paddingTop={'65px'}>
      <ItemContainer />
    </MainPageLayout>
  );
}
