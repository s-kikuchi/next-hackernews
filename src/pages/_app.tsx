import React from 'react';
import { AppProps } from 'next/app';
import '@@/styles/globals.css';

import { FlexibleHeader } from '@/common/components/Header/FlexibleHeader';

export default function App({ Component, pageProps }: AppProps): any {
  return (
    <>
      <FlexibleHeader />
      <Component {...pageProps} />
    </>
  );
}
