# Studiehjälpen – Liam's study helper

A small study website for Liam (year 7, Lgr22). For each topic it has short lessons split into subtopics ("delområden") and a quiz that adapts to what he finds hard. Everything Liam sees is in Swedish.

It is a plain static website (HTML + JavaScript, no build step, no accounts). It runs on GitHub Pages, as a claude.ai artifact, or opened directly from disk.

## Adding a new topic (for the parent)

1. Put the teacher's material in `kallmaterial/<subject>/<topic>/`, for example
   `kallmaterial/biologi/ryggradslosa-djur/`. PDFs, photos of handouts and Word files are all fine.
   This folder is **gitignored**, so the original material is never published.
2. Ask Claude (in this folder): *"Bygg området biologi/ryggradslosa-djur, provet är den 12 november."*
3. Claude writes `docs/amnen/<subject>/<topic>.js` with lessons and questions, adds it to the catalogue, checks it with the validator, and tests it.
4. Review, then commit and push. GitHub Pages updates within a minute or two.

## Progress and syncing between devices

Progress is saved **in each browser** (computer and phone each keep their own).
To move it between devices:

- On the device with the progress: **Framsteg → Kopiera synkkod**
- On the other device: **Framsteg → Klistra in synkkod** (the two histories are merged, nothing is lost)

You can also paste the sync code to Claude and ask for *"mer övning på det Liam tycker är svårt"*. Claude decodes it, sees which subtopics and questions he gets wrong, and adds explanations and questions targeting them.

## Running locally

Open `docs/index.html` directly in a browser, or start a local server from the repo root:

```bash
python -m http.server 8377
```

then go to http://localhost:8377/docs/. To check all topic files for mistakes:

```bash
node tools/validate.mjs
```

## Publishing (GitHub Pages)

In the repository on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/docs`**.
The site will then be at `https://linn7799.github.io/liam-study-helper/`. On the phone, open it and use
"Add to Home Screen" so it behaves like an app.

## Structure

```
kallmaterial/            teacher material (gitignored, never published)
docs/                    the website (GitHub Pages root)
  index.html app.js style.css
  amnen/katalog.js       list of subjects and topics
  amnen/<subject>/<topic>.js   lessons + questions for one topic
tools/validate.mjs       checks all topic files for mistakes (Node)
CLAUDE.md                instructions Claude follows when building topics
```
