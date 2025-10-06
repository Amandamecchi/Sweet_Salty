import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function Desenvolvedora() {
    return (
        <>
            <Banner alt="Sweet & Salty" className="medium" />
            <main className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <h1 className={styles.heroTitle}>
                                    Oi, eu sou a <span className={styles.highlight}>Amanda</span>
                                </h1>
                                <h2 className={styles.heroSubtitle}>Desenvolvedora de Software</h2>
                                <p className={styles.heroDescription}>
                                    Ultimamente, tenho descoberto um novo hobbie: a culinária, principalmente o mundo das sobremesas. Esse projeto surgiu como uma forma de unir o que aprendo em sala de aula com algo que realmente me encanta: preparar e compartilhar receitas simples e saborosas.
                                </p>
                                <div className={styles.heroButtons}>
                                    <a href="/contato" className={styles.btnPrimary}>
                                        Entre em Contato
                                    </a>
                                    <a href="/" className={styles.btnSecondary}>
                                        Ver Receitas
                                    </a>
                                </div>
                            </div>
                            <div className={styles.heroImage}>
                                <img
                                    src="/image/Amandaa.jpg"
                                    alt="Amanda - Desenvolvedora"
                                    className={styles.profileImg}
                                />
                            </div>
                        </div>
                    </section>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}> Sobre o Projeto</h3>
                            <p className={styles.texto}>
                                O Sweet Salty surgiu com o intuito de tornar mais fácil o acesso a receitas práticas e saborosas, perfeitas para quem quer se aventurar na cozinha sem complicação. A ideia nasceu a partir de um novo hobbie que passei a explorar: a culinária, especialmente o preparo de sobremesas! 💕
                                Este projeto é o resultado final da disciplina de Projetos, e foi desenvolvido com muito carinho para compartilhar o prazer de cozinhar e descobrir novos sabores
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>
                                <Image 
                                    src="/icons/computer.png" 
                                    alt="Computer" 
                                    width={24} 
                                    height={24} 
                                    className={styles.sectionIcon}
                                />
                                Tecnologias Utilizadas
                            </h3>
                            <div className={styles.techGrid}>
                                <div className={styles.techCard}>
                                    <Image 
                                        src="/icons/React.png" 
                                        alt="React" 
                                        width={32} 
                                        height={32} 
                                        className={styles.techIcon}
                                    />
                                    <span className={styles.techName}>React</span>
                                </div>
                                <div className={styles.techCard}>
                                    <Image 
                                        src="/icons/next.png" 
                                        alt="Next.js" 
                                        width={32} 
                                        height={32} 
                                        className={styles.techIcon}
                                    />
                                    <span className={styles.techName}>Next.js</span>
                                </div>
                                <div className={styles.techCard}>
                                    <Image 
                                        src="/icons/csss.webp" 
                                        alt="CSS" 
                                        width={32} 
                                        height={32} 
                                        className={styles.techIcon}
                                    />
                                    <span className={styles.techName}>CSS Modules</span>
                                </div>
                                <div className={styles.techCard}>
                                    <Image 
                                        src="/icons/smartphone.png" 
                                        alt="Responsivo" 
                                        width={32} 
                                        height={32} 
                                        className={styles.techIcon}
                                    />
                                    <span className={styles.techName}>Design Responsivo</span>
                                </div>
                                <div className={styles.techCard}>
                                    <Image 
                                        src="/icons/clock.png" 
                                        alt="Clock" 
                                        width={32} 
                                        height={32} 
                                        className={styles.techIcon}
                                    />
                                    <span className={styles.techName}>React Toastify</span>
                                </div>

                            </div>
                        </section>

                        <section className={styles.section}>
                            <h3 className={styles.sectionTitle}>🎯 Minha Jornada</h3>
                            <div className={styles.timeline}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineIcon}>
                                        <Image 
                                            src="/icons/books.png" 
                                            alt="Books" 
                                            width={24} 
                                            height={24} 
                                        />
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <h4>Início dos Estudos</h4>
                                        <p>Comecei minha jornada no desenvolvimento web, aprendendo HTML, CSS e JavaScript no SENAI.</p>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineIcon}>
                                        <Image 
                                            src="/icons/next.png" 
                                            alt="Next.js" 
                                            width={24} 
                                            height={24} 
                                        />
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <h4>React & Next.js</h4>
                                        <p>Mergulhei no mundo dos frameworks modernos e descobri que o desenvolvimento frontend é o meu ponto forte na programação.</p>
                                    </div>
                                </div>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineIcon}>
                                        <Image 
                                            src="/icons/salad.png" 
                                            alt="Salad" 
                                            width={24} 
                                            height={24} 
                                        />
                                    </div>
                                    <div className={styles.timelineContent}>
                                        <h4>Sweet & Salty</h4>
                                        <p>Decidi combinar programação com culinária, criando este projeto que representa minha evolução técnica.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
