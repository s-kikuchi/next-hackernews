import React from 'react';
import styled from 'styled-components';
import { UnorderedList } from '@/common/components/List';
import { ItemListItem } from '@/common/components/domain/elements/Items/index';
import * as Model from '@/common/models';
import { Spinner } from '@/common/components/Spinner';

interface Props {
  activeItems: Model.Item[] | any;
}

const ItemsBody: React.FC<Props> = (props) => {
  const { activeItems } = props;

  if (!activeItems.length) {
    return <Spinner />;
  } else {
    return (
      <Wrapper>
        <UnorderedList>
          {activeItems.map((activeItem) => {
            return <ItemListItem item={activeItem} key={activeItem.id} />;
          })}
        </UnorderedList>
      </Wrapper>
    );
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
