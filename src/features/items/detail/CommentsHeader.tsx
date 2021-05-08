import React from 'react';
import styled from 'styled-components';

interface Props {
  descendants: number;
}

export function CommentsHeader(props: Props): JSX.Element {
  const { descendants } = props;
  return <Wrapper>{descendants} comments</Wrapper>;
}

const Wrapper = styled.div`
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
`;
