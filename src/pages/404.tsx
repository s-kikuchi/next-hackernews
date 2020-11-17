import * as React from 'react';

import { MainLayout } from '@/components/layouts';

const Custom404 = (): React.ReactElement => {
  return (
    <MainLayout paddingTop={'80px'}>
      <div style={ { fontWeight: 800, fontSize: '40px', } }>
        404 Not Found
      </div>
    </MainLayout>
  )
};

export default Custom404;
