import React from 'react';

import { DetailPageLayout } from '@/common/components/Layout/DetailPageLayout';
import { ItemContainer } from '@/features/items/detail/ItemContainer';

export function ItemDetailPage(): JSX.Element {
  return (
    <DetailPageLayout>
      <ItemContainer />
    </DetailPageLayout>
  );
}
