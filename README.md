# 🍯 Sweet & Salty

<div align="center">
  <img src="public/image/logotipo.png" alt="Sweet & Salty Logo" width="200"/>
  
  **Projeto de receitas culinárias desenvolvido com Next.js**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![CSS Modules](https://img.shields.io/badge/CSS-Modules-pink?style=for-the-badge&logo=css3)](https://github.com/css-modules/css-modules)
  
  ---
  
  ## 🌐 **Acesse o Projeto Online**
  
  [![Deploy no Vercel](https://img.shields.io/badge/Vercel-Deploy-black?style=for-the-badge&logo=vercel)](https://sweet-salty.vercel.app/home)
  
  **🔗 Link direto: [https://sweet-salty.vercel.app/home](https://sweet-salty.vercel.app/home)**
  
  > ✨ Experimente todas as funcionalidades do Sweet & Salty sem precisar configurar nada localmente!
  
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

## 🛠️ Tutorial Completo de Instalação e Configuração

> ⚠️ **IMPORTANTE**: Siga os passos apresentada para evitar problemas de configuração.

### 🎯 Parte 1: Configuração do Backend

#### 1.1. Clone o Repositório do Backend

Em um terminal separado:

```
git clone https://github.com/Amandamecchi/BackEnd-SweetSalty.git
cd BackEnd-SweetSalty
```

#### 1.2. Instale as Dependências do Backend

```bash
npm install
```

#### 1.3. Configure o Banco de Dados

1. **Abra o banco de dados** conforme as instruções do projeto backend
2. **Execute os scripts SQL** necessários para criar as tabelas
3. **Verifique se o banco está funcionando** corretamente

#### 1.4. Configure as Variáveis de Ambiente do Backend

Crie um arquivo `.env` na raiz do projeto backend com as seguintes configurações:

```env
# Configurações do Banco de Dados
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=sweetsalty

# Configurações do Servidor
PORT=3000
NODE_ENV=development

```

> 📝 **Nota**: Ajuste os valores de acordo com sua configuração local do banco de dados.

#### 1.5. Execute o Backend

```bash
npm run dev
```

✅ **Verificação**: O backend deve estar rodando na porta 3000. Você deve ver uma mensagem como:
```
Servidor rodando na porta 3000
Conectado ao banco de dados
```

---

### 🎯 Parte 2: Configuração do Frontend

#### 2.1. Clone o Repositório do Frontend

Abra um **novo terminal** (mantenha o backend rodando no anterior) e execute:

```bash
git clone https://github.com/Amandamecchi/Sweet_Salty.git
cd Sweet_Salty
```

#### 2.2. Configure as Variáveis de Ambiente do Frontend

Crie um arquivo `.env.local` na raiz do projeto frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

> ⚠️ **ATENÇÃO**: Use  a porta 3000, que é onde o backend está rodando.

#### 2.3. Instale as Dependências do Frontend

```bash
npm i
```

#### 2.4. Execute o Frontend

```bash
npm run dev
```

✅ **Verificação**: O frontend iniciará automaticamente. Você verá uma mensagem como:
```
▲ Next.js 15.5.2
- Local:        http://localhost:3002
- Network:      http://192.168.x.x:3002

✓ Ready in 2.1s
```

> 📝 **Nota**: O Next.js automaticamente encontrará uma porta disponível (geralmente 3002, já que o backend está na 3000).

---

### 🌐 Acessando o Projeto

1. **Abra seu navegador**
2. **Acesse**: `http://localhost:3002` (ou a porta indicada no terminal)
3. **Navegue pelas páginas**:
   - **Home**: `/home` - Receitas populares
   - **Receitas**: `/receitas` - Lista completa
   - **Contato**: `/contato` - Formulário de contato
   - **Desenvolvedora**: `/desenvolvedora` - Sobre o projeto

---

### 🔧 Solução de Problemas Comuns

#### ❌ Erro "Cannot connect to database"
**Solução**: Verifique se:
- O banco de dados está rodando
- As credenciais no arquivo `.env` do backend estão corretas
- As tabelas foram criadas corretamente


---

### 📝 Resumo dos Comandos

**Terminal 1 - Backend:**
```bash
git clone https://github.com/Amandamecchi/BackEnd-SweetSalty.git
cd BackEnd-SweetSalty
npm install
# Configure .env com porta 3000
npm start
```

**Terminal 2 - Frontend:**
```bash
git clone https://github.com/Amandamecchi/Sweet_Salty.git
cd Sweet_Salty
# Configure .env.local: NEXT_PUBLIC_API_URL=http://localhost:3000
npm i
npm run dev
```

**Resultado**: Frontend em `http://localhost:3002` conectado ao backend em `http://localhost:3000`

---

## 📱 Navegação do Site

Após seguir o tutorial completo acima, você poderá navegar pelas seguintes páginas:

> 🌐 **Alternativa**: Você também pode acessar diretamente o projeto online em [https://sweet-salty.vercel.app/home](https://sweet-salty.vercel.app/home) sem precisar configurar nada localmente!

### 🏠 Páginas Principais

**💻 Desenvolvimento Local:**
- **🏡 Home** (`http://localhost:3002/home`) - Página inicial com receitas populares
- **🍳 Receitas** (`http://localhost:3002/receitas`) - Lista completa de receitas
- **📖 Receita Individual** (`http://localhost:3002/receitas/[id]`) - Detalhes específicos
- **👥 Usuários** (`http://localhost:3002/usuarios`) - Gestão de usuários
- **📞 Contato** (`http://localhost:3002/contato`) - Formulário de contato
- **👩‍💻 Desenvolvedora** (`http://localhost:3002/desenvolvedora`) - Sobre a criadora

**🌐 Produção (Vercel):**
- **🏡 Home** (`https://sweet-salty.vercel.app/home`) - Página inicial
- **🍳 Receitas** (`https://sweet-salty.vercel.app/receitas`) - Lista de receitas
- **📞 Contato** (`https://sweet-salty.vercel.app/contato`) - Formulário de contato
- **👩‍💻 Desenvolvedora** (`https://sweet-salty.vercel.app/desenvolvedora`) - Sobre a criadora

### 🔄 Fluxo de Navegação

1. **Inicie pela Home** - Veja as receitas mais populares
2. **Explore as Receitas** - Navegue pela lista completa
3. **Veja Detalhes** - Clique em qualquer receita para ver ingredientes e preparo
4. **Conheça os Usuários** - Veja quem faz parte da comunidade
5. **Entre em Contato** - Use o formulário para feedback
6. **Sobre o Projeto** - Conheça a história e tecnologias usadas

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
