import * as React from 'react';
import styled from 'styled-components';

import { ItemsCollectionContainer } from '@/components/containers/';

const Top: React.FC = () => {
  const type = 'top';

  return (
    <Wrapper>
      <ItemsCollectionContainer type={type} />
    </Wrapper>
  );
};

// TODO: Refactoring
const Wrapper = styled.main`
  width: 800px;
  margin: 0 auto;
  position: relative;
  paddingTop: 100px;
`;

export default Top;
