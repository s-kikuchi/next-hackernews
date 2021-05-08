import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PRIMARY, TABLET_MEDIA, MOBILE_MEDIA, MOBILE_WINDOW } from '@/common/utils/constants';

interface Props {
  width: number;
}

export function Header(props: Props) {
  const { width } = props;
  return (
    <Wrapper>
      <Nav>
        <Link href="/items?type=top&page=1">
          <StyledLink>Top</StyledLink>
        </Link>
        <Link href="/items?type=new&page=1">
          <StyledLink>New</StyledLink>
        </Link>
        <Link href="/items?type=show&page=1">
          <StyledLink>Show</StyledLink>
        </Link>
        <Link href="/items?type=ask&page=1">
          <StyledLink>Ask</StyledLink>
        </Link>
        <Link href="/items?type=job&page=1">
          <StyledLink>Job</StyledLink>
        </Link>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: ${PRIMARY};
  position: fixed;
  z-index: 999;
  height: 55px;
  top: 0;
  left: 0;
  right: 0;
`;

const Nav = styled.nav`
  max-width: 800px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px 5px;
  ${TABLET_MEDIA} {
    padding: 15px 30px;
  }
  ${MOBILE_MEDIA} {
    padding: 15px;
  }
`;

const StyledLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.15s ease;
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: 0.075em;
  margin-right: 1.8em;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const GitHubLink = styled.a`
  color: #fff;
  font-weight: 300;
  font-size: 1em;
  margin: 0;
  float: right;
  line-height: 24px;
`;
