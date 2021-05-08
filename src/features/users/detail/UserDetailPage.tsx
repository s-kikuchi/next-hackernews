import React, { ReactElement } from 'react';

import { DetailPageLayout } from '@/common/components/Layout/DetailPageLayout';
import { UserContainer } from '@/features/users/detail/UserContainer';

export function UserDetailPage(): ReactElement {
  return (
    <>
      <DetailPageLayout>
        <UserContainer />
      </DetailPageLayout>
    </>
  );
}
