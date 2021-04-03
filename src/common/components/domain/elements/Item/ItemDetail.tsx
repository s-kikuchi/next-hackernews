import * as React from 'react';

interface Props {
  title: string;
  by: string;
  score: number;
}

/**
 * ItemHeader component for Item domain.
 * @param props
 * @constructor
 */
const ItemDetail: React.FC<Props> = (props): React.ReactElement => {
  const { title, by, score } = props;
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <p>
        {score} points | by {by}
      </p>
    </div>
  );
};

export default ItemDetail;
