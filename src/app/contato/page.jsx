import styles from '../page.module.css';
import Button from '../../components/Button';

export default function Contato() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Entre em Contato</h1>
        <p>Esta página está em desenvolvimento.</p>
        
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Button 
            icon="back"
            onClick={() => window.history.back()}
            className={styles.backBtn}
          >
            Voltar
          </Button>
        </div>
      </div>
    </main>
  );
}
