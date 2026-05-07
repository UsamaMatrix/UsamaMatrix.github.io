# Muhammad Usama — Portfolio

Personal portfolio website for Muhammad Usama (@UsamMatrix), Rust & Cybersecurity Engineer and Founder of UZYNTRA Security.

## Tech Stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build & Preview

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

### Automatic (GitHub Actions)

1. Push to the `main` branch.
2. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy to GitHub Pages.
3. In your repository settings, go to **Settings → Pages** and set the source to **GitHub Actions**.

### Manual

```bash
npm run build
# Upload the contents of /dist to your GitHub Pages branch
```

## Changing the Base Path

Open `vite.config.ts` and update the `base` value:

```ts
// User site (UsamMatrix.github.io) → use "/"
base: "/"

// Project site (UsamMatrix.github.io/portfolio) → use "/portfolio/"
base: "/portfolio/"
```

## Updating Personal Links

All personal links are hardcoded in the components. Key files to update:

| File | What to update |
|------|---------------|
| `src/components/Navbar.tsx` | Logo name, UZYNTRA badge |
| `src/components/Hero.tsx` | GitHub/LinkedIn links, name, headline |
| `src/components/Contact.tsx` | Email, all social links |
| `src/components/Footer.tsx` | Name, links |
| `index.html` | SEO meta tags, title |

## Customizing Sections

All content data lives in `src/data/`:

| File | Controls |
|------|---------|
| `projects.ts` | Featured projects cards |
| `skills.ts` | Skill categories and chips |
| `expertise.ts` | Core expertise cards |
| `timeline.ts` | Experience timeline items |
| `blog.ts` | Blog/writing cards |

Edit these files to update content without touching component logic.

## Project Structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Expertise.tsx
    Projects.tsx
    UzyntraSection.tsx
    Skills.tsx
    Timeline.tsx
    SecurityPhilosophy.tsx
    Blog.tsx
    Contact.tsx
    Footer.tsx
    BackToTop.tsx
  data/
    projects.ts
    skills.ts
    expertise.ts
    timeline.ts
    blog.ts
  styles/
    globals.css
  App.tsx
  main.tsx
.github/
  workflows/
    deploy.yml
index.html
vite.config.ts
tailwind.config.js
postcss.config.js
package.json
tsconfig.json
```

## License

MIT
