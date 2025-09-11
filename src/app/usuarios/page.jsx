"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Usuarios() {
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [current, setCurrent] = useState(1);
  const pageSize = 5;


  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/usuarios`
        );
        setUsuarios(res.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  const paginatedUsuarios = () => {
    const start = (current - 1) * pageSize;
    return usuarios.slice(start, start + pageSize);
  };

  if (loading) return <p>Carregando usuários...</p>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Usuários</h1>
      <div className={styles.cardsContainer}>
        {paginatedUsuarios().map((usuario) => (
          <div key={usuario.id} className={styles.card}>
            <p className={styles.nome}>{usuario.nome_usuario}</p>
            <p className={styles.email}>{usuario.email}</p>
            <p className={styles.data}>
              Criado em:{" "}
              {new Date(usuario.data_criacao).toLocaleDateString("pt-BR")}
            </p>
          </div>
        ))}
      </div>

      {/* Paginação manual */}
      <div className={styles.pagination}>
        {Array.from(
          { length: Math.ceil(usuarios.length / pageSize) },
          (_, i) => (
            <button
              key={i}
              className={`${styles.pageButton} ${
                current === i + 1 ? styles.active : ""
              }`}
              onClick={() => setCurrent(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </main>
  );
}
