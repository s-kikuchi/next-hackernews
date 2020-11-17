import * as React from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { fetchIdsByType, fetchItems, fetchItem, fetchUser } from '@/repositories/';
import * as Model from '@/models';

const initialIds: {
  [type: string]: number[]
} = {};

export const idsState = atom({
  key: 'idsState',
  default: initialIds,
});

// const initialItems: Item[] = [];
const initialItems = [];

export const itemsState = atom({
  key: 'itemsState',
  default: initialItems
});

export const useItems = (type: string): void => {
  const setItems = useSetRecoilState(itemsState);
  const setIds = useSetRecoilState(idsState);

  React.useEffect(() => {
    fetchIdsByType(type).then((ids: number[]) => {
      setIds((prevState) => {
        fetchItems(ids).then((items :number[]) => {
          setItems(items);
          console.log(items, 'items');
        });
        return {
          ...prevState,
          ids
        }
      });
    });
  }, []);
};

export const useItem = (id: number) => {
  React.useEffect(() => {
    fetchItem(id).then(item => {
      console.log(item);
    })
  })
};

const initialUser: Model.User | any = { };

export const userState = atom({
  key: 'userState',
  default: initialUser
});

export const useUser = (): void => {
  // TODO: Separate fetching path parameter
  const router = useRouter();
  const id = router.query.id;
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      fetchUser(id).then(user => setUser(user));
    }
  }, [router]);
};
