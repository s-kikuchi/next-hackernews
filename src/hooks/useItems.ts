import * as React from 'react';
import { useRouter } from 'next/router';
import { atom, useRecoilState } from 'recoil';

import { fetchItems } from '@/repositories';
import * as Model from '@/models';

export const itemsState = atom({
  key: 'itemsState',
  default: [] as Model.Item[]
});

const useItems = (ids: number[]) => {
  const [items, setItems] = useRecoilState(itemsState);
  const now = new Date();

  React.useEffect(() => {
    if (!ids || !ids.length) {
      return
    }

    ids = ids.filter((id) => {
      const item = items[id];
      if (!item) return true;
      // @ts-ignore
      return now - item.__lastUpdated > 1000 * 60 * 3;
    });
    if (ids.length) {
      fetchItems(ids).then((item) => {
        const obj = {};
        item.forEach((item) => {
          obj[item['id']]  = item;
        });
        setItems((prevState) => ({ ...prevState, ...obj}))
      })
    }
  }, [ids]);

  return { items }
};

export const activeItemsState = atom({
  key: 'activeItemsState',
  default: {
    activeItems: [] as Model.Item[],
    itemsPerPage: 20 as number,
    activeItemType: null as null | string
  }
});

const useActiveItems = (ids: number[], items: {}) => {
  const router = useRouter();
  const { type } = router.query;

  const [{ activeItems, itemsPerPage, activeItemType }, setActiveItemsState]
    = useRecoilState(activeItemsState);

  React.useEffect(() => {
    if (!ids || !ids.length || !items) {
      return;
    }

    if (router.asPath !== router.route) {
      let page;
      try {
        page = router.query.page || 1;
      } catch (e) {
        console.log(e);
      }
      const start = (page - 1) * itemsPerPage;
      const end = page * itemsPerPage;

      const activeIds = ids.slice(start, end);
      const newActiveItems = activeIds.map(id => items[id]).filter(_ => _);
      // @ts-ignore
      setActiveItemsState((prevState) => ({
        ...prevState,
        activeItems: [...newActiveItems],
        activeItemType: type
      }));
    }
  }, [router, ids, items]);
  return { activeItems, itemsPerPage, activeItemType }
};
export { useItems, useActiveItems }
