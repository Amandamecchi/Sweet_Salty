'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.leftNav}>
          <Link href="/home" className={styles.navLink}>
            Home
          </Link>
          <Link href="/contato" className={styles.navLink}>
            Contato
          </Link>
        </nav>

        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/image/logotipo.png"
              alt="Sweet & Salty Logo"
              width={200}
              height={200}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <nav className={styles.rightNav}>
          <Link href="/receitas" className={styles.navLink}>
            Receitas
          </Link>
          <Link href="/usuarios" className={styles.navLink}>
            Usuários
          </Link>
        </nav>
      </div>
    </header>
  );
}
