# 🏋️ HealthFitness

### Trabalho Prático 1 — Arquitetura de Software

#### Monólito com Spring Boot + React

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

Aplicação monolítica para gerenciamento de academia, desenvolvida com **Spring Boot** no back-end e **React** no front-end, seguindo arquitetura em camadas e princípios SOLID. A aplicação foi desenvolvida como primeira entrega do TP da disciplina de **Desenvolvimento de Softwares Escaláveis**.

---

## ✅ Funcionalidades

- Cadastro de Alunos
- Listagem de Alunos
- Edição de Alunos
- Remoção de Alunos
- Interface web com React

---

## 🏛 Arquitetura

A aplicação segue o padrão de **arquitetura em camadas**, separando claramente as responsabilidades:

```
┌─────────────────────────────────────────────┐
│                   FRONT-END                 │
│              React  (porta 3000)            │
└─────────────────┬───────────────────────────┘
                  │  HTTP / REST (JSON)
┌─────────────────▼───────────────────────────┐
│                  BACK-END                   │
│           Spring Boot (porta 8080)          │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │         Controller (REST)            │   │  ← Recebe requisições HTTP
│  └──────────────────┬───────────────────┘   │
│                     │                       │
│  ┌──────────────────▼───────────────────┐   │
│  │         Service (Negócio)            │   │  ← Regras de negócio
│  └──────────────────┬───────────────────┘   │
│                     │                       │
│  ┌──────────────────▼───────────────────┐   │
│  │       Repository (Persistência)      │   │  ← Acesso ao banco de dados
│  └──────────────────┬───────────────────┘   │
└─────────────────────┼───────────────────────┘
                      │
┌─────────────────────▼───────────────────────┐
│              BANCO DE DADOS                 │
│                    H2                       │
└─────────────────────────────────────────────┘
```

---

## 🛠 Tecnologias

#### Tecnologias

| Java  
| Spring Boot  
| Spring MVC  
| Spring Data JPA
| H2 Database  
| Maven  
| Lombok

## 📁 Estrutura de Pastas

```
TP1-Health_Fitness/
│
├── healthFitness/                          # Aplicação Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/healthfitness/
│   │   │   │   ├── controllers/       # Camada de controle (REST)
│   │   │   │   │   ├── AlunoController.java
│   │   │   │   ├── services/          # Camada de serviço (negócio)
│   │   │   │   │   ├── AlunoService.java
│   │   │   │   ├── repositories/       # Camada de repositório (dados)
│   │   │   │   │   ├── AlunoRepository.java
│   │   │   │   ├── models/            # Entidades do domínio
│   │   │   │   │   ├── Aluno.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── frontend/                         # Aplicação React
│   ├── src/
│   │   ├── components/               # Componentes reutilizáveis
│   │   ├── services/                 # Chamadas à API
│   │   └── App.jsx
└── └── package.json

```

---

## 🚀 Como Executar

### Pré-requisitos

- [Git](https://git-scm.com/)
- [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
- [Maven 3.x](https://maven.apache.org/)
- [Node.js 18+](https://nodejs.org/)

### 1. Clone o repositório

```bash
git clone https://github.com/LeticiaFAAGomes/TP1-Health_Fitness.git
cd TP1-Health_Fitness
```

### 2. Execute o Back-End

```bash
cd backend
mvn spring-boot:run
```

> A API estará disponível em: `http://localhost:8080`
> Console H2 em: `http://localhost:8080/h2-console`

### 3. Execute o Front-End

```bash
cd frontend
npm install
npm start
```

> A aplicação estará disponível em: `http://localhost:3000`

---

## 🔗 Endpoints da API

### Alunos

| Método   | Endpoint       | Descrição             |
| -------- | -------------- | --------------------- |
| `GET`    | `/alunos`      | Lista todos os alunos |
| `GET`    | `/alunos/{id}` | Busca aluno por ID    |
| `POST`   | `/alunos`      | Cria novo aluno       |
| `PUT`    | `/alunos/{id}` | Atualiza aluno        |
| `DELETE` | `/alunos/{id}` | Remove aluno          |

---

## 👩‍💻 Autora

Letícia Gomes
Projeto desenvolvido para a disciplina de Projeto de Bloco de Desenvolvimento de Softwares Escaláveis.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---
