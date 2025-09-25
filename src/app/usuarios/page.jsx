"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function Usuarios() {
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [current, setCurrent] = useState(1);
  const pageSize = 5;


  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/usuarios`
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
    <>
    <main className={styles.main}>
      <h1 className={styles.title}>Usuários</h1>
      <div className={styles.cardsContainer}>
        {paginatedUsuarios().map((usuario) => (
          <div key={usuario.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatarContainer}>
                <div className={styles.avatar}>
                  {usuario.nome_usuario.charAt(0).toUpperCase()}
                </div>
                <div className={styles.userStatus}>
                  <span className={styles.statusBadge}>Ativo</span>
                </div>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <h3 className={styles.nome}>{usuario.nome_usuario}</h3>
              <p className={styles.email}>
                <span className={styles.emailIcon}>✉</span>
                {usuario.email}
              </p>
              
              <div className={styles.userInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ID:</span>
                  <span className={styles.infoValue}>#{usuario.id}</span>
                </div>
                
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Membro desde:</span>
                  <span className={styles.infoValue}>
                    {new Date(usuario.data_criacao).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tempo ativo:</span>
                  <span className={styles.infoValue}>
                    {Math.floor((new Date() - new Date(usuario.data_criacao)) / (1000 * 60 * 60 * 24))} dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from(
          { length: Math.ceil(usuarios.length / pageSize) },
          (_, i) => (
            <button
              key={i}
              className={`${styles.paginationButton} ${
                current === i + 1 ? styles.active : ""
              }`}
              onClick={() => setCurrent(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      
      <div className={styles.backButtonContainer}>
        <button 
          className={styles.backButton}
          onClick={() => window.location.href = '/receitas'}
        >
          Voltar para Receitas
        </button>
        {' '}
        <button 
          className={styles.backButton}
          onClick={() => window.location.href = '/home'}
        >
          Voltar para Home
        </button>
      </div>
    </main>
    <Footer />
    </>
  );
}