import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { fetchIdsByType, fetchItems } from '@/repositories/';

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
  const [items, setItems] = useRecoilState(itemsState);
  const [ids, setIds] = useRecoilState(idsState);

  React.useEffect(() => {
    fetchIdsByType(type).then((newIds: number[]) => {
      setIds((prevState) => {
        fetchItems(newIds).then((newItems :number[]) => {
          setItems((prevState) => ([...prevState, ...newItems]));
        });
        return {
          ...prevState,
          newIds
        }
      });
    });
  }, []);
};
