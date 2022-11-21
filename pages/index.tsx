import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Ryan App"
        description="Product Management"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://my-next-app-six-psi.vercel.app/",
          title: "Ryan App",
          description: "Product Management",
          images: [
            {
              url: "/avatar.png",
              width: 800,
              height: 600,
              alt: "Image Alt",
            },
            {
              url: "/avatar.png",
              width: 900,
              height: 800,
              alt: "Image Alt",
            },
          ],
          site_name: "Ryan App",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Ryan App!</a>
        </h1>

        <p className={styles.description}>
          Try clicking the button below to see the magic happen!
        </p>

        <div className={styles.grid}>
          <Link
            href={{
              pathname: "/about",
            }}
            className={styles.card}
          >
            <h2>Click Here</h2>
          </Link>
          <Link
            href={{
              pathname: "/main",
            }}
            className={styles.card}
          >
            <h2>Product Management</h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
