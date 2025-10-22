# Copilot / AI agent instructions — next-netlify-site

Purpose: Give focused, actionable context so an AI coding agent can make sensible edits quickly.

Quick facts
- Framework: Next.js 14 + React 18 (file-based routing in `pages/`).
- Hosting: Netlify with `@netlify/plugin-nextjs` (see `netlify.toml`).
- Local dev: `npm install` then `npm run dev` (calls `next dev`).
- Build: `npm run build` -> output `.next` (Netlify `publish = ".next"`).

Big picture & why
- This is a small, static-first site tuned for Netlify. Pages are simple React function components under `pages/` and composed inside `components/Layout.js` and `components/Nav.js`.
- The project prefers client-side persistence for simple features (e.g. `pages/comments.js` stores comments in `localStorage`) rather than adding a backend.
- `next.config.js` sets `images.unoptimized = true` to avoid Next.js image optimization complexity on Netlify deployments.

Critical files to inspect for changes
- `package.json` — scripts: `dev`, `build`, `start`, `lint`.
- `netlify.toml` — Netlify build command/publish dir and plugin. When modifying deployment behavior, update this file.
- `next.config.js` — keep `images.unoptimized` in mind when adding images or changing image components.
- `pages/contact.js` — Netlify Forms-ready: includes `data-netlify="true"` and `<input type="hidden" name="form-name" value="contact" />`. When editing forms, preserve these attributes.
- `pages/comments.js` — Client-only comment system: key localStorage = `comments`. Data shape: [{id, text, when}]. Keep `useEffect` guards that check `typeof window !== 'undefined'`.
- `pages/gallery.js` — Uses FileReader to preview images. Images state shape: [{name, src}]. Drag-and-drop and `<input type="file" multiple />` handlers live here.

Project-specific conventions & patterns
- No API routes or server functions are present. For server-side logic prefer Netlify Functions or add `pages/api/*` if you want Next.js API routes — remember Netlify's plugin handles routing differently; test builds locally.
- Styling: global styles in `styles/globals.css`. Keep components minimal and avoid adding a heavy CSS framework without a clear need.
- Components are simple, stateless where possible and imported into `_app.js` via `Layout`.

Deployment & debugging notes
- Dev: `npm run dev` (Next dev server). Build locally with `npm run build` and inspect `.next` output.
- Netlify: `netlify.toml` already configures `command = "npm run build"` and `publish = ".next"`. The site relies on `@netlify/plugin-nextjs` for SSR/static behavior.
- Netlify Forms: to keep form submissions working, do not remove `name="contact"`, the hidden `form-name` input, or the `data-netlify` attribute.

Safe edit rules for AI agents (concrete)
- Preserve Netlify form attributes and `localStorage` keys (`comments`). Example: when refactoring `pages/contact.js`, ensure the form still contains
  - `<form name="contact" method="POST" data-netlify="true">`
  - `<input type="hidden" name="form-name" value="contact" />`
- When changing images, remember `next.config.js` disabled optimization; if you re-enable it, test Netlify build and update `netlify.toml` if needed.
- When adding server-side features, prefer adding Netlify Functions (in a `netlify/functions/` folder) or `pages/api/*`. Test `npm run build` locally after changes.

Examples to reference
- Comments: `pages/comments.js` — localStorage read/write and confirm dialog for clearing.
- Contact: `pages/contact.js` — Netlify form + simple local `sent` state to show success message.
- Gallery: `pages/gallery.js` — FileReader-based image previews and drag/drop handlers.

What NOT to do
- Don't assume a DB exists — there is none. Don't wire up server-only code that expects env vars unless added to `netlify.toml` and Netlify settings.
- Don't remove or rename public assets in `public/` without updating references (e.g., `/natural-hero.svg` used in `pages/index.js`).

When in doubt
- Run `npm run dev` and test the changed page in the browser. Run `npm run build` to catch build-time errors before committing.

If you add dependencies
- Update `package.json` and run an install locally. Keep the project lightweight — prefer vanilla React and Next features for this repo.

Short checklist for PRs
- Dev server runs with no console errors for the changed pages.
- `npm run build` completes successfully.
- Netlify form attributes preserved if touching forms.
- `localStorage` keys and FileReader usage preserved when editing comments/gallery.

Feedback
- If any section is missing detail (for example: planned API routes, env vars, or tests), tell me what you'd like—I'll update this file.
