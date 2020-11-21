import * as React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  lists: Object;
  itemsPerPage: number;
  type: string;
}

const ItemsHeader: React.FC<Props> = (props) => {
  const { lists, type, itemsPerPage } = props;
  const router = useRouter();

  const maxPage = () => {
    return Math.ceil(lists[type].length / itemsPerPage);
  };

  const currentPage = () => {
    return Number(router.query.page || 1);
  };

  if (!lists || !type || !itemsPerPage) {
    return <Wrapper>Loading</Wrapper>;
  } else {
    return (
      <Wrapper>
        {currentPage() <= 1 ? (
          <StyledA>&lt; prev</StyledA>
        ) : (
          <Link href={`/item?type=${type}&page=${currentPage() - 1}`}>&lt; prev</Link>
        )}
        <span>
          {' '}
          {currentPage()} / {maxPage()}{' '}
        </span>
        {maxPage() === currentPage() ? (
          <StyledA>more &gt;</StyledA>
        ) : (
          <Link href={`/item?type=${type}&page=${currentPage() + 1}`}>more &gt;</Link>
        )}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  padding: 15px 30px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledA = styled.a`
  color: #ccc;
`;

export default ItemsHeader;
