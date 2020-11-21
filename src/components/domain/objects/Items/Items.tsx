import * as React from 'react';

import { ItemsHeader, ItemsBody } from '@/components/domain/elements/Items';
import * as Model from '@/models';

interface Props {
  items: Model.Item | any;
  lists: Object;
  itemsPerPage: number;
  type: string;
}

/**
 * Items domain object.
 * @param props
 */
const Items: React.FC<Props> = (props): React.ReactElement => {
  const { items, lists, itemsPerPage, type } = props;

  // TODO: Apply loading style
  if (!lists[type]) {
    return <div>Loading</div>;
  }

  if (items) {
    return (
      <>
        <ItemsHeader itemsPerPage={itemsPerPage} lists={lists} type={type} />
        <ItemsBody items={items} />
      </>
    );
  }
};

export default Items;
