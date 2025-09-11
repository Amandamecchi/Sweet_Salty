"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Receitas() {
  const [loading, setLoading] = useState(true);
  const [receitas, setReceitas] = useState([]);

  // Busca as receitas da API
  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/receitas`
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

  if (loading) return <p>Carregando receitas...</p>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Receitas</h1>
      <div className={styles.cardsContainer}>
        {receitas.map((receita) => (
          <div key={receita.id} className={styles.card}>
            <h2>{receita.nome_receita}</h2>
            <p>
              <strong>Ingredientes:</strong> {receita.ingredientes}
            </p>
            <p>
              <strong>Modo de preparo:</strong> {receita.modo_preparo}
            </p>
            {receita.image_url && (
              <img
                src={receita.image_url}
                alt={receita.nome_receita}
                className={styles.imagem}
              />
            )}
            <p>
              Criada em:{" "}
              {new Date(receita.data_criacao).toLocaleDateString("pt-BR")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
