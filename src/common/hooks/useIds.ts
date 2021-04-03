import * as React from 'react';
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
  // const [ids, setIds] = React.useState([]);
  const [ids, setIds] = useRecoilState(idsState);
  const router = useRouter();
  const { type } = router.query;

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      // @ts-ignore
      fetchIdsByType(type).then((ids: number[]) => {
        setIds((prevState) => {
          return {
            ...prevState,
            // @ts-ignore
            [type]: ids,
          };
        });
      });
    }
  }, [router]);

  // @ts-ignore
  return ids[type];
};

export { useIds };
