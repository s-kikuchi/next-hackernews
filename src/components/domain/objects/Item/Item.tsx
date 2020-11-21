import * as React from 'react';
import Link from 'next/link';

import { MainLayout } from '@/components/layouts';
import { ItemHeader } from '@/components/domain/elements/Item';
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
    <MainLayout paddingTop={'65px'}>
      <ItemHeader by={item.by} title={item.title} score={item.score} />
      <div style={{ backgroundColor: '#fff', marginTop: '30px', padding: '0 .5em' }}>comment</div>
    </MainLayout>
  );
};

interface CommentProps {
  item: Model.Item | any;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { item } = props;
  return (
    <li style={{ borderTop: '1px solid #eee', position: 'relative' }}>
      <div>
        <Link href={'/user/123'}>{item.by}</Link>
      </div>
      <div>{item.text}</div>
      <div>
        <a>open</a>
      </div>
    </li>
  );
};

export default Item;
