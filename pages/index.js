import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a Fincas y Vacaciones</h1>
        <nav>
          <Link href="/reservation">
            <a>Go to Reservation</a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
