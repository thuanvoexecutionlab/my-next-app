import Image from 'next/image';
import * as React from 'react';

export interface IImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function ImageApp(props: IImageProps) {
  return (
    <div>
          <Image src={props.src} alt={props.alt} width={props.width} height={props.height} />
    </div>
  );
}
