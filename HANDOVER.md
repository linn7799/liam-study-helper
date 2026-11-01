# Handover – Studiehjälpen (2026-11-01)

Read this together with **CLAUDE.md**, which has the hard rules, the content workflow and the topic file schema. This file covers what has been decided, what exists and what's next.

## Goal
A study website for Liam (13, year 7, Montessori school in Sweden, Lgr22). For each topic it shows short lessons split into **delområden**, then quizzes him adaptively and tracks his answers so later sessions focus on his weak areas. It must work on both his computer and his phone. **Everything Liam sees is in Swedish.** First topic: **Biologi → Ryggradslösa djur.**

## Decisions already made with the parent (don't reopen)
- **Hosting:** a portable static site (plain HTML/CSS/JS, no build step, no backend, no dependencies) in `docs/`, published with **GitHub Pages** (`main` / `/docs`). Remote: `git@github.com:linn7799/liam-study-helper.git`. Keep it working via `file://` and as a claude.ai artifact as well. Liam should not need a claude.ai account; the parent was told consumer accounts are 18+.
- **Progress:** stored in `localStorage` per device, with a **sync code** (`SH1-` + base64 of UTF-8 JSON) to merge progress between devices. The parent can also paste the code to Claude to get targeted extra material.
- **Grading:** auto-graded types (flerval, sant/falskt, fyll-i, para-ihop, ordning) plus **self-graded fritext**: show the model answer, highlight the `nyckelord` he hit, then Liam picks Rätt / Delvis / Fel.
- **Teacher material** goes in `kallmaterial/` (gitignored). Never commit or copy it verbatim.

## Update 2026-11-01 (second session)
Steps 1–4 below are done: `app.js` follows the spec, `tools/validate.mjs` + `.claude/launch.json` (Python server) exist, the material has been read, and `ryggradslosa-djur.js` has 8 delområden / 85 questions (validator: 0 errors). Tested in the browser: lessons, flip cards, every question type right/wrong/partial, Enter/number keys, results, reload persistence, sync copy → reset → paste (exact), 375 px, light/dark. **Not verified:** `file://` (the browser pane can't run it) and Öva's weighting over time (logic only).
Open questions for the parent are in the chat report: test date, sill in scope, and four places where the teacher's material and general biology differ. Nothing is committed yet. The table below is the original state.

## Current state (original)
Nothing is committed yet. `git status`: README.md modified, and `.gitignore`, `CLAUDE.md` and `docs/` untracked.

| File | State |
|---|---|
| `README.md`, `CLAUDE.md`, `.gitignore` | Done. Revise the "no Node/Python" and `serve.ps1`/`validate.html` parts once the tools are installed (see below). |
| `docs/index.html` | Done. Loads `style.css`, then `app.js` (defer), then `amnen/katalog.js` (defer). The header has an inline SVG logo and a "Framsteg" link. The app renders into `<main id="app">`. |
| `docs/style.css` | Done. Colour tokens on `:root`, dark mode (`prefers-color-scheme` + `data-theme`), mobile-first. It already has classes for every screen listed below: `.card .pill .bar(.low/.mid) .btn(.primary/.danger/.block) .btn-row .sub-list .lesson .factbox .table-wrap figure .progress-dots .flash(.flipped) .quiz-top .question .hint .options .option(.selected/.correct/.wrong) .match-row .order-picked .order-pool .feedback(.good/.bad/.mid) .model-answer .kw(.hit) .selfgrade .score-big .result-row .code-box .stat-grid .stat .toast` |
| `docs/icon.svg`, `docs/manifest.webmanifest` | Done (installable on the phone's home screen). |
| `docs/app.js` | **Not written.** This is the next task. |
| `docs/amnen/katalog.js` | Not written. |
| `docs/amnen/biologi/ryggradslosa-djur.js` | Not written. |
| Local server, validator, `.claude/launch.json` | Not written. |

**Tools:** Node and Python were **not installed** when this was written. `python` was only the Microsoft Store alias. The parent planned to install both (`winget install -e --id Python.Python.3.13` and `OpenJS.NodeJS.LTS`). Check with `python --version` and `node --version`. If they're available:
- **Local server:** `.claude/launch.json` → `python -m http.server 8377` run from the repo root, app at `/docs/`.
- **Validator:** `tools/validate.mjs` (Node). It loads each topic file with a stubbed `registreraAmne` and checks unique ids, that every `delomrade` reference exists, that `svar` indices are in range, that every delområde has questions, and that each question type has its required fields.

If they're still missing, fall back to `tools/serve.ps1` (an HttpListener) and a browser-based `tools/validate.html`.

## app.js spec (agreed design, vanilla JS, a single IIFE)
- **Globals:** `registreraKatalog(list)` and `registreraAmne(obj)` are called by the data files. Expose `window.Studiehjalp = { validera, ... }`, and only render the app if `#app` exists, so the validator can reuse the code. Topic files load lazily by injecting a `<script>` from the `fil` entry in the catalogue.
- **katalog.js:** `registreraKatalog([{ id:"biologi", namn:"Biologi", omraden:[{ id:"biologi/ryggradslosa-djur", titel:"Ryggradslösa djur", fil:"amnen/biologi/ryggradslosa-djur.js", provdatum:"YYYY-MM-DD" }] }])`
- **UI strings** go in one `T` object.
- **Hash routes** (encode the topic id with `encodeURIComponent`, since it contains `/`):
  - `#/` is the start page: greeting, then the subjects, each listing its topics with a test countdown pill ("Prov om N dagar" / "imorgon" / "idag") and a mastery bar.
  - `#/o/<id>` is the topic overview: overall mastery and buttons **Läs / Öva / Provträning**, then one card per delområde with a mastery %, a bar, and "Läs" / "Öva" buttons.
  - `#/las/<id>/<i>` is the lesson reader. It renders the `innehall` blocks (`text`, `lista`, `faktaruta`, `tabell`, `bild-svg`), shows progress dots, and marks the delområde as read. `nyckelbegrepp` show as flip cards at the end. Prev/next buttons, plus "Öva på det här".
  - `#/ova/<id>[/<delomradeId>]` is an adaptive quiz of 10 questions.
  - `#/prov/<id>` is a mixed test of up to 20 questions, stratified across delområden.
  - `#/framsteg` shows stats per topic, copy/paste of the sync code, and reset with a double-tap confirm. Don't use `confirm()`, because it may be blocked inside an artifact iframe.
- **Storage:** `localStorage["studiehjalp.v1"]` = `{v:1, amnen:{ <id>: { q:{ <frageId>:{b,n,r,p,t,h} }, last:{<delomradeId>: ts}, s:[{t,typ,n,poang}] } }}`. Wrap every access in try/catch.
  - `b` is the Leitner box 1–5. Right → +1, except that a first-ever answer that is right goes straight to 3. Delvis leaves the box unchanged. Wrong → 1.
  - `h` holds the last 10 results (0 = wrong, 1 = partial, 2 = right).
- **Mastery:** the mean of `(b-1)/4` over the questions in scope, counting unseen questions as 0.
- **Due intervals (days) per box:** 1:0, 2:1, 3:2, 4:4, 5:7. Cap them at `floor(daysUntilTest/2)`.
- **Öva selection:** weighted random sampling without replacement.
  - Weight: unseen = 4. Otherwise by box (1:8, 2:5, 3:3, 4:1.5, 5:1), ×2 if due and ×0.4 if not, ×0.1 if answered in the last 3 minutes.
  - Multiply the weight by `(1.5 − mastery of its delområde)`.
  - Reserve about 20% of the slots for review questions from boxes 4–5.
- **Question rendering:**
  - flerval: the options are shuffled unless `blanda:false`. Number keys work on desktop. An array `svar` means "välj alla som stämmer" with a Kontrollera button; partial credit if at least half are right with at most 1 wrong.
  - santfalskt: two buttons.
  - fyll-i: show `___` as a blank. Normalise the answer (lowercase, trim, strip punctuation). An accent-stripped match, or a Levenshtein distance of 1 for words of 5+ letters, counts as right, with a spelling note.
  - para-ihop: a `<select>` per row. All right → 2, at least half → 1.
  - ordning: tap items from a pool into a sequence. Exact → 2, at least half in the right position → 1.
  - fritext: a textarea, then "Visa modellsvar" with `nyckelord` chips, then the self-grade buttons.
  - Every type ends with a feedback box (verdict, the correct answer, `forklaring`) and a "Nästa" button (Enter also works).
- **Results:** score (partial = half), bars per delområde for this session, and a suggestion such as "Läs om X igen" / "Öva mer på X" for the weakest delområde below 80%. Save the session to `s`, keeping the last 50.
- **Sync merge:** for each question, keep the record with the higher `n` (or the higher `t` on a tie). `last` takes the maximum. Sessions are combined and deduplicated by `t`.
- **Markup:** escape all text, then allow `**fet**` / `*kursiv*`. `bild-svg` is trusted, authored content and is inserted as-is.

## Teacher material (now in `kallmaterial/biologi/ryggradslosa-djur/`, not yet read)
- `Ryggradslösa djur - urdjur till maskar ons 1 okt - 2026.pptx` (40 MB). The teacher's slides from **urdjur** (protozoa) to maskar, so the scope starts at urdjur. Add a delområde for that.
- `Leddjur.odp` (27 MB). Slides on leddjur.
- `dissektion bläckfisk.pptx`. A squid/octopus dissection, so blötdjur/bläckfisk anatomy is likely examined.
- `dissektion sill.odp`. A herring dissection. **A herring is a vertebrate**: this is probably comparison material, or belongs to another unit. Ask the parent whether it's in scope for this test.
- `frågor med svar ryggradslösa djur - LIBER.docx`. **Questions with answers** (Liber textbook). This is probably the best guide to what the test asks. Cover all of it (in your own words), and use it to set the delområden and the question emphasis.
- `1/2 ryggradslösa djur - 1 okt.jpeg`, `3/4 ryggradslösa djur - 9 okt.jpeg`. Photos (probably notes or the board) from the lessons on 1 and 9 Oct. Read them as images.

How to read them:
- `.pptx`, `.docx` and `.odp` are zip files. Extract each one into its own new folder in the scratchpad (not inside the repo), then read `ppt/slides/*.xml`, `word/document.xml` or `content.xml`. Alternatively use python-pptx / python-docx if Python is installed (the pptx/docx skills cover this).
- Look at the important images in `ppt/media/`. Many are probably photos of animals, but some may be diagrams with labels.

**Unknown:** the test date. Ask the parent (it's shown as `provdatum`).

## Provisional delområden (adjust to the material)
Urdjur (if the teacher includes it) · Vad är ryggradslösa djur · Svampdjur och nässeldjur · Maskar (platt-, rund-, ringmaskar) · Blötdjur (incl. bläckfiskdissektion) · Leddjur (insekter, spindeldjur, kräftdjur, mångfotingar; ömsning; fullständig/ofullständig förvandling) · Tagghudingar · Betydelse i ekosystem och för människan.
Aim for 8–12 questions per delområde, across all types and levels 1–3.

## Next steps
1. Confirm Python/Node. Create `.claude/launch.json` and the validator, and update the tooling notes in README/CLAUDE.md.
2. Write `docs/app.js` from the spec above.
3. Read all the teacher material. Write `docs/amnen/katalog.js` and `docs/amnen/biologi/ryggradslosa-djur.js`, then validate.
4. Test in the browser pane: lesson; every question type answered right and wrong; reload persistence; Öva favouring wrong answers; sync code copy → reset → paste; mobile preset (375px); dark mode; `file://` opening.
5. Report to the parent: ask about the test date and the herring dissection, and list anything you were unsure about. Then, **with their OK**, commit and push, and help them enable Pages (Settings → Pages → `main` / `/docs`).
