import * as React from 'react';
import styled from 'styled-components';

import * as Model from '@/models';

interface Props {
  item: Model.Item;
}

/**
 * Item Domain object
 * @param props
 */
const Item: React.FC<Props> = (props): React.ReactElement => {
  const { item } = props;

  return (
    <div>Item domain object</div>
  );
};


export default Item;
