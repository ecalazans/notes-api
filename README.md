# Notes API

Este repositório contém uma API desenvolvida para gerenciar notas, permitindo operações de criação, leitura, atualização e exclusão (CRUD).

## Tecnologias Utilizadas

- Node.js
- Express
- Knex.js
- SQLite

## Configuração do Ambiente

1. Clone este repositório:

   ```bash
   git clone https://github.com/ecalazans/notes-api.git

2. Navegue até o diretório do projeto:

cd notes-api

3. Instale as dependências:

npm install

4. Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env e preencha as variáveis conforme necessário.

5. Execute as migrações do banco de dados:

npx knex migrate:latest


## Executando a Aplicação

1. Inicie o servidor:

npm start

A aplicação estará disponível em http://localhost:<PORT>, onde <PORT> é o número da porta especificado no arquivo .env.
