# Spadeworks Automation website (Next.js)

Next.js (App Router) with a static export, hosted on Netlify.

## Run locally

    npm install
    npm run dev

Open http://localhost:3000

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify: Add new site > Import an existing project > pick the repository.
3. `netlify.toml` already sets the build command (`npm run build`) and publish folder (`out`).

The contact form uses Netlify Forms. After the first deploy, submissions appear under Forms in
the Netlify dashboard, where you can add email notifications.

## Editing

- Services, steps, commitments, demo data, contact email: `components/data.js`
- Page layout: `app/page.js`
- Colours, fonts, spacing: top of `app/globals.css`
- Reconciliation demo animation: `components/Ledger.js`

Because the site is a static export, it can't use server features such as API routes or
server-side rendering. For a marketing site like this you don't need them.
