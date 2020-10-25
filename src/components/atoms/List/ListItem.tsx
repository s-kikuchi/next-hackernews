/**
 * List component
 */
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const ListItem = ({ children, ...props}: Props): React.ReactElement => {
  return <Wrapper { ...props }>{children}</Wrapper>;
};

const Wrapper = styled.li`
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

export default ListItem;
