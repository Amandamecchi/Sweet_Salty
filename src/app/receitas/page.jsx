"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Receitas() {
  const [loading, setLoading] = useState(true);
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/receitas`
        );
        setReceitas(res.data);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReceitas();
  }, []);

  if (loading) return <p className={styles.loading}>Carregando receitas...</p>;

  const cardColors = [
    '#F5E1D3', 
    '#E8D5C4', 
    '#F0D4C7', 
    '#E5C3B3', 
    '#F2E8D5', 
    '#E9DDD4', 
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossas Receitas Especiais</h1>
        <div className={styles.grid}>
          {receitas.map((receita, index) => (
            <div 
              key={receita.id} 
              className={`${styles.card} ${styles[`card${(index % 6) + 1}`]}`}
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
            >
              <div className={styles.cardContent}>
                {receita.image_url && (
                  <div className={styles.imageContainer}>
                    <img
                      src={receita.image_url}
                      alt={receita.nome_receita}
                      className={styles.cardImage}
                    />
                  </div>
                )}
                <div className={styles.cardText}>
                  <h2 className={styles.cardTitle}>{receita.nome_receita}</h2>
                  <p className={styles.cardDescription}>
                    {receita.modo_preparo?.substring(0, 80)}...
                  </p>
                  {receita.ingredientes && (
                    <div className={styles.ingredients}>
                      <span className={styles.ingredientsLabel}>Ingredientes:</span>
                      <p className={styles.ingredientsList}>
                        {receita.ingredientes.substring(0, 60)}...
                      </p>
                    </div>
                  )}
                  <div className={styles.cardFooter}>
                    <span className={styles.date}>
                      {new Date(receita.data_criacao).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
