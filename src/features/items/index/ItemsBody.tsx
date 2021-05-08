import React from 'react';
import styled from 'styled-components';

import { Item } from '@/common/models/Item';
import { UnorderedList } from '@/common/components/List';
import { ItemsListItem } from '@/features/items/index/ItemsListItem';
import { Spinner } from '@/common/components/Spinner';

interface Props {
  activeItems: Item[] | any;
}

export function ItemsBody(props: Props): JSX.Element {
  const { activeItems } = props;

  if (!activeItems.length) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <UnorderedList>
        {activeItems.map((activeItem) => {
          return <ItemsListItem item={activeItem} key={activeItem.id} />;
        })}
      </UnorderedList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  margin-top: 100px;
`;
