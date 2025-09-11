import styles from "./home.module.css";
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>Oi</h1>
            <p>sei lá</p>
            <div className={styles.buttonContainer}>
                <Link href="/receitas">
                    <button className={styles.button}>Receitas</button>
                </Link>
                <Link href="/usuarios">
                    <button className={styles.button}>Usuários</button>
                </Link>
            </div>
        </div>
    );
}