# Reedocs Frontend MVP

Frontend prototipo SaaS B2B para validacao documental no comercio exterior.

## Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui style components
- Lucide Icons

## Estrutura
```
app/
  dashboard/
  processes/
  reports/
components/
lib/
```

## Rodar localmente
1. Instale Node.js 20+.
2. Na pasta `reedocs_frontend`, execute:
   ```bash
   npm install
   npm run dev
   ```
3. Abra `http://localhost:3000`.

## Observacoes
- O MVP usa dados mockados em `lib/mockData.ts`.
- A estrutura de tipos em `lib/types.ts` esta pronta para futura integracao com API REST.
