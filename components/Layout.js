import Head from 'next/head';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return(
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Rubik+Beastly&family=Rubik:wght@300&family=Sacramento&family=Satisfy&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  )
}