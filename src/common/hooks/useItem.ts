import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { itemsState } from '@/common/hooks/useItems';
import { fetchItem } from '@/common/api';
import * as Model from '@/common/models';

const useItem = (): Model.Item => {
  const router = useRouter();
  const [items, setItems] = useRecoilState(itemsState);
  const { id } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
      if (!items[id as string]) {
        fetchItem(Number(id)).then((item) => {
          setItems((prevState) => ({ ...prevState, [id as string]: item }));
        });
      }
    }
  }, [router]);
  return items[id as string];
};

export { useItem };
