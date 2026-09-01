# Ozan Sönmez — Portfolio

A personal portfolio site built with Next.js. Brings together my experience, projects, and skills on a single page with a dark, minimal design.

**Repo:** [github.com/OzanSonmez37/ozan-portfolio](https://github.com/OzanSonmez37/ozan-portfolio)

## Features

- ⚡ **Next.js 16** (App Router) + **TypeScript**
- 🎨 **Tailwind CSS v4** with a dark theme and an acid-green accent color
- 🎬 **Framer Motion** scroll-triggered animations
- 📱 Fully responsive layout, including a mobile hamburger menu
- 📩 Backend-free, `mailto`-based contact form
- 📄 One-click CV download

## Sections

| Section | Content |
| --- | --- |
| Hero | Intro, short summary, social links, CV download |
| About | Summary, education, certifications |
| Experience | Internship history (timeline) |
| Projects | Featured GitHub projects |
| Skills | Technologies grouped by category |
| Contact | Message form + social links |

## Tech Stack

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Framer Motion` · `Lucide Icons`

## Running Locally

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # create a production build
npm run start   # run the production build
npm run lint    # run ESLint
```

## Project Structure

```
src/
├── app/                # Root layout, global styles, page
├── components/          # Nav, Hero, About, Experience, Projects, Skills, Contact...
└── lib/
    └── data.ts          # All site content (profile, experience, projects, skills)
```

To update the content, editing [`src/lib/data.ts`](src/lib/data.ts) is usually all that's needed.

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com):

1. Connect the repo to Vercel
2. **Next.js** is auto-detected as the framework
3. Deploy

## Contact

- GitHub: [@OzanSonmez37](https://github.com/OzanSonmez37)
- LinkedIn: [Ozan Sönmez](https://www.linkedin.com/in/ozan-s%C3%B6nmez-275484358/)
