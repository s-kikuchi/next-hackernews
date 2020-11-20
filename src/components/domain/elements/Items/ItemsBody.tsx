import * as React from 'react';
import styled from 'styled-components';
import { ListLayout } from "@/components/layouts";
import { ItemListItem } from "@/components/domain/elements/Items/index";

import * as Model from '@/models';

interface Props {
  items: Model.Item | any;
}

const ItemsBody: React.FC<Props> = (props) => {
  const { items } = props;

  // This loading shoud be customize
  if (!items) {
    return <div>Loading</div>
  } else {
    return (
      <Wrapper>
        <ListLayout>
          {Object.keys(items).map((key) => {
            return (
              <ItemListItem item={items[key]} key={key} />
            )
          })}
        </ListLayout>
      </Wrapper>
    )
  }
};

const Wrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  margin-top: 100px;
`;

export default ItemsBody;
