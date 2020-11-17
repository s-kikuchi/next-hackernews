import * as React from 'react';
import styled from 'styled-components';
import Header from 'next/head';

import { MainLayout } from '@/components/layouts';
import { useUser } from '@/hooks/';
import { UserDetailContainer } from '@/components/containers';

export default (): React.ReactElement => {
  useUser();

  return (
    <>
      <Header>
        <title>Next HK | User</title>
      </Header>

      <MainLayout paddingTop={'65px'}>
        <UserDetailContainer />
      </MainLayout>
    </>
  );
}
