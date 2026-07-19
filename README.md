# Sarah Hamilton — Flagship Portfolio

Production portfolio for [sarahhamilton.work](https://sarahhamilton.work), built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content

Shared site copy, metrics, experience, credentials, case studies, recruiter "thinking layer," and portfolio roadmap live in `src/content/site.ts`.

Page composition lives in `src/app`. Shared components live in `src/components`.

Replace these public assets without changing their filenames to update them:

- `public/sarah-hamilton-headshot.jpg`
- `public/Sarah-Hamilton-Resume.pdf`

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy to Netlify

1. In Netlify, choose **Add new project → Import an existing project**.
2. Select GitHub and `sarahphamilton/sarahphamilton`.
3. Netlify detects Next.js. Use build command `npm run build` and publish directory `.next` if they are not populated automatically.
4. Deploy the site.
5. In **Domain management**, add `sarahhamilton.work` and follow Netlify's DNS instructions.
6. In **Forms**, enable form detection. The static `public/__forms.html` file registers the form during deployment; the visible Next.js form submits to that static endpoint.

Netlify's current Next.js adapter is applied automatically at build time; no legacy plugin is pinned in this project.
