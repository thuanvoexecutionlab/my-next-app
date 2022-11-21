import Head from 'next/head';
import React, { useState } from 'react';
import styles from './main.module.sass';
import Title from '../../components/Title';
import Products from '../../components/Products';
import AddProduct from '../../components/AddProduct';

export interface IMainPageProps {
   
}

export default function MainPage(props: IMainPageProps) {

  const [ mode, setMode ] = useState('list');
  const [title, setTitle] = useState('Products');
  
  const goToList = () => {
    setMode('list');
    setTitle('Products');
  }

  const goToCreate = () => {
    setMode('create');
    setTitle('Add Product');
  }

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title title={title} />
        { mode === 'list' ? <Products/> :
          <AddProduct goToList={() => setMode('list')} />}
      </main>
      <footer className={styles.footer}>
        Tính năng đang phát triển
      </footer>
    </div>
      
  );
}

