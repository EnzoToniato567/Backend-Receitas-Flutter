# Backend Receitas Flutter

API REST de receitas, feita com Node.js, Express e Prisma, para uso no aplicativo Flutter.

## Estrutura

- `api/server.js`: inicia o servidor local.
- `api/index.js`: exporta a aplicação Express para deploy.
- `api/src/routes/receita.routes.js`: define as rotas de receitas.
- `api/src/controllers/receita.controller.js`: implementa as operações da API.
- `api/prisma/schema.prisma`: define o modelo `Receita`.

## Modelo de receita

Cada receita tem os seguintes campos:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | inteiro | Gerado automaticamente pelo banco |
| `nome` | texto | Nome da receita |
| `ingredientes` | texto | Ingredientes |
| `modo_preparo` | texto | Instruções de preparo |
| `url_imagem` | texto | URL da imagem |
| `custo` | número | Custo da receita |

## Rotas

O servidor local usa o prefixo `/receita`:

| Método | Rota | Ação |
| --- | --- | --- |
| GET | `/` | Informa que a API está online |
| POST | `/receita/cadastrar` | Cadastra uma receita |
| GET | `/receita/listar` | Lista as receitas |
| PUT | `/receita/atualizar/:id` | Atualiza uma receita pelo ID |
| DELETE | `/receita/excluir/:id` | Exclui uma receita pelo ID |

Exemplo de corpo para cadastro:

```json
{
  "nome": "Miojo",
  "ingredientes": "Um pacotinho",
  "modo_preparo": "Ferva a água e cozinhe por dois minutos.",
  "url_imagem": "https://exemplo.com/miojo.jpg",
  "custo": 3.5
}
```

O `id` não deve ser enviado no cadastro. Para atualizar, envie no corpo apenas os campos que deseja alterar.

## Executar localmente

1. Configure `DATABASE_URL` no arquivo `api/.env` com a URL de conexão do banco.
2. Na pasta `api`, instale as dependências, aplique a migração e inicie o servidor:

   ```bash
   npm install
   npm run db:migrate
   npm run dev
   ```

3. A API ficará disponível em `http://localhost:3000` (ou na porta definida pela variável `PORT`).

O `postinstall` gera o Prisma Client. Para criar ou atualizar tabelas localmente, execute `npm run db:migrate` com o banco acessível.

## Deploy

O arquivo `api/index.js` exporta a aplicação Express para a Vercel. Configure o projeto assim:

1. Defina `api` como **Root Directory** e selecione o preset **Express**.
2. Configure `DATABASE_URL` nos ambientes desejados com a URL do Prisma Postgres.
3. Use `npm run build` como **Build Command**. Esse comando executa `prisma migrate deploy` para aplicar as migrações versionadas no banco.

O `postinstall` executa apenas `prisma generate`, sem tentar abrir uma migração de desenvolvimento durante a instalação.
