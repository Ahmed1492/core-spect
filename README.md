# Core Spect Website

Company website for **Core Spect - Inspection & Integrity Services**, built with [Next.js](https://nextjs.org) (App Router), React and Tailwind CSS.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/equipment-safety` | Equipment & Safety |
| `/contact` | Contact |

## Editing content

Most of the text on the site (company details, services, equipment, safety commitments, FAQs) lives in one file:

```
src/lib/site.ts
```

Other useful places:

- `src/components/` - shared parts such as the header, footer, logo and page banner
- `src/app/` - one folder per page; `icon.svg`, `icon1.png` and `apple-icon.png` are the browser and home-screen icons
- `src/app/globals.css` - colours and animations

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Don't run `npm run build` while `npm run dev` is running - both write to the `.next` folder. If the dev server shows "Cannot find module" errors, stop it, delete `.next` and start it again.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. If the repository contains more than this folder, set **Root Directory** to the folder that holds `package.json`.
4. Keep the detected defaults (Framework: Next.js, build command `npm run build`) and click **Deploy**.

No environment variables are needed. Every push to the main branch redeploys the site automatically.

## Known to-dos

- **Contact form** - shows a confirmation but does not send messages yet (`src/app/contact/ContactForm.tsx`). Connect it to an email service before relying on it.
- **Map** - centred on Mostorod; replace the query in `src/app/contact/page.tsx` with the office's exact location.
