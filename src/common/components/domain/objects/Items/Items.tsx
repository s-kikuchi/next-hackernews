import * as React from 'react';
import Header from 'next/head';

import { ItemsHeader, ItemsBody } from '@/common/components/domain/elements/Items';
import * as Model from '@/common/models';

interface Props {
  ids: number[];
  itemsPerPage: number;
  activeItemType: string;
  activeItems: Model.Item[];
}

/**
 * Items domain object.
 * @param props
 */
const Items: React.FC<Props> = (props): React.ReactElement => {
  const { ids, itemsPerPage, activeItemType, activeItems } = props;

  return (
    <>
      <Header>
        <title>Next HN | Item</title>
      </Header>

      <ItemsHeader ids={ids} itemsPerPage={itemsPerPage} type={activeItemType} />
      <ItemsBody activeItems={activeItems} />
    </>
  );
};

export default Items;
