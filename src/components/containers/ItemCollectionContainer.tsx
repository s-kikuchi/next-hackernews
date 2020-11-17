import * as React from 'react';

import { Item } from '@/components/domain/objects/Item';

interface Props {
}

const ItemCollectionContainer: React.FC<Props> = (props) => {
  const item = {
    by: "fforflo",
    descendants: 11,
    id: 25058045,
    score: 150,
    kids: [25059036, 25058897, 25058725, 25059001],
    time: 1605100371,
    title: "Test",
    url: "https://",
    __lastUpdated: 123232332,
    type: 'story',
    text: 'aaa',
  };
  return (
    <Item item={item} />
  )
};

export default ItemCollectionContainer;
