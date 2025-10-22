# Next.js + Netlify starter (customized)

Pages:
- `/` Home: natural scene hero with CTA
- `/comments`: client-side comment board (stores in localStorage)
- `/gallery`: simple photo grid (drag & drop to preview locally)
- `/contact`: Netlify Forms-ready contact form (no backend coding required)

## Develop
```bash
npm install
npm run dev
```

## Deploy on Netlify
- Connect repo to Netlify or run: `netlify init` then `netlify deploy --prod`
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (auto if you commit `netlify.toml`)

### Netlify Forms
- Submissions appear in your Netlify dashboard automatically once a real submission is received.

### Notes
- The comments page uses `localStorage` (no server/database). For multi-user comments, hook it to a DB or Netlify Functions/Airtable/Supabase.
