# 🍯 Sweet & Salty

<div align="center">
  <img src="public/image/logotipo.png" alt="Sweet & Salty Logo" width="200"/>
  
  **Projeto de receitas culinárias desenvolvido com Next.js**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![CSS Modules](https://img.shields.io/badge/CSS-Modules-pink?style=for-the-badge&logo=css3)](https://github.com/css-modules/css-modules)
</div>

## 📖 Sobre o Projeto

O **Sweet & Salty** é uma plataforma web dedicada ao compartilhamento de receitas culinárias, especialmente sobremesas. A ideia nasceu a partir de um novo hobbie que passei a explorar: a culinária, especialmente o preparo de sobremesas! 💕

### ✨ Características Principais

- 🍰 **Receitas organizadas** - Doces e salgadas em categorias
- 📱 **Design responsivo** - Funciona  em diversos dispositivos
- 🔔 **Notificações toast** - Feedback instantâneo para o usuário
- 🎨 **Interface moderna** - Design limpo e intuitivo

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.2** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **CSS Modules** - Estilização com escopo local
- **React Toastify** - Sistema de notificações
- **Next/Image** - Otimização automática de imagens

### Backend
- **API REST** - Integração com backend separado
- **Axios** - Cliente HTTP para requisições

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com Node.js)
- [Git](https://git-scm.com/)

## 🛠️ Instalação e Configuração

### 1. Clone o Repositório Frontend

```bash
git clone https://github.com/Amandamecchi/Sweet_Salty.git
cd Sweet_Salty
```

### 2. Clone o Repositório Backend

Em um terminal separado:

```bash
git clone https://github.com/Amandamecchi/BackEnd-SweetSalty.git
cd BackEnd-SweetSalty
```

### 3. Instale as Dependências do Frontend

```bash
npm install
```

### 4. Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 5. Execute o Backend

Siga as instruções no repositório do backend para configurar e executar a API.

### 6. Execute o Frontend

```bash
npm run dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

## 📱 Como Acessar o Site

### Desenvolvimento Local

1. **Certifique-se de que o backend está rodando** (geralmente na porta 5000)
2. **Execute o frontend** com `npm run dev`
3. **Abra seu navegador** e acesse: `http://localhost:3000`

### Navegação

- **Home** (`/home`) - Página inicial com receitas populares
- **Receitas** (`/receitas`) - Lista completa de receitas
- **Receita Individual** (`/receitas/[id]`) - Detalhes de uma receita específica
- **Usuários** (`/usuarios`) - Gestão de usuários
- **Contato** (`/contato`) - Formulário de contato
- **Desenvolvedora** (`/desenvolvedora`) - Sobre a criadora do projeto

## 🎨 Estrutura do Projeto

```
Sweet_Salty/
├── public/
│   ├── icons/          # Ícones do projeto
│   └── image/          # Imagens e logos
├── src/
│   ├── app/
│   │   ├── contato/    # Página de contato
│   │   ├── desenvolvedora/ # Página sobre a dev
│   │   ├── home/       # Página inicial
│   │   ├── receitas/   # Páginas de receitas
│   │   └── usuarios/   # Página de usuários
│   └── components/     # Componentes reutilizáveis
│       ├── Banner.jsx
│       ├── Button.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       └── ScrollToTop.jsx
├── package.json
└── README.md
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar versão de produção
npm run start

# Linting
npm run lint
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de Projetos.

---

<div align="center">
  
**🍯 Sweet & Salty - Onde a tecnologia encontra a culinária! 🧂**

Feito com ❤️ por Amanda Gomes Mechi

</div>
