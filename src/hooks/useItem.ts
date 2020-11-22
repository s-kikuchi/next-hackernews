import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil'

import { itemsState } from '@/hooks/useItems';
import { fetchItem }  from '@/repositories';

const useItem = () => {
  const router = useRouter();
  const [items, setItems] = useRecoilState(itemsState);
  const { id } = router.query;

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      // @ts-ignore
      if (!items[id]) {
        fetchItem(Number(id)).then((item) => {
          // @ts-ignore
          setItems((prevState) => ({ ...prevState, [id]: item }))
        })
      }
    }
  }, [router]);

  // @ts-ignore
  return items[id]
};

export { useItem }
