import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@@/styles/globals.css';

import { HeaderContainer } from '@/common/components/containers/HeaderContainer';

export default function App({ Component, pageProps }: AppProps): any {
  return (
    <RecoilRoot>
      <HeaderContainer />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
