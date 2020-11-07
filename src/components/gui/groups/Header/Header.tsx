import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { TABLET_MEDIA, MOBILE_MEDIA } from '@/constants/mediaquery';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <A>Logo</A>
        </Link>
        <Link href="/top">
          <A>Top</A>
        </Link>
        <Link href="/new">
          <A>New</A>
        </Link>
        <Link href="/show">
          <A>Show</A>
        </Link>
        <Link href="/ask">
          <A>Ask</A>
        </Link>
        <Link href="/job">
          <A>Job</A>
        </Link>
        <a
          style={{
            color: '#fff',
            fontWeight: 300,
            fontSize: '1em',
            margin: 0,
            float: 'right',
            lineHeight: '24px',
          }}
          target="_blank"
          href="https://github.com/s-kikuchi/next-hackernews"
        >
          Git Hub
        </a>
      </Nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: #ff6600;
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

const A = styled.a`
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
