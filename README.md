# Process Heart — Enterprise Website

Premium multi-page engineering consulting website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom color + typography system)
- Framer Motion (smooth scroll-reveal animations)
- SEO metadata in root layout

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
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deployment

### Deploy on Vercel (Preferred)
1. Push repository to GitHub.
2. Import the project in Vercel.
3. Build command: `npm run build`
4. Output: Next.js default.
5. Deploy.

### Deploy on Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Enable Next.js runtime plugin when prompted.

## Performance + Accessibility
- Semantic landmarks and heading hierarchy.
- Responsive design with mobile-first spacing.
- Optimized font loading (`display: swap`) via `next/font`.
- Light client-side JS footprint with scoped animation wrappers.

## Recommended Next Improvements
- Integrate CMS for editable content.
- Connect contact form to backend endpoint + email workflow.
- Add case studies, insights/blog, and schema markup.
- Add monitoring (analytics + Web Vitals reporting).
