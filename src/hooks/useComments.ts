import * as React from 'react';
import { useRecoilState } from 'recoil';

import { fetchItems, fetchItem } from '@/repositories';
import { itemsState } from '@/hooks/useItems';
import * as Model from '@/models';

const useComments = (item: Model.Item) => {
  const [items, setItems] = useRecoilState(itemsState);

  // TODO: Develop fetching comments
  React.useEffect(() => {
    if (!item) {
      return
    }

    fetchComments(item).then(res => {
      console.log(res, 'res');
    });

  }, [item]);
};

const fetchComments = (item) => {
  if (item.kids) {
    return fetchItems(item.kids).then((i) => {
      Promise.all(item.kids.map(id => {return fetchComments(i)}))
    })
  }
  return item;
};

export { useComments };
