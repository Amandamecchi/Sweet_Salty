"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './contato.module.css';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export default function Contato() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    tipoContato: 'duvida'
  });
  const [loading, setLoading] = useState(false);
  const [sucessoEnvio, setSucessoEnvio] = useState(false);
  const [erro, setErro] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErro('');

    // Validações
    if (!formData.nomeCompleto.trim()) {
      setErro('Nome completo é obrigatório');
      setLoading(false);
      return;
    }

    if (!formData.email.trim() || !validarEmail(formData.email)) {
      setErro('Por favor, insira um email válido');
      setLoading(false);
      return;
    }

    if (!formData.assunto.trim()) {
      setErro('Assunto é obrigatório');
      setLoading(false);
      return;
    }

    if (!formData.mensagem.trim() || formData.mensagem.length < 10) {
      setErro('Mensagem deve ter pelo menos 10 caracteres');
      setLoading(false);
      return;
    }

    // Simular envio do formulário
    try {
      // Aqui você pode implementar a lógica de envio para uma API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Dados do formulário:', formData);
      setSucessoEnvio(true);
      
      // Reset form
      setFormData({
        nomeCompleto: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        tipoContato: 'duvida'
      });
    } catch (error) {
      setErro('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  if (sucessoEnvio) {
    return (
      <>
        <Banner alt="Sweet & Salty" className="medium" />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.sucessoContainer}>
              <div className={styles.sucessoIcon}>✓</div>
              <h1 className={styles.sucessoTitulo}>Mensagem Enviada com Sucesso!</h1>
              <p className={styles.sucessoTexto}>
                Obrigado por entrar em contato conosco! Recebemos sua mensagem e nossa equipe 
                retornará o contato em até 24 horas úteis.
              </p>
              <div className={styles.botoesContainer}>
                <button onClick={handleGoBack} className={styles.botaoSecundario}>
                  Voltar
                </button>
                <button 
                  onClick={() => setSucessoEnvio(false)} 
                  className={styles.botaoPrimario}
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Banner alt="Sweet & Salty" className="medium" />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.titulo}>Entre em Contato</h1>
            <p className={styles.subtitulo}>
              Adoraríamos ouvir você! Envie suas dúvidas, sugestões ou feedback sobre nossas receitas.
            </p>
          </div>

          <div className={styles.conteudo}>
            <form className={styles.formulario} onSubmit={handleSubmit}>
              <h2 className={styles.formTitulo}>Envie sua Mensagem</h2>
              
              {erro && (
                <div className={styles.erro}>
                  {erro}
                </div>
              )}

              <div className={styles.campo}>
                <label htmlFor="nomeCompleto" className={styles.label}>
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className={styles.camposDuplos}>
                <div className={styles.campo}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="telefone" className={styles.label}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div className={styles.camposDuplos}>
                <div className={styles.campo}>
                  <label htmlFor="tipoContato" className={styles.label}>
                    Tipo de Contato
                  </label>
                  <select
                    id="tipoContato"
                    name="tipoContato"
                    value={formData.tipoContato}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="receita">Nova Receita</option>
                    <option value="problema">Problema Técnico</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className={styles.campo}>
                  <label htmlFor="assunto" className={styles.label}>
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Resumo do que deseja falar"
                    required
                  />
                </div>
              </div>

              <div className={styles.campo}>
                <label htmlFor="mensagem" className={styles.label}>
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  placeholder="Escreva sua mensagem detalhada aqui..."
                  rows="6"
                  required
                />
                <span className={styles.contador}>
                  {formData.mensagem.length}/500 caracteres
                </span>
              </div>

              <div className={styles.botoesContainer}>
                <button 
                  type="button" 
                  onClick={handleGoBack} 
                  className={styles.botaoSecundario}
                >
                  Voltar
                </button>
                <button 
                  type="submit" 
                  className={styles.botaoPrimario}
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
