import React from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@/common/components/Spinner';

export function IndexPage(): React.ReactElement {
  const router = useRouter();
  React.useEffect(() => {
    const { pathname } = router;
    (async () => {
      if (pathname === '/') {
        await router.push('/items/?type=top');
      }
    })();
  });
  return <Spinner />;
}
