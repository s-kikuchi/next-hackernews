import * as React from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';

interface Props {
  paddingTop?: Property.PaddingTop;
  children?: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.main`
  // this styles are used for all components
  width: 800px;
  margin: 0 auto;
  position: relative;

  // this can be changed
  padding-top: ${(props: Props) => props.paddingTop || '0px'};
`;

export default MainLayout;
