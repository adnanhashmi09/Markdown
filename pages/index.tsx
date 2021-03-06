import type { NextPage } from 'next';
import Head from 'next/head';
import TextEditor from '../components/TextEditor';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TextEditor />
      </main>
    </div>
  );
};

export default Home;
