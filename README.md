# Project Title
A brief description of the project. This is a production-ready foundation for client websites with built-in SEO, GEO, and professional engineering standards.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation & Development
1. **Install Dependencies:** `npm install`
2. **Run the Development Server:** `npm run dev`
3. **Lint & Format Code:** Run `npm run lint` and `npm run format`.
4. **Analyze Production Bundle:** Run `npm run build:analyze` to inspect the final bundle size.

---

## ✅ Protocol Features Included

- **AI Crawler Accessibility:** `robots.txt` is configured for GEO.
- **Advanced Schema & Meta Tags:** Comprehensive components for Schema.org and social media sharing.
- **Code Quality:** Pre-configured with ESLint and Prettier for a consistent, clean codebase.
- **Performance-First:** Optimized images and build configurations, with a bundle analyzer included.
- **Professional UI/UX Foundation:** A scalable design system in `tailwind.config.js`, a matching `design.json` file, Google Fonts integration, and `framer-motion`.

### Animation Philosophy
This project includes `framer-motion`, but always use the simplest effective technology for animations. Follow this hierarchy:
1.  **Tailwind CSS:** For simple transitions and hover effects.
2.  **JS/React State:** For conditional rendering or simple state-driven animations.
3.  **Framer Motion:** For complex, physics-based, or orchestrated animations.

---

## 📈 Post-Setup Protocol Checklist

These critical tasks must be completed to deploy the project.

- **Customize Placeholders:**
    - Update business info in all `src/components/seo` files.
    - Replace `example.com` domain in `vite.config.js` and `robots.txt`.
    - Update company name in `Footer.jsx`.
    - Update your theme in `tailwind.config.js` and `design.json`.
- **Implement Citable Content Strategy:**
    - Write a 40-60 word "Direct Answer Summary" below each page's H1.
    - Back up claims with data and cite sources with outbound links.
- **Final SEO/Hosting Tasks:**
    - Set up 301 redirects for `www` vs. `non-www`.
    - Set up Google Search Console and submit the sitemap.