import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '@/common/utils/constants';

interface Props {
  score: number;
}

export function ItemsListScore(props: Props): JSX.Element {
  const { score } = props;
  return <Wrapper>{score}</Wrapper>;
}

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  color: ${PRIMARY};
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
  line-height: 44px;
`;
