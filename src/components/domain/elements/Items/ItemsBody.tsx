import * as React from 'react';
import styled from 'styled-components';
import { ListLayout } from '@/components/layouts';
import { ItemListItem } from '@/components/domain/elements/Items/index';
import * as Model from '@/models';
import Spinner from '@/components/gui/parts/Spinner';

interface Props {
  activeItems: Model.Item[] | any;
}

const ItemsBody: React.FC<Props> = (props) => {
  const { activeItems } = props;

  if (!activeItems.length) {
    return (
      <Spinner />
    )
  } else {
    return (
      <Wrapper>
        <ListLayout>
          { activeItems.map((activeItem) => {
            return <ItemListItem item={activeItem} key={activeItem.id} />;
          })}
        </ListLayout>
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
