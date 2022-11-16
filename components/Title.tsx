import * as React from 'react';

export interface ITitleProps {
    title: string;
}

export default function Title(props: ITitleProps) {
    const { title } = props;
  return (
    <div>
          <h1>{title}</h1>
    </div>
  );
}
