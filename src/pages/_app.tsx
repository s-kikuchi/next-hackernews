import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import Header from '@/components/gui/groups/Header';
import '@@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): any => {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
