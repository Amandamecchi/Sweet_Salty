"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import styles from "./page.module.css";

export default function ReceitaDetalhes() {
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    const fetchReceita = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/receitas/${id}`
        );
        setReceita(res.data);
      } catch (error) {
        console.error("Erro ao buscar receita:", error);
        setError("Receita não encontrada");
      } finally {
        setLoading(false);
      }
    };

    fetchReceita();
  }, [id]);

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loading}>
          <p>Carregando receita...</p>
        </div>
      </main>
    );
  }

  if (error || !receita) {
    return (
      <main className={styles.main}>
        <div className={styles.error}>
          <h1>Receita não encontrada</h1>
          <p>{error}</p>
          <button 
            className={styles.backButton}
            onClick={() => router.push('/receitas')}
          >
            ← Voltar para Receitas
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button 
            className={styles.backButton}
            onClick={() => router.push('/receitas')}
          >
            ← Voltar para Receitas
          </button>
          <h1 className={styles.title}>{receita.nome_receita}</h1>
        </div>

        <div className={styles.content}>
          {receita.image_url && (
            <div className={styles.imageContainer}>
              <img
                src={receita.image_url}
                alt={receita.nome_receita}
                className={styles.recipeImage}
              />
            </div>
          )}

          <div className={styles.details}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Ingredientes</h2>
              <div className={styles.ingredientsList}>
                {receita.ingredientes ? (
                  receita.ingredientes.split('\n').map((ingrediente, index) => (
                    <div key={index} className={styles.ingredient}>
                      <span className={styles.ingredientBullet}>•</span>
                      {ingrediente.trim()}
                    </div>
                  ))
                ) : (
                  <p>Ingredientes não disponíveis</p>
                )}
              </div>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Modo de Preparo</h2>
              <div className={styles.preparationSteps}>
                {receita.modo_preparo ? (
                  receita.modo_preparo.split('\n').map((step, index) => (
                    step.trim() && (
                      <div key={index} className={styles.step}>
                        <span className={styles.stepNumber}>{index + 1}</span>
                        <p className={styles.stepText}>{step.trim()}</p>
                      </div>
                    )
                  ))
                ) : (
                  <p>Modo de preparo não disponível</p>
                )}
              </div>
            </div>

            <div className={styles.footer}>
              <div className={styles.recipeInfo}>
                <p className={styles.createdDate}>
                  <strong>Criada em:</strong> {' '}
                  {new Date(receita.data_criacao).toLocaleDateString("pt-BR", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
