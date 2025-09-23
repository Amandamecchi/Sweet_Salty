import styles from "./home.module.css";
import Link from 'next/link';
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Banner
                alt="Comida"
                className="large"
                priority={true}
            />
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
            <Footer />
        </>
    );
}