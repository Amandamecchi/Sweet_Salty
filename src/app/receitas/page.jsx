"use client";


export default function Receitas() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>🚧</div>
                </div>
                <h1 className={styles.title}>sei oq sei oq lá</h1>
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
                <div className={styles.additionalInfo}>
                    <p>receitaaaaaa</p>
                </div>
            <div className={styles.buttonContainer}>
                <a 
                    className={styles.button}
                    href="/home"
                >
                    Voltar para Home
                </a>
                <a 
                    className={styles.button}
                    href="/usuarios"
                >
                    Ver Usuários
                </a>
            </div>
            </div>
        </div>
    );
}