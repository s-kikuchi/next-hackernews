import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@@/styles/globals.css';

import HeaderContainer from '@/components/containers/HeaderContainer';

const App = ({ Component, pageProps }: AppProps): any => {
  return (
    <RecoilRoot>
      <HeaderContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
