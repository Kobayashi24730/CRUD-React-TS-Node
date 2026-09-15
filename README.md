# 🧩 CRUD React-TS-Node - Projeto de Estudo

Projeto full stack de estudo com um CRUD completo, dividido em:

- **`client/`** — React + TypeScript + Vite + Tailwind CSS
- **`backend/`** — Node.js + Express + TypeScript + PostgreSQL (Drizzle ORM)

---

## 🧠 Sobre o Projeto

Este projeto foi desenvolvido com **fins educacionais**, visando:

- Praticar a construção de uma aplicação full stack moderna
- Integrar um frontend em React/TypeScript a uma API Node/Express
- Trabalhar com PostgreSQL usando Drizzle ORM
- Aplicar boas práticas de organização entre client e backend

---

## ⚙️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL (`pg`)
- Drizzle ORM
- bcrypt (hash de senhas)
- dotenv, cors

### Client
- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query (`@tanstack/react-query`)
- ESLint

---

## 📂 Estrutura do Projeto

```
CRUD_React-Ts-Node/
├── backend/   # API em Node.js + Express + TypeScript + PostgreSQL
└── client/    # Aplicação React + TypeScript + Vite + Tailwind
```

---

## ▶️ Como Executar

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e em execução
- Um arquivo `.env` configurado no `backend` com as credenciais do banco

### 1. Backend

```bash
cd backend
npm install
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build   # gera o build de produção
npm start       # roda o build gerado
```

### 2. Client

Em outro terminal:

```bash
cd client
npm install
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build     # gera o build de produção
npm run preview   # visualiza o build gerado
npm run lint      # executa o lint
```

---

## 📦 Principais Dependências

### Backend

```bash
npm install express cors dotenv bcrypt pg drizzle-orm tsconfig-paths
npm install @types/bcrypt
npm install -D typescript ts-node nodemon @types/express @types/cors @types/dotenv @types/pg
```

### Client

```bash
npm install react react-dom @tanstack/react-query
npm install -D vite typescript @vitejs/plugin-react
npm install -D tailwindcss @tailwindcss/postcss postcss autoprefixer
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals
npm install -D @types/node @types/react @types/react-dom
```

---

## ⚠️ Observações

- Este projeto ainda está em desenvolvimento.
- Algumas funcionalidades podem ser melhoradas ou refatoradas.
- O foco principal é aprendizado e evolução contínua.

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT** — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

Em resumo: **qualquer pessoa pode usar, copiar, modificar e distribuir este projeto**, inclusive para fins comerciais, **desde que mantenha o aviso de direitos autorais e a licença original** em cópias ou partes substanciais do software.

---

## 👨‍💻 Autor

Desenvolvido por **Guilherme Silva**
Desenvolvedor Full Stack
