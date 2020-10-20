import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { TABLET_MEDIA, MOBILE_MEDIA } from "@/constants/mediaquery";

interface Props extends React.Attributes {

}

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Nav>
        <Link href="/"><A>Logo</A></Link>
        <Link href="/"><A>Top</A></Link>
        <Link href="/"><A>New</A></Link>
        <Link href="/"><A>Show</A></Link>
        <Link href="/"><A>Ask</A></Link>
        <Link href="/"><A>Job</A></Link>
        <a style={{ color: "#fff", fontWeight: 300, fontSize: "1em", margin: 0, float: "right", lineHeight: "24px" }} target="_blank">
          Git Hub
        </a>
      </Nav>
    </Wrapper>
  )
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
  color: rgba(255, 255, 255, .8);
  transition: color .15s ease;
  line-height: 24px;
  display: inline-block;
  vertical-align: middle;
  font-weight: 300;
  letter-spacing: .075em;
  margin-right: 1.8em;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
