import Head from 'next/head';
import React, { useState } from 'react';
import styles from './main.module.sass';
import Title from '../../components/Title';
import Products from '../../components/Products';

export interface IProductsProps {}

export default function ProductsPage(props: IProductsProps) {
  const [title, setTitle] = useState("Products");

  return (
    <div>
      <Head>
        <title>Products Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Title title={title} />
        <Products />
      </main>
      <footer className={styles.footer}>Tính năng đang phát triển</footer>
    </div>
  );
}

