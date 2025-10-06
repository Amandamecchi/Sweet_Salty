"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./home.module.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
    const [receitasPopulares, setReceitasPopulares] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReceitasPopulares = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/receitas`
                );
                

                const receitasOrdenadas = res.data
                    .sort((a, b) => {
                        
                        return new Date(b.data_criacao) - new Date(a.data_criacao);
                    })
                    .slice(0, 6); 
                
                setReceitasPopulares(receitasOrdenadas);
            } catch (error) {
                console.error("Erro ao buscar receitas populares:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReceitasPopulares();
    }, []);

    return (
        <>
            <Banner
                alt="Comida"
                className="large"
                priority={true}
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Receitas Mais Populares</h1>
                <p className={styles.subtitle}>Descubra as receitas que nossos usuários mais amam!</p>
                
                {loading ? (
                    <p className={styles.loading}>Carregando receitas populares...</p>
                ) : (
                    <div className={styles.receitasGrid}>
                        {receitasPopulares.map((receita, index) => {
                            const cardColors = ['#F5E1D3', '#E8F4F8', '#F0E8F4', '#E8F8E8', '#F8F0E8', '#F4E8E8'];
                            return (
                                <Link key={receita.id} href={`/receitas/${receita.id}`}>
                                    <div 
                                        className={styles.receitaCard}
                                        style={{ backgroundColor: cardColors[index % cardColors.length] }}
                                    >
                                        <h3 className={styles.receitaTitulo}>{receita.nome_receita}</h3>
                                        <p className={styles.receitaDescricao}>
                                            {receita.descricao ? receita.descricao.substring(0, 100) + "..." : "Receita deliciosa para você experimentar!"}
                                        </p>
                                        <div className={styles.receitaInfo}>
                                            <span className={styles.receitaTempo}>
                                                ⏱ {receita.tempo_preparo || "30"} min
                                            </span>
                                            <span className={styles.receitaDificuldade}>
                                                👨‍🍳 {receita.dificuldade || "Médio"}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
                
                <div className={styles.buttonContainer}>
                    <Link href="/receitas">
                        <button className={styles.button}>Ver Todas as Receitas</button>
                    </Link>
                    <Link href="/usuarios">
                        <button className={styles.button}>Ver Usuários</button>
                    </Link>
                </div>
                
                <div className={styles.developerSection}>
                    <h2 className={styles.developerTitle}>
                        <Image 
                            src="/icons/computer.png" 
                            alt="Computer" 
                            width={32} 
                            height={32} 
                            className={styles.developerIcon}
                        />
                        Conheça a Desenvolvedora
                    </h2>
                    <p className={styles.developerText}>
                        Descubra a história por trás do Sweet & Salty e as tecnologias utilizadas neste projeto!
                    </p>
                    <Link href="/desenvolvedora">
                        <button className={styles.developerButton}>Sobre a Desenvolvedora</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}