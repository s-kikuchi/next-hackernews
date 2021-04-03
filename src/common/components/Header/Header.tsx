import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { PRIMARY, TABLET_MEDIA, MOBILE_MEDIA, MOBILE_WINDOW } from '@/common/utils/constants';

interface Props {
  width: number;
}

const Header: React.FC<Props> = (props) => {
  const { width } = props;

  return (
    <Wrapper>
      <Nav>
        <Link href="/items?type=top">
          <StyledA>Top</StyledA>
        </Link>
        <Link href="/items?type=new">
          <StyledA>New</StyledA>
        </Link>
        <Link href="/items?type=show">
          <StyledA>Show</StyledA>
        </Link>
        <Link href="/items?type=ask">
          <StyledA>Ask</StyledA>
        </Link>
        <Link href="/items?type=job">
          <StyledA>Job</StyledA>
        </Link>
        {width > MOBILE_WINDOW.width ? (
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
        ) : null}
      </Nav>
    </Wrapper>
  );
};

export default Header;

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

const StyledA = styled.a`
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
