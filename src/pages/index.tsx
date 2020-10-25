import * as React from 'react';
import styled from 'styled-components';

import { Article } from '@/components/organisms/Article';
import { LayoutList } from '@/components/atoms/List';

const Top: React.FC = () => {
  return (
    <>
      <main style={{ width: "800px", margin: "0 auto", position: "relative" }}>
        <NewsView>
          <NewsListNav>
            &lt; prev / more &gt;
          </NewsListNav>
        </NewsView>
        <NewsList>
          <LayoutList>
            <Article />
            <Article />
            <Article />
          </LayoutList>
        </NewsList>
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
};

const NewsView = styled.div`
`;

const NewsListNav = styled.div`
  background-color: #fff;
  border-radius: 2px;
  padding: 15px 30px;
  position: fixed;
  text-align: center;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 998;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
`;

const NewsList = styled.div`
  width: 100%;
  display: block;
  position: relative;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
`;

export default Top;
