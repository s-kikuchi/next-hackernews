import React from 'react';
import Router from 'next/router';
import { Spinner } from '@/common/components/Spinner';

const Index = (): React.ReactElement => {
  React.useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/items/?type=top');
    }
  });
  return <Spinner />;
};

export default Index;
