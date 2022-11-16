import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import Title from '../../components/Title';
import ImageApp from '../../components/Image';

export interface IAboutPageProps {
   
}

export default function AboutPage(props: IAboutPageProps) {
  const [num, setNum] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => prev - 1);
    }, 30);
    if (num === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [num]);

  
  return (

    <div>
      <Head>
        <title>Subscribe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {num > 0 && <Title title={""+num} />
          || <ImageApp
                src="/heart.png"
                alt="Picture of the author"
              />
        }
      </main>
    </div>
      
  );
}
