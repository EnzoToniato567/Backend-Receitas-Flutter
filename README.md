# Backend Receitas Flutter

API de receitas em Node.js, Express, Prisma 7 e PostgreSQL para consumo no Flutter.

## Deploy na Vercel

1. Envie este repositório para o GitHub, sem incluir arquivos `.env`.
2. Em [Vercel](https://vercel.com/new), importe o repositório.
3. Na configuração do projeto, defina somente:
   - **Root Directory:** `api`
   - **Framework Preset:** `Express` (ou `Other`, caso não seja detectado)
   - **Build Command / Install Command / Output Directory:** deixe os valores padrão.
4. Clique em **Deploy**.
5. No projeto criado, abra **Storage** → **Connect Database** → **Prisma Postgres** e conecte/crie o banco para este projeto.
6. Em **Settings** → **Environment Variables**, confirme que `DATABASE_URL` foi adicionada para o ambiente **Production**. Ela é criada automaticamente pela integração do banco; não cadastre uma chave de API nem use uma URL `prisma+postgres://`.
7. Abra **Deployments** e faça **Redeploy** do deployment mais recente.

O arquivo `api/vercel.json` é o único arquivo de configuração da Vercel necessário. Não crie outro `vercel.json` na raiz do repositório.

## Criar a tabela no banco da Vercel

O CLI da Vercel não exporta valores secret para arquivos locais. Para criar a tabela, obtenha uma conexão direta no Prisma Console:

1. Na Vercel, abra **Storage**, selecione o banco conectado e clique em **Manage in Prisma Console**.
2. No Prisma Console, abra o banco, clique em **Connect to your database** e depois em **Generate new connection string**.
3. Copie a conexão **Direct** (começa com `postgres://` e usa `db.prisma.io`), sem compartilhá-la.
4. Dentro de `api`, substitua os valores `[SENSITIVE]` do `.env` pela conexão copiada:

   ```env
   DATABASE_URL="postgres://USUARIO:SENHA@db.prisma.io:5432/postgres?sslmode=require"
   DIRECT_URL="postgres://USUARIO:SENHA@db.prisma.io:5432/postgres?sslmode=require"
   ```

5. Execute:

   ```bash
   npx prisma db push
   ```

`db push` cria a tabela `Receita`. O `.env` é ignorado pelo Git e não deve ser enviado ao repositório.

Depois, teste:

```text
https://SEU-PROJETO.vercel.app/
https://SEU-PROJETO.vercel.app/receitas/listar
```

A segunda URL retorna `[]` quando o banco está conectado, mas ainda não possui receitas.

## Desenvolvimento local

1. Dentro de `api`, crie um `.env` com uma conexão PostgreSQL direta:

   ```env
   PORT=3000
   DATABASE_URL="postgresql://USUARIO:SENHA@HOST:5432/BANCO?sslmode=require"
   ```

2. Instale as dependências, crie a tabela e execute a API:

   ```bash
   npm install
   npx prisma db push
   npm run dev
   ```

3. Teste em `http://localhost:3000`.

## Rotas

| Método | Rota | Ação |
| --- | --- | --- |
| GET | `/` | Testa se a API está online |
| GET | `/receitas/listar` | Lista as receitas |
| POST | `/receitas/cadastrar` | Cadastra uma receita |
| PUT | `/receitas/atualizar/:id` | Atualiza uma receita |
| DELETE | `/receitas/excluir/:id` | Exclui uma receita |

Exemplo para cadastrar ou atualizar uma receita:

```json
{
  "nome": "Miojo",
  "ingredientes": "Um pacotinho",
  "modo_preparo": "Ferva a água e cozinhe por dois minutos.",
  "url_imagem": "https://exemplo.com/miojo.jpg"
}
```
