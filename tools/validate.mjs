// Checks every topic file listed in docs/amnen/katalog.js.
// Usage: node tools/validate.mjs   (exit code 1 if there are errors)
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const docs = join(dirname(fileURLToPath(import.meta.url)), "..", "docs");
const ctx = { console, document: { getElementById: () => null }, localStorage: { getItem: () => null, setItem() {} } };
ctx.window = ctx;
vm.createContext(ctx);
const kor = (fil) => vm.runInContext(readFileSync(fil, "utf8"), ctx, { filename: fil });

kor(join(docs, "app.js"));
kor(join(docs, "amnen", "katalog.js"));
const { validera, katalog, amnen } = ctx.Studiehjalp;

let fel = 0, varningar = 0;
const sedda = new Set();
for (const amne of katalog()) {
  if (!amne.id || !amne.namn) { console.log(`✗ katalog: ämne saknar id/namn`); fel++; }
  for (const om of amne.omraden || []) {
    const rubrik = `${om.id} (${om.fil})`;
    const brister = [];
    if (sedda.has(om.id)) brister.push("dubblett i katalogen");
    sedda.add(om.id);
    if (!om.id?.startsWith(amne.id + "/")) brister.push(`id ska börja med "${amne.id}/"`);
    if (!om.titel) brister.push("katalogen saknar titel");
    const fil = join(docs, om.fil || "");
    if (!om.fil || !existsSync(fil)) brister.push("filen finns inte");
    else {
      try { kor(fil); } catch (e) { brister.push("JavaScript-fel: " + e.message); }
      const a = amnen[om.id];
      if (!a) brister.push("filen registrerade inte ett ämne med detta id");
      else {
        const r = validera(a);
        brister.push(...r.fel);
        if (om.provdatum && a.provdatum && om.provdatum !== a.provdatum) brister.push(`provdatum skiljer: katalog ${om.provdatum}, fil ${a.provdatum}`);
        if (om.titel && a.titel !== om.titel) r.varningar.push(`titel skiljer: katalog "${om.titel}", fil "${a.titel}"`);
        const typer = {};
        a.fragor.forEach((q) => { typer[q.typ] = (typer[q.typ] || 0) + 1; });
        console.log(`\n${rubrik}: ${a.delomraden.length} delområden, ${a.fragor.length} frågor  ${JSON.stringify(typer)}`);
        r.varningar.forEach((v) => console.log(`  ! ${v}`));
        varningar += r.varningar.length;
      }
    }
    if (!amnen[om.id]) console.log(`\n${rubrik}`);
    brister.forEach((b) => console.log(`  ✗ ${b}`));
    fel += brister.length;
  }
}
console.log(`\n${fel ? "✗" : "✓"} ${fel} fel, ${varningar} varningar`);
process.exit(fel ? 1 : 0);
