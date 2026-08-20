# 📚 Gerenciamento de Clube de Leitura

### Aplicação Web com React

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![SCSS](https://img.shields.io/badge/SCSS-CSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Context API](https://img.shields.io/badge/React-Context%20API-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/reference/react/createContext)

Aplicação web desenvolvida em **React** para gerenciamento e visualização de clubes de leitura, permitindo consultar clubes, visualizar seus detalhes, acompanhar sessões e cadastrar novos clubes.

---

## 💡 Sobre o Projeto

O **Gerenciamento de Clube de Leitura** é uma aplicação web desenvolvida com **React** para facilitar a organização e visualização de clubes de leitura.

A aplicação foi estruturada utilizando **componentização**, separação entre páginas e componentes reutilizáveis, gerenciamento de estado com **Context API** e estilização utilizando **SCSS Modules**.

O projeto permite centralizar informações dos clubes de leitura e disponibilizar uma interface para consulta e cadastro.

---

## 🚀 Funcionalidades

### 📚 Clubes de Leitura

- Listagem de clubes de leitura
- Visualização da descrição dos clubes
- Consulta dos detalhes de um clube
- Cadastro de novos clubes

### 📅 Sessões

- Visualização das sessões relacionadas ao clube
- Organização das informações das sessões dentro da página do clube

### 📝 Cadastro

- Formulário para criação de novos clubes
- Atualização do estado da aplicação após o cadastro

### 🖥️ Interface

- Componentes reutilizáveis
- Layout centralizado
- Navegação entre páginas
- Estilização utilizando SCSS Modules

---

## 🏛️ Arquitetura

A aplicação utiliza uma estrutura baseada em **componentização React**, separando responsabilidades entre páginas, componentes, layout e gerenciamento de estado.

```text
┌─────────────────────────────────────────────┐
│                  USUÁRIO                    │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────┐
│                   REACT                     │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │                Pages                  │  │
│  │   Lista | Detalhes | Novo Clube       │  │
│  └───────────────────┬───────────────────┘  │
│                      │                      │
│  ┌───────────────────▼───────────────────┐  │
│  │             Components                │  │
│  │ Header | Descrição | Detalhes |       │  │
│  │ Sessões | Novo Clube                  │  │
│  └───────────────────┬───────────────────┘  │
│                      │                      │
│  ┌───────────────────▼───────────────────┐  │
│  │           ClubeProvider               │  │
│  │          Context API                  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
````

---

## 🛠️ Tecnologias

| Tecnologia           | Utilização                      |
| -------------------- | ------------------------------- |
| **React**            | Desenvolvimento da interface    |
| **JavaScript**       | Linguagem principal             |
| **SCSS**             | Estilização dos componentes     |
| **CSS Modules**      | Estilos isolados por componente |
| **Context API**      | Gerenciamento de estado         |
| **Create React App** | Estrutura e execução do projeto |
| **npm**              | Gerenciamento de dependências   |

---

## 📁 Estrutura do Projeto

```text
gerenciamento-clube-leitura/
│
├── public/
│   ├── api/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   │
│   ├── components/
│   │   ├── clubeLista/
│   │   │
│   │   ├── descricaoClube/
│   │   │   ├── DescricaoClube.jsx
│   │   │   └── DescricaoClube.module.scss
│   │   │
│   │   ├── detalhesClube/
│   │   │   ├── DetalhesClube.jsx
│   │   │   └── DetalhesClube.module.scss
│   │   │
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.scss
│   │   │
│   │   ├── novoClube/
│   │   │   ├── NovoClube.jsx
│   │   │   └── NovoClube.module.scss
│   │   │
│   │   └── sessoesClube/
│   │       └── SessoesClube.jsx
│   │
│   ├── layout/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── clubeListaPage/
│   │   ├── detalhesClubePage/
│   │   └── novoClubePage/
│   │
│   ├── providers/
│   │   └── ClubeProvider.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧩 Componentização

O projeto utiliza componentes independentes para facilitar a manutenção e reutilização da interface.

### Header

Responsável pela estrutura do cabeçalho da aplicação.

### DescricaoClube

Responsável pela apresentação da descrição de um clube de leitura.

### DetalhesClube

Exibe informações detalhadas relacionadas ao clube selecionado.

### NovoClube

Responsável pela interface de cadastro de um novo clube.

### SessoesClube

Responsável pela apresentação das sessões relacionadas ao clube.

---

## 🗂️ Páginas

As páginas organizam os componentes de acordo com cada fluxo da aplicação.

### Clube Lista

Página responsável pela visualização dos clubes disponíveis.

### Detalhes do Clube

Página destinada à visualização das informações detalhadas de um clube.

### Novo Clube

Página destinada ao cadastro de um novo clube.

---

## 🔄 Gerenciamento de Estado

O gerenciamento das informações dos clubes é realizado através da **Context API do React**.

O `ClubeProvider.jsx` centraliza o estado relacionado aos clubes e permite que diferentes componentes da aplicação compartilhem essas informações sem a necessidade de passar propriedades manualmente por vários níveis da árvore de componentes.

```text
                 ClubeProvider
                       │
          ┌────────────┼────────────┐
          │            │            │
          ▼            ▼            ▼
     Lista Clube   Detalhes     Novo Clube
                       │
                       ▼
                 Sessões Clube
```

---

## 🎨 Estilização

A aplicação utiliza **SCSS Modules** para organizar os estilos de forma isolada por componente.

Exemplo:

```text
descricaoClube/
├── DescricaoClube.jsx
└── DescricaoClube.module.scss
```

Dessa forma, os estilos do componente ficam encapsulados e reduzem o risco de conflitos entre diferentes partes da aplicação.

---

## 🚀 Como Executar

### Pré-requisitos

Antes de executar o projeto, é necessário possuir:

* Node.js
* npm

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/gerenciamento-clube-leitura.git
```

### 2. Entre na pasta do projeto

```bash
cd gerenciamento-clube-leitura
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
npm start
```

A aplicação será iniciada e poderá ser acessada pelo endereço exibido no terminal, normalmente:

```text
http://localhost:3000
```

---

## 📦 Scripts Disponíveis

No diretório do projeto, é possível executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.

### `npm test`

Executa os testes da aplicação.

### `npm run build`

Cria uma versão otimizada da aplicação para produção.

---

## 👩‍💻 Autora

**Letícia Gomes**

Projeto desenvolvido para fins acadêmicos, aplicando conceitos de desenvolvimento de aplicações web com **React**, componentização, gerenciamento de estado e organização arquitetural.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais informações.
