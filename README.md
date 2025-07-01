📦 Projeto Dashboard - Setup e Execução

Este projeto é um dashboard web para gestão de trabalhadores e dados empresariais, desenvolvido com:

Frontend: Vue.js + Tailwind CSS

Backend: Node.js (Express)

Base de dados: MySQL via Docker

✅ Requisitos obrigatórios

Antes de iniciar, certifica-te de que tens os seguintes programas instalados:

Node.js (v18 ou superior)

WSL 2 (necessário para correr Docker no Windows)

🚀 Como iniciar o projeto

1. Instalar dependências

Backend (Node.js)

cd backend
npm install

Frontend (Vue.js)

cd frontend
npm install

2. Levantar a base de dados com Docker

Requisitos:

WSL 2 instalado e ativado no Windows

Comando:

cd database/docker
docker-compose up --build


3. Iniciar o backend

cd backend
node server.js

4. Iniciar o frontend

cd frontend
npm run serve

Acede à aplicação :

phpMyAdmin

http://172.23.186.86:8082/

🔐 Credenciais padrão (exemplo)

phpMyAdmin:

Utilizador: root

Palavra-passe: root_password

Base de dados: dashboard

Confirma estes dados no ficheiro docker-compose.yml se forem diferentes.

📎 Dicas adicionais

Não faças push de node_modules/


Se precisares de ajuda, contacta o responsável do projeto.

Atualizado em: 01/07/2025
