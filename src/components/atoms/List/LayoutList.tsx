/**
 * Layout component for ListItem component (./ListItem.tsx)
 * @listStyleType { default: none }
 * @padding { default: 0 }
 * @margin { default: 0 }
 */
import * as React from 'react';
import styled from 'styled-components';
import { Property } from 'csstype';

interface Props {
  // style props
  listStyleType?: Property.ListStyleType,
  padding?: Property.Padding,
  margin?: Property.Margin,

  // react node
  children?: React.ReactNode,
}

const LayoutList = (props: Props) => {
  const { listStyleType, padding, margin, children } = props;

  return (
    <Wrapper {...{ listStyleType, padding, margin }}>
      {children}
    </Wrapper>
  )
};

const Wrapper = styled.ul`
  list-style-type: ${(props: Props) => props.listStyleType || "none" };
  padding: ${(props: Props) => props.padding || 0 };
  margin: ${(props: Props) => props.margin || 0 }
`;

export default LayoutList;
