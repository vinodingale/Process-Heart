# Process Heart Website

Professional multi-page consulting website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion animations
- SEO-ready metadata

## Folder Structure

```bash
.
├── app/
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── industries/
│   ├── privacy-policy/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animated-section.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   └── page-hero.tsx
├── lib/
│   └── site-content.ts
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local development:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import repository in Vercel.
3. Build command: `npm run build`
4. Output: default Next.js output.
5. Deploy.

### Netlify
1. Connect repo in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Enable Next.js runtime plugin if prompted.

## Performance and Accessibility Notes
- Uses semantic landmarks (`header`, `main`, `section`, `footer`).
- Responsive layout with mobile-first Tailwind classes.
- Minimal client-side JS (animations only where needed).
- Modern image format support configured in Next.js.

## Recommended Improvements
- Add CMS integration for editable content.
- Connect contact form to API route + email service.
- Add case studies and blog for organic SEO growth.
- Add analytics and conversion tracking.
