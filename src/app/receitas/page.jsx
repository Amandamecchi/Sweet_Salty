"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default function Receitas() {
  const [loading, setLoading] = useState(true);
  const [receitas, setReceitas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredReceitas, setFilteredReceitas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/receitas`
        );
        setReceitas(res.data);
        setFilteredReceitas(res.data);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReceitas();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredReceitas(receitas);
    } else {
      const filtered = receitas.filter(receita =>
        receita.nome_receita.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredReceitas(filtered);
    }
  }, [searchTerm, receitas]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <p className={styles.loading}>Carregando receitas...</p>;

  const cardColors = [
    '#F5E1D3', 
    '#E8D5C4', 
    '#F0D4C7', 
    '#E5C3B3', 
    '#F2E8D5', 
    '#E9DDD4', 
  ];

  const handleReceitaClick = (receitaId) => {
    router.push(`/receitas/${receitaId}`);
  };

  return (
    <>
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Nossas Receitas Especiais</h1>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Pesquisar receitas por nome..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
              />
              <div className={styles.searchIcon}>
                <img 
                  src="/icons/search.png" 
                  alt="Pesquisar" 
                  className={styles.searchIconImage}
                />
              </div>
            </div>
            {searchTerm && (
              <p className={styles.searchResults}>
                {filteredReceitas.length} receita(s) encontrada(s) para "{searchTerm}"
              </p>
            )}
          </div>
        </div>
        
        {filteredReceitas.length === 0 && !loading ? (
          <div className={styles.noResults}>
            <h2>Nenhuma receita encontrada</h2>
            <p>Tente pesquisar com outros termos</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredReceitas.map((receita, index) => (
            <div 
              key={receita.id} 
              className={`${styles.card} ${styles[`card${(index % 6) + 1}`]}`}
              style={{ backgroundColor: cardColors[index % cardColors.length] }}
              onClick={() => handleReceitaClick(receita.id)}
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
                    <div className={styles.clickHint}>
                      <span className={styles.clickText}>Clique para ver detalhes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
        
        <button 
          className={styles.backButton}
          onClick={() => window.location.href = '/'}
        >
          Voltar para Home
        </button>
      </div>
    </main>

    <Footer />
    </>
  );
}
