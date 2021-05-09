import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { ErrorPageLayout } from '@/features/error/ErrorPageLayout';

export function ErrorPage(): ReactElement {
  return (
    <ErrorPageLayout>
      <Wrapper>404 Not Found</Wrapper>
    </ErrorPageLayout>
  );
}

const Wrapper = styled.div`
  font-weight: 800;
  font-size: 40px;
`;
