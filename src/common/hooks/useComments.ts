import * as React from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';

import { fetchItems } from '@/common/api';
import { itemsState } from '@/common/hooks/useItems';
import * as Model from '@/common/models';

export const commentIsLoadingState = atom({
  key: 'commentIsLoadingState',
  default: true as boolean,
});

const useComments = (item: Model.Item) => {
  const setItems = useSetRecoilState(itemsState);
  const [commentIsLoading, setCommentIsLoading] = useRecoilState(commentIsLoadingState);

  React.useEffect(() => {
    if (!item) {
      return;
    }
    setCommentIsLoading(true);
    fetchComments(item).then(() => {
      setCommentIsLoading(false);
    });
  }, [item]);

  // TODO: It must be refactored!!!
  const fetchComments = (item) => {
    if (item.kids) {
      return fetchItems(item.kids).then((i) => {
        i.map((x) => {
          const obj = {};
          obj[x['id']] = x;
          setItems((prevState) => ({ ...prevState, ...obj }));
          return fetchComments(x);
        });
      });
    }
  };

  return commentIsLoading;
};

export { useComments };