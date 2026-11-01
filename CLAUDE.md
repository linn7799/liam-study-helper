# CLAUDE.md – Studiehjälpen

Study helper for **Liam**, 13, year 7 (årskurs 7) at a Montessori school in Sweden that follows **Lgr22**.
The parent adds teacher material and asks Claude to build study content for an upcoming end-of-unit test.

## Hard rules

- **Everything Liam sees is in Swedish**: lessons, questions, explanations, UI. Talk to the parent in English unless they write Swedish.
- **The teacher's material is the primary source.** It decides the scope, the terms (use the teacher's words) and the emphasis. Add general knowledge only where it helps understanding, at åk 7 level, and never contradict the material. If general knowledge seems to conflict with the material, tell the parent instead of silently "correcting" it.
- **Never commit or publish anything from `kallmaterial/`** (it is gitignored). Rewrite in your own words. Don't copy long passages or images from handouts or textbooks.
- **Never change a question `id` once published.** Progress is keyed on it. To retire a question, delete it. To change its meaning substantially, give it a new id.
- Age-appropriate tone: friendly, concrete, short sentences, Swedish examples (svenska arter, natur, vardag).

## Workflow: "bygg området <ämne>/<område>"

1. Read everything in `kallmaterial/<ämne>/<område>/` (use the pdf skill for PDFs; read photos as images). List the concepts, terms and anything the teacher marks as important ("viktigt", "kom ihåg", learning goals / "mål", glossaries).
2. Split the content into 4–8 **delområden** that follow the teacher's structure.
3. Write `docs/amnen/<ämne>/<område>.js` (schema below). Aim for 8–12 questions per delområde, mixing all question types and three difficulty levels (1 = recall a fact, 2 = understand/compare, 3 = explain/apply). The test usually has "förklara"-questions, so include `fritext` questions with `nyckelord`.
4. Add or update the entry in `docs/amnen/katalog.js` (with `provdatum` if known).
5. Validate: run `node tools/validate.mjs` and fix every error (warnings are worth a look too).
6. Test the topic in the browser: start the `studiehjalp` server (`.claude/launch.json`), open `/docs/`, read a lesson, run a quiz.
7. Tell the parent what was built, which delområden there are, and anything in the material you were unsure about.

## Workflow: sync code from the parent ("mer övning")

A sync code is `SH1-` + base64 of UTF-8 JSON: `{v:1, amnen:{ "<ämne>/<område>": { q:{ <frageId>: {b,n,r,p,t,h} }, last:{...}, s:[...] } }}`.
`b` = Leitner box 1–5, `n` = attempts, `r` = correct, `p` = partial, `h` = recent results (0 wrong, 1 partial, 2 right).
Decode it with PowerShell (`[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String(...))`), find the weak delområden and questions, then add clearer lesson text, extra `faktaruta`s and **new** questions on them (keep existing ids).

## Topic file schema

```js
registreraAmne({
  id: "biologi/ryggradslosa-djur",       // = "<ämne>/<område>", same as in katalog.js
  amne: "Biologi",
  titel: "Ryggradslösa djur",
  provdatum: "2026-11-12",               // optional, YYYY-MM-DD
  kallor: ["Lärarens genomgång v.44", "Allmän kunskap (Lgr22 åk 7–9)"],
  delomraden: [{
    id: "leddjur", titel: "Leddjur", sammanfattning: "En mening.",
    innehall: [
      { typ: "text", text: "Stycke. **fet** och *kursiv* stöds." },
      { typ: "lista", rubrik: "valfri", punkter: ["...", "..."] },
      { typ: "faktaruta", rubrik: "Kom ihåg!", text: "..." },
      { typ: "tabell", rubriker: ["A", "B"], rader: [["..", ".."]] },
      { typ: "bild-svg", svg: "<svg viewBox=...>...</svg>", bildtext: "..." }   // use currentColor / CSS vars
    ],
    nyckelbegrepp: [{ ord: "Exoskelett", forklaring: "..." }]
  }],
  fragor: [
    { id: "led-01", delomrade: "leddjur", typ: "flerval", niva: 1, fraga: "...",
      alternativ: ["A", "B", "C", "D"], svar: 1, forklaring: "..." },     // svar: index, or array of indexes = "välj alla som stämmer"
    { id: "led-02", typ: "santfalskt", svar: true, ... },
    { id: "led-03", typ: "fyll-i", fraga: "Insekter har ___ ben.", godkanda_svar: ["sex", "6"], ... },
    { id: "led-04", typ: "para-ihop", fraga: "...", par: [["Insekt", "6 ben"], ["Spindel", "8 ben"]], ... },
    { id: "led-05", typ: "ordning", fraga: "...", alternativ: ["första", "andra", "tredje"], ... },   // correct order
    { id: "led-06", typ: "fritext", fraga: "Förklara ...", modellsvar: "...", nyckelord: ["skal", "ömsa"], ... }
  ]
})
```

Every question needs `id`, `delomrade`, `typ`, `niva`, `fraga`, `forklaring` (shown after answering, and it should teach something, not just repeat the answer).
A `nyckelord` entry can list alternatives with `|` (`"pollinera|pollinering"`); the chip shows the first one. `ordning` needs at least 3 steps. In `para-ihop`, several left items may share the same right answer.

## Code

- `docs/app.js`: the whole app (vanilla JS, hash routing, Leitner adaptivity, sync). UI strings are in the `T` object.
- Keep it dependency-free with no build step, so it works on GitHub Pages, as a claude.ai artifact, and via `file://`.
- Local server: `python -m http.server 8377` from the repo root (the `studiehjalp` entry in `.claude/launch.json`); the app is at `/docs/`.
- Validator: `node tools/validate.mjs` loads `app.js` in a Node `vm` with stubbed DOM and runs `Studiehjalp.validera()` on every topic in the catalogue.
