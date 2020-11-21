import * as React from 'react';
import Header from 'next/head';

import { ItemCollectionContainer } from '@/components/containers';

export default (): React.ReactElement => {
  return (
    <>
      <Header>
        <title>Next HK | Item</title>
      </Header>

      <ItemCollectionContainer />
    </>
  );
};
