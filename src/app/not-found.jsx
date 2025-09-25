import Image from 'next/image';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/image/chapeu.png" alt="Not Found" width={300} height={300} />
            </div>

            <p className={styles.errorNumber}>404</p>
            <p className={styles.errorMessage}>
                Desculpe, a página que você está procurando não existe.
            </p>
            
            <a href="/" className={styles.backButton}>
                Voltar para a HomePage
            </a>
        </div>
    );
}
