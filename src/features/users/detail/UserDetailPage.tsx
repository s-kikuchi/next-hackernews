import React, { ReactElement } from 'react';

import { MainPageLayout } from '@/common/components/Layout';
import { UserContainer } from '@/features/users/detail/UserContainer';

export function UserDetailPage(): ReactElement {
  return (
    <>
      <MainPageLayout paddingTop={'65px'}>
        <UserContainer />
      </MainPageLayout>
    </>
  );
}
