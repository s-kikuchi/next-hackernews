import * as React from 'react';

import { ListLayout } from '@/components/gui/parts/List';
import { ItemListItem } from '@/components/domain/elements/Items';
import * as Model from '@/models';

interface Props {
  items: []
}

/**
 * Items domain object.
 * @param props
 */
const Items: React.FC<Props> = (props): React.ReactElement => {
  const { items } = props;

  // TODO: Apply loading style
  if (!items) {
    return <div>Loading</div>
  }

  if (items) {
    return (
      <>
        <div>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '2px',
            padding: '15px 30px',
            position: 'fixed',
            textAlign: 'center',
            top: '55px',
            left: '0',
            right: '0',
            zIndex: 998,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}>
            &lt; prev / more &gt;
          </div>
        </div>
        <div style={{ width: '100%', display: 'block', position: 'relative', transition: 'all 0.5s cubic-bezier(0.55, 0, 0.1, 1)'}}>
          <ListLayout>
            {items.map((item: Model.Item) => {
              return (
                <ItemListItem item={item} key={item.title + item.id + item.by} />
              )
            })}
          </ListLayout>
        </div>
      </>
    )
  }
};

export default Items;
