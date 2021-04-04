import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { atom, useRecoilState } from 'recoil';

import { fetchIdsByType } from '@/common/api';

const initialState: {
  [type: string]: number[];
} = {};

export const idsState = atom({
  key: 'idsState',
  default: initialState,
});

const useIds = () => {
  const [ids, setIds] = useRecoilState(idsState);
  const router = useRouter();
  const { type } = router.query;

  useEffect(() => {
    if (router.asPath !== router.route) {
      fetchIdsByType(type as string).then((ids: number[]) => {
        setIds((prevState) => {
          return {
            ...prevState,
            [type as string]: ids,
          };
        });
      });
    }
  }, [router]);

  return ids[type as string];
};

export { useIds };
