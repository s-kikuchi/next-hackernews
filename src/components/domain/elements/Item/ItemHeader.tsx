import * as React from 'react';

interface Props {
  title: string;
  by: string;
  score: number;
}

const ItemHeader: React.FC<Props> = (props): React.ReactElement => {
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

export default ItemHeader;
