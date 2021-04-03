import React, { ReactElement } from 'react';

import { MainPageLayout } from '@/common/components/Layouts';
import { UserCollectionContainer } from '@/common/components/containers';

export function UserDetailPage(): ReactElement {
  return (
    <>
      <MainPageLayout paddingTop={'65px'}>
        <UserCollectionContainer />
      </MainPageLayout>
    </>
  );
}
