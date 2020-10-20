import React from 'react';
import { AppProps, Container } from 'next/app';

import Header from '@/components/organisms/Header';
import '@@/styles/globals.css';

const App = ({ Component, pageProps }: AppProps): any => {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
};

export default App;
