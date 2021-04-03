import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

/**
 * List component
 */
export function List({ children, ...props }: Props): React.ReactElement {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.li`
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #eee;

  display: grid;
  grid-template-rows: 32px 12px;
  grid-template-columns: 80px 1fr;
`;
