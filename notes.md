# React-Tutorial-Theo---t3

Vou usar Nextjs com React(com server components/actions), Typescript, Tailwind css, Shadcnui, Drizzle ORM e PNPM

novo projeto: pnpm create t3-app@latest // ->TS - Tailwind - tRPC (recomendado mas vou desativar no tutorial apenas) - none auth - Drizzle orm - app router yes - postgresql

#TODO
- [X] Make it deploy (vercel)
- [X] Scaffold basic ui with mock data
- [X] Tidy up build process
- [X] Actually set up a database (Neon vercel postgres)
- [X] Attach database to UI
- [ ] Add image upload
- [ ] Error management (w/ clerk)
- [ ] Routing/image page (parallel route)
- [ ] Delete button (w/ Server Actions)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

conectar o deploy no vercel:
    entre no site vercel, clique em new - project - repositorio no git - adiciona envirolment variables (pode usar uma fake gerada no .env para teste)- deploy

Nao recomendasse salvar as imagens do projeto na pasta public, tem potencial de problemas, recomendado usar o site 'uploadthing'.
div classname flex flex-(((wrap))) esse wrap significa que vai criar multiplos rows, por exemplo para imagem, nao vai ter so uma lista, se tiver 100 imagens vai ficar se extendendo ate acabar.





Sobre conectar com o banco de dados, fiz diretamente pelo vercel. Fui no projeto e depois em storage e selecionei Neon postgres (muito importante selecionar a regiao do projeto para o DB ), criei um nome e depois copiei o Snippet do .env.local e colei para meu .env
    proximo passo e instalar o postgres no terminal: pnpm install postgres
        e o index.ts deve ficar assim:
            import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });


No video ele muda o DATABASE_URL para POSTGRES_URL, porem com o NEON database isso nao e necessario. Porem temos que ir em projeto - storage - env variables e deletar o DATABASE_URL que cria por padrao, para que assim possamos criar as variaveis novas.
    Apos isso, devemos rodar o pnpm run db:push e pnpm run db:studio

Para adicionar middlewares pelo Clerk core 2, podemos: pnpm add @clerk/nextjs e pnpm approve-builds
    Apos isso, se eu estiver com a versao do next inferior a 15.0, devemos criar um arquivo chamado middleware.ts, mas como minha versao e superior, devemos criar um arquivo chamado proxy.ts
        Se bem que eu testei o proxy.ts e nao funcionou, criei o middleware entao.
    Depois, devemos seguir os passos da documentacao, e importar o .env tanto localmente quando no Vercel

Dentro da pasta app, podemos criar pastas que comecam com " _ " , como por exemplo " _components ", e isso vai indicar ao next que nao e para ser tratado como uma rota