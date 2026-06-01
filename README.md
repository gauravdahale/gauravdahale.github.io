# Gaurav Dahale — Portfolio

A modern React portfolio built with **Vite + React**, showcasing 32+ projects across Mobile, Web, and Full-Stack development.

**Live site:** https://gauravdahale.github.io

---

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool and dev server
- **CSS3** — Custom variables & animations (no framework needed)
- **Font Awesome** — Icons
- **GitHub Actions** — Automated deployment to GitHub Pages

---

## Project Structure

```
├── src/
│   ├── main.jsx              # App entry point
│   ├── App.jsx               # Root component
│   ├── index.css             # React-specific resets
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with smooth scroll
│   │   ├── Hero.jsx          # Hero banner section
│   │   ├── About.jsx         # About me section
│   │   ├── Projects.jsx      # Project grid with filter by type
│   │   ├── Stats.jsx         # Animated statistics counter
│   │   ├── Skills.jsx        # Technical skills grid
│   │   ├── Contact.jsx       # Contact links
│   │   └── Footer.jsx        # Footer
│   └── data/
│       ├── projects.js       # All project data (32+ projects)
│       └── skills.js         # Skill categories & stats data
├── public/
│   └── google57571553cd3eb843.html  # Google Search Console verification
├── styles.css                # Global styles (shared with React)
├── index.html                # Vite entry HTML
├── vite.config.js
└── .github/workflows/deploy.yml    # CI/CD: build & deploy to Pages
```

---

## Local Development

```bash
npm install
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build
```

---

## Deployment

The site deploys automatically via **GitHub Actions** on every push to `main`.

> **First-time setup:** Go to *Settings → Pages* in your GitHub repository and set the source to **GitHub Actions**.

---

## Adding Projects

Edit `src/data/projects.js` and add an entry to the `projects` array:

```js
{
  id: 33,
  name: 'My New Project',
  description: 'Short description of what it does.',
  tech: ['React', 'Node.js', 'MongoDB'],
  language: 'TypeScript',
  type: 'Full-Stack',          // 'Mobile' | 'Web' | 'Full-Stack'
  github: 'https://github.com/gauravdahale/my-new-project',
}
```

---

## Author

**Gaurav Dahale**
- GitHub: [@gauravdahale](https://github.com/gauravdahale)
- LinkedIn: [gauravdahale](https://linkedin.com/in/gauravdahale)
