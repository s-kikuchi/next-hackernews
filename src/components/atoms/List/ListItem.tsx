/**
 * List component
 */
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
}

const ListItem = (props: Props): React.ReactElement => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.li`
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  line-height: 20px;
  position: relative;
`;

export default ListItem;
