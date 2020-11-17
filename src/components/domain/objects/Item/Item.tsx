import * as React from 'react';
import Link from 'next/link';

import * as Model from '@/models';
import { ListLayout } from '@/components/gui/parts/List';
import { fetchItem } from '@/repositories';

interface Props {
  item: Model.Item
}

/**
 * Item Domain object
 * @param props
 */
const Item: React.FC<Props> = (props): React.ReactElement => {

  const { item } = props;

  // main is used in other page components.
  return (
    <main style={ { width: '800px', margin: '0 auto', position: 'relative', paddingTop: '70px' } }>
      <ItemDetail by={ item.by } title={ item.title } score={ item.score }/>
      <div style={ { backgroundColor: '#fff', marginTop: '30px', padding: '0 .5em' } }>
      </div>
    </main>
  );
};

interface ItemDetailProps {
  title: string,
  score: number,
  by: string,
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  const { title, score, by } = props;
  return (
    <div>
      {/* <div style={{ backgroundColor: '#fff', padding: '1.8em 2em 1em', boxShadow: '0 1px 2px rgba(0, 0, 0, .1)'}}> */ }
      <div style={{ backgroundColor: '#fff' }}>
        <a>
          <h1>{ title }</h1>
        </a>
      </div>
      <p>
        { score } points | by { by }
      </p>
    </div>
  )
};

interface CommentProps {
  item: Model.Item | any
}

const Comment: React.FC<CommentProps> = (props) => {

  const { item } = props;
  return (
    <li style={{ borderTop: '1px solid #eee', position: 'relative' }}>
      <div>
        <Link href={ '/user/123' }>
          { item.by }
        </Link>
      </div>
      <div>
        { item.text }
      </div>
      <div>
        <a>open</a>
      </div>
    </li>
  )
};

export default Item;
