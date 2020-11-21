import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface Props {
  url: string | any;
  id: number;
  title: string;
}

/**
 * ItemListTitle domain element.
 */
const ItemListTitle: React.FC<Props> = (props): React.ReactElement => {
  const { url, id, title } = props;

  return (
    <Wrapper>
      {url ? (
        <>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
            {/* <span style={{ fontSize: '.85em', color: '#828282' }}> ({url})</span> */}
          </a>
        </>
      ) : (
        <Link href={'/item/' + id}>{title}</Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  line-height: 32px;
  padding-left: 10px;
`;

export default ItemListTitle;
