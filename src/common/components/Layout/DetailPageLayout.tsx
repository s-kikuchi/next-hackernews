import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

export function DetailPageLayout({ children, ...props }: Props): JSX.Element {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.main`
  width: 800px;
  margin: 0 auto;
  position: relative;

  padding-top: 65px;
`;
