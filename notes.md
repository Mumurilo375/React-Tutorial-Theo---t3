# React-Tutorial-Theo---t3

Vou usar Nextjs com React(com server components/actions), Typescript, Tailwind css, Shadcnui, Drizzle ORM e PNPM

novo projeto: pnpm create t3-app@latest // ->TS - Tailwind - tRPC (recomendado mas vou desativar no tutorial apenas) - none auth - Drizzle orm - app router yes - postgresql

#TODO
- [X] Make it deploy (vercel)
- [ ] Scaffold basic ui with mock data
- [ ] Actually set up a database (vercel postgres)
- [ ] Attach database to UI
- [ ] Add image upload
- [ ] Error management (w/ clerk)
- [ ] Routing/image page (parallel route)
- [ ] Delete button (w/ Server Actions)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

conectar o deploy no vercel:
    entre no site vercel, clique em new - project - repositorio no git - adiciona envirolment variables (pode usar uma fake gerada no .env para teste)- deploy

Nao recomendasse salvar as imagens do projeto na pasta public, tem potencial de problemas, recomendado usar o site 'uploadthing'