import * as React from 'react';
import Router from 'next/router';

const Index = (): React.ReactElement => {
  React.useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/item/?type=top&page=1');
    }
  });
  return <div>Loading</div>;
};

export default Index;
