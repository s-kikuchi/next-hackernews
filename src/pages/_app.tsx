import React from 'react';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): any => {
  return <Component {...pageProps} />;
};

export default App;
