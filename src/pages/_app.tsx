import React from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import '@@/styles/globals.css';

import { FlexibleHeader } from '@/common/components/Header/FlexibleHeader';

export default function App({ Component, pageProps }: AppProps): any {
  return (
    <RecoilRoot>
      <FlexibleHeader />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
