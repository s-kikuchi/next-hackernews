import * as React from 'react';
import { MainPageLayout } from '@/common/components/Layouts';

function Custom404(): React.ReactElement {
  return (
    <MainPageLayout paddingTop={'80px'}>
      <div style={{ fontWeight: 800, fontSize: '40px' }}>404 Not Found</div>
    </MainPageLayout>
  );
}

export default Custom404;
