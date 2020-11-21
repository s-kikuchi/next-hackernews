import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { fetchIdsByType, fetchItems, fetchItem, fetchUser } from '@/repositories/';
import * as Model from '@/models';

const initialState: {
  activeType: any;
  itemsPerPage: number;
  items: {
    [id: number]: Model.Item;
  };
  users: {
    [id: string]: Model.User;
  };
  lists: {
    [type: string]: number[];
  };
} = {
  activeType: null,
  itemsPerPage: 20,
  items: [],
  users: {},
  lists: {},
};

export const allState = atom({
  key: 'allState',
  default: initialState,
});

export const useList = (): void => {
  const router = useRouter();
  const { type } = router.query;
  const [state, setState] = useRecoilState(allState);

  React.useEffect(() => {
    fetchIdsByType(type).then((ids: number[]) => {
      setState((prevState) => {
        return {
          ...prevState,
          activeType: type,
          lists: {
            ...prevState.lists,
            // @ts-ignore
            [type]: ids,
          },
        };
      });
    });
  }, [type]);
};

export const useItems = (ids: number[]) => {
  const [state, setState] = useRecoilState(allState);
  const router = useRouter();
  const now = new Date();

  React.useEffect(() => {
    ids = ids.filter((id) => {
      const item = state.items[id];
      if (!item) {
        return true;
      }
      // @ts-ignore
      return now - item.__lastUpdated > 1000 * 60 * 3;
    });
    if (ids.length) {
      // return fetchItems(ids).then(item => {
      fetchItems(ids).then((item) => {
        const newItems = {};
        item.forEach((item) => {
          newItems[item['id']] = item;
        });
        setState((prevState) => {
          return {
            ...prevState,
            items: {
              ...newItems,
            },
          };
        });
      });
    } else {
      // return Promise.resolve();
    }
  }, [router, ids]);
};

export const useActiveIds = () => {
  const [state, setState] = useRecoilState(allState);
  const { activeType, itemsPerPage } = state;
  const router = useRouter();

  if (!activeType) {
    return [];
  }
  let page;

  try {
    page = Number(router.query.page || 1);
  } catch (e) {
    // redirect to 404 page
    console.log(e);
  }
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;

  return state.lists[activeType].slice(start, end);
};

export const useActiveItems = () => {
  const [state, setState] = useRecoilState(allState);
  const activeIds = useActiveIds();

  return activeIds.map((id) => state.items[id]).filter((_) => _);
};

export const useUser = (): Model.User => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useRecoilState(allState);
  let user = {};

  React.useEffect(() => {
    if (router.asPath !== router.route) {
      if (state.users[id]) {
        user = state.users[id];
      } else {
        fetchUser(id).then((u: Model.User) => {
          user = u;
          setState((prevState) => {
            return {
              ...prevState,
              users: {
                [user.id]: user,
              },
            };
          });
        });
      }
    }
  }, [router]);

  return user;
};
