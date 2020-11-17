import * as React from 'react';
import styled from 'styled-components';
import Header from 'next/head';

import { useUser } from '@/hooks/';
import { UserDetailContainer } from '@/components/containers';

export default (): React.ReactElement => {
  useUser();

  return (
    <>
      <Header>
        <title>Next HK | User</title>
      </Header>

      <Wrapper>
        <UserDetailContainer />
      </Wrapper>
    </>
  );
}

// TODO: Refactoring (This is used in /pages/top/index.ts too)
const Wrapper = styled.main`
  width: 800px;
  margin: 0 auto;
  position: relative;
  padding-top: 10px;
`;
