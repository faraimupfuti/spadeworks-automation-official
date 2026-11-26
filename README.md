# Spadeworks Automation website

Next.js 15 App Router website exported as static files and deployed on **Cloudflare Pages**. The contact form is handled by a Cloudflare Pages Function and delivered through Resend.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Cloudflare Pages

1. Push this project to a GitHub repository.
2. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository and configure:
   - Framework preset: **Next.js (Static HTML Export)**, or **None** if that preset is unavailable
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (the directory containing this README and `package.json`)
   - Node.js version: `20`
4. Create the Pages project and wait for the first deployment.
5. In **Settings → Variables and Secrets**, add these production variables:
   - `RESEND_API_KEY` — a Resend API key (mark as secret)
   - `CONTACT_TO` — the inbox that should receive website enquiries
   - `CONTACT_FROM` — a sender identity verified in Resend, for example `Spadeworks Website <website@spadeworks.co.zw>`
6. Redeploy after adding the variables.
7. In **Custom domains**, add `spadeworks.co.zw` and `www.spadeworks.co.zw` if both should work. Follow Cloudflare's DNS prompts and choose the preferred primary domain.

The `functions/api/contact.js` file is deployed automatically as `/api/contact`. The Resend API key stays server-side and is never included in the browser bundle.

## Contact form configuration

The contact form no longer depends on Netlify Forms. It posts to `/api/contact`, where a Cloudflare Pages Function validates the submission and sends an email through Resend. Configure the three environment variables above before testing the form.

## Project structure

- `app/` — Next.js routes and page layout
- `components/` — reusable site components
- `public/` — static assets
- `functions/api/contact.js` — Cloudflare Pages contact endpoint
- `next.config.mjs` — static export configuration

## Notes

- This is a static-export deployment; it does not require a Next.js server or a Cloudflare Worker running the full Next.js application.
- If you later add server-side Next.js features, API routes, or dynamic rendering, the deployment architecture will need to change.
