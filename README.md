# Jitender — Portfolio

Creative dev portfolio with glitch effects, neon accents, GSAP animations, Framer Motion, and Lenis smooth scroll.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (styling)
- **Framer Motion** (scroll animations, entrance effects)
- **GSAP + ScrollTrigger** (skill bars, parallax, floating orbs)
- **Lenis** (smooth scroll)
- **TypeScript**

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Deploy on Vercel

Push to GitHub, then connect repo on [vercel.com](https://vercel.com) — zero config needed.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + fonts + metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Tailwind + glitch/glow utilities
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Cursor.tsx   # Custom cursor
│       └── Marquee.tsx  # Scrolling ticker
└── hooks/
    └── useLenis.ts
```

## Customization

- Colors: edit `tailwind.config.js` → `colors`
- Fonts: change Google Fonts import in `globals.css`
- Content: update data in each section component
- Resume: place `Jitender_Resume.pdf` in `/public` folder
