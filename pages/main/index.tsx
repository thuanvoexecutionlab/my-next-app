import Head from 'next/head';
import React, { useState } from 'react';
import styles from './main.module.sass';
import Title from '../../components/Title';
import Products from '../../components/Products';

export interface IMainPageProps {
   
}

export default function MainPage(props: IMainPageProps) {

  const [title, setTitle] = useState('Products');

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title title={title} />
        <Products/>
      </main>
      <footer className={styles.footer}>
        Tính năng đang phát triển
      </footer>
    </div>
      
  );
}

