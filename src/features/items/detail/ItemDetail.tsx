import React from 'react';

interface Props {
  title: string;
  by: string;
  score: number;
}

export function ItemDetail(props: Props): JSX.Element {
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
}
