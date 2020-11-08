import * as React from 'react';
import styled from 'styled-components';

interface Props {
  score: number
}

/**
 * ItemListScore domain element.
 */
const ItemListScore: React.FC<Props> = (props): React.ReactElement => {
  const { score } = props;
  return (
    <Wrapper>
      { score }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  color: #ff6600;
  font-size: 1.1em;
  font-weight: 700;
  text-align: center;
  line-height: 44px;
`;
export default ItemListScore;