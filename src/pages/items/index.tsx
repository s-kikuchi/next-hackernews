import * as React from 'react';

import { ItemsCollectionContainer } from '@/components/containers/';
import { MainLayout } from '@/components/layouts';

const Item: React.FC = () => {
  return (
    <MainLayout>
      <ItemsCollectionContainer />
    </MainLayout>
  );
};

export default Item;
