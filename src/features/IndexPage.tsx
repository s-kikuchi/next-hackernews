import React from 'react';
import { useRouter } from 'next/router'
import { Spinner } from '@/common/components/Spinner';

function IndexPage(): React.ReactElement {
  const router = useRouter()
  React.useEffect(() => {
    const { pathname } = router
    if (pathname == '/') {
      router.push('/items/?type=top');
    }
  });
  return <Spinner />;
}

export default IndexPage;
