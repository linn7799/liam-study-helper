/* Studiehjälpen – hela appen. Vanilla JS utan beroenden och utan byggsteg.
   Datafilerna anropar registreraKatalog() och registreraAmne(). */
(function () {
  "use strict";

  // ---------- Texter (allt Liam ser) ----------
  const T = {
    namn: "Liam",
    laddar: "Laddar…",
    godMorgon: "God morgon", hej: "Hej", godKvall: "God kväll",
    startIntro: "Välj ett område. Läs först, öva sedan – appen kommer ihåg vad som är svårt.",
    ingaAmnen: "Det finns inga områden än.",
    kunde_inte_ladda: "Området kunde inte laddas.",
    hittadesInte: "Sidan finns inte.",
    tillStart: "Till startsidan",
    provIdag: "Prov idag!", provImorgon: "Prov imorgon",
    provOm: (n) => `Prov om ${n} dagar`, provVarit: "Provet har varit",
    kan: (p) => `Du kan ${p} % av området`,
    inteBorjat: "Inte påbörjat än",
    las: "Läs", ova: "Öva", provtraning: "Provträning",
    lasHint: "Läs igenom delområdena först.",
    delomraden: "Delområden",
    last: "Läst",
    kallor: "Källor",
    delomradeAv: (i, n) => `Delområde ${i} av ${n}`,
    nyckelbegrepp: "Nyckelbegrepp",
    vandHint: "Tryck på ett kort för att vända det.",
    ovaPaDetHar: "Öva på det här",
    foregaende: "← Föregående", nasta: "Nästa →", tillOversikt: "Till översikten",
    komIhag: "Kom ihåg!",
    avsluta: "Avsluta",
    fragaAv: (i, n) => `${i} / ${n}`,
    niva: ["", "Minnas", "Förstå", "Förklara"],
    sant: "Sant", falskt: "Falskt",
    valjAlla: "Välj alla som stämmer.",
    kontrollera: "Kontrollera",
    skrivSvar: "Skriv ditt svar…",
    valj: "Välj…",
    ordningHint: "Ångrar du dig? Tryck på ett valt steg för att ta bort det.",
    borjaOm: "Börja om",
    fritextHint: "Skriv med egna ord. Sen jämför du med ett modellsvar.",
    visaModellsvar: "Visa modellsvar",
    modellsvar: "Modellsvar",
    nyckelord: "Nyckelord:",
    hurGickDet: "Jämför med ditt svar. Hur gick det?",
    ratt: "Rätt", delvis: "Delvis", fel: "Fel",
    tangentTips: (n) => `Tips: tryck 1–${n} på tangentbordet.`,
    domRatt: ["Rätt!", "Snyggt!", "Helt rätt!", "Bra!"],
    domDelvis: "Delvis rätt",
    domFel: "Inte riktigt",
    rattSvar: "Rätt svar:",
    stavning: (s) => `Rätt! Men tänk på stavningen: ${s}`,
    nastaFraga: "Nästa", seResultat: "Se resultat",
    resultat: "Resultat",
    resRubrik: (p) => p >= 0.9 ? "Superbra jobbat!" : p >= 0.7 ? "Bra jobbat!" : p >= 0.5 ? "Bra kämpat!" : "Bra att du övar!",
    av: (a, n) => `${a} av ${n}`,
    procentRatt: (p) => `${p} % rätt`,
    perDelomrade: "Per delområde",
    lasOm: (d) => `Läs om **${d}** igen, och öva sedan en gång till.`,
    ovaMer: (d) => `Öva mer på **${d}** – där finns det mest att vinna.`,
    allaBra: "Alla delområden gick bra. Kör en provträning när du vill testa allt!",
    nastaSteg: "Nästa steg",
    ovaIgen: "Öva igen",
    tittaIgen: "Frågor att titta på igen",
    ingaFragor: "Det finns inga frågor här än.",
    framsteg: "Framsteg",
    framstegIntro: "Här ser du hur det går, och kan flytta dina framsteg mellan dator och mobil.",
    besvarade: "besvarade frågor", rattProcent: "rätt totalt", kanProcent: "kan området",
    pass: (n) => `${n} övningspass`,
    synk: "Synka mellan enheter",
    synkIntro: "Kopiera koden på den enhet som har framstegen och klistra in den på den andra. Inget försvinner – historiken slås ihop.",
    kopiera: "Kopiera synkkod",
    kopierad: "Koden är kopierad!",
    markeraKopiera: "Markera koden och kopiera den.",
    klistraIn: "Klistra in synkkod här…",
    slaIhop: "Slå ihop",
    ihopslaget: "Klart! Framstegen är ihopslagna.",
    felKod: "Koden ser inte rätt ut. Kopiera den igen.",
    nollstall: "Nollställ alla framsteg",
    nollstallIgen: "Tryck igen för att radera allt",
    nollstallt: "Alla framsteg är raderade.",
    nollstallInfo: "Raderar bara framstegen på den här enheten.",
  };

  const DAG = 86400000;
  const INTERVALL = { 1: 0, 2: 1, 3: 2, 4: 4, 5: 7 };
  const BOXVIKT = { 1: 8, 2: 5, 3: 3, 4: 1.5, 5: 1 };
  const NYLIGEN = 3 * 60000;
  const OVA_ANTAL = 10, PROV_ANTAL = 20;
  const KEY = "studiehjalp.v1";
  const TYPER = ["flerval", "santfalskt", "fyll-i", "para-ihop", "ordning", "fritext"];
  const BLOCK = ["text", "lista", "faktaruta", "tabell", "bild-svg"];

  // ---------- Registrering av data ----------
  let KATALOG = [];
  const AMNEN = {};
  const vantar = {};

  window.registreraKatalog = function (lista) {
    KATALOG = Array.isArray(lista) ? lista : [];
    if (startad) route();
  };
  window.registreraAmne = function (obj) {
    if (!obj || !obj.id) return;
    AMNEN[obj.id] = obj;
    if (vantar[obj.id]) vantar[obj.id].klar(obj);
  };

  function allaOmraden() {
    const ut = [];
    for (const a of KATALOG) for (const o of a.omraden || []) ut.push(o);
    return ut;
  }
  function hittaOmrade(id) { return allaOmraden().find((o) => o.id === id) || null; }

  function laddaAmne(id) {
    if (AMNEN[id]) return Promise.resolve(AMNEN[id]);
    if (vantar[id]) return vantar[id].p;
    const om = hittaOmrade(id);
    if (!om || !om.fil) return Promise.reject(new Error("okänt område " + id));
    const v = {};
    v.p = new Promise((klar, fel) => { v.klar = klar; v.fel = fel; });
    vantar[id] = v;
    const s = document.createElement("script");
    s.src = om.fil;
    s.onload = () => { if (AMNEN[id]) v.klar(AMNEN[id]); else { delete vantar[id]; v.fel(new Error("registrerades inte")); } };
    s.onerror = () => { delete vantar[id]; v.fel(new Error("kunde inte laddas")); };
    document.head.appendChild(s);
    return v.p;
  }

  // ---------- Lagring ----------
  let minne = null;
  function tomData() { return { v: 1, amnen: {} }; }
  function lasData() {
    try {
      const s = localStorage.getItem(KEY);
      if (s) { const d = JSON.parse(s); if (d && d.v === 1 && d.amnen) return d; }
    } catch (e) { /* t.ex. blockerad lagring */ }
    return minne || tomData();
  }
  function sparaData() {
    minne = DATA;
    try { localStorage.setItem(KEY, JSON.stringify(DATA)); } catch (e) { /* bara i minnet */ }
  }
  let DATA = lasData();
  function amneData(id) {
    const a = DATA.amnen[id] || (DATA.amnen[id] = {});
    a.q = a.q || {}; a.last = a.last || {}; a.s = a.s || [];
    return a;
  }

  function registreraSvar(amneId, fid, res) {
    const a = amneData(amneId);
    let r = a.q[fid];
    const forsta = !r || !r.n;
    if (!r) r = a.q[fid] = { b: 1, n: 0, r: 0, p: 0, t: 0, h: [] };
    r.n++;
    if (res === 2) { r.r++; r.b = forsta ? 3 : Math.min(5, r.b + 1); }
    else if (res === 1) r.p++;
    else r.b = 1;
    r.t = Date.now();
    r.h = (r.h || []).concat(res).slice(-10);
    sparaData();
  }

  // ---------- Adaptivitet ----------
  function dagarTill(datum) {
    if (!datum || !/^\d{4}-\d{2}-\d{2}$/.test(datum)) return null;
    const [y, m, d] = datum.split("-").map(Number);
    const idag = new Date(); idag.setHours(0, 0, 0, 0);
    return Math.round((new Date(y, m - 1, d) - idag) / DAG);
  }
  function behorskning(amne, fragor) {
    if (!fragor.length) return 0;
    const q = amneData(amne.id).q;
    let s = 0;
    for (const f of fragor) { const r = q[f.id]; if (r && r.n) s += (r.b - 1) / 4; }
    return s / fragor.length;
  }
  function fragorI(amne, delId) { return amne.fragor.filter((f) => f.delomrade === delId); }
  function arForfallen(amne, r, nu) {
    let iv = INTERVALL[r.b] || 0;
    const d = dagarTill(amne.provdatum);
    if (d != null && d >= 0) iv = Math.min(iv, Math.floor(d / 2));
    return nu - r.t >= iv * DAG;
  }
  function blanda(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function viktatUrval(items, vikt, k) {
    const pool = items.map((x) => ({ x, w: Math.max(vikt(x), 1e-4) }));
    const ut = [];
    while (ut.length < k && pool.length) {
      let r = Math.random() * pool.reduce((s, p) => s + p.w, 0);
      let i = 0;
      for (; i < pool.length - 1; i++) { r -= pool[i].w; if (r <= 0) break; }
      ut.push(pool.splice(i, 1)[0].x);
    }
    return ut;
  }
  function valjOvning(amne, delId) {
    const pool = delId ? fragorI(amne, delId) : amne.fragor.slice();
    const q = amneData(amne.id).q;
    const nu = Date.now();
    const mast = {};
    for (const d of amne.delomraden) mast[d.id] = behorskning(amne, fragorI(amne, d.id));
    const vikt = (f) => {
      const r = q[f.id];
      let w;
      if (!r || !r.n) w = 4;
      else {
        w = BOXVIKT[r.b] || 8;
        w *= arForfallen(amne, r, nu) ? 2 : 0.4;
        if (nu - r.t < NYLIGEN) w *= 0.1;
      }
      return w * (1.5 - (mast[f.delomrade] || 0));
    };
    const repetition = pool.filter((f) => q[f.id] && q[f.id].n && q[f.id].b >= 4);
    const nRep = Math.min(Math.round(OVA_ANTAL * 0.2), repetition.length);
    const valda = viktatUrval(repetition, vikt, nRep);
    const rest = pool.filter((f) => !valda.includes(f));
    return blanda(valda.concat(viktatUrval(rest, vikt, OVA_ANTAL - valda.length)));
  }
  function valjProv(amne) {
    const grupper = amne.delomraden.map((d) => blanda(fragorI(amne, d.id)));
    const ut = [];
    let kvar = true;
    while (ut.length < PROV_ANTAL && kvar) {
      kvar = false;
      for (const g of grupper) {
        if (g.length && ut.length < PROV_ANTAL) { ut.push(g.shift()); kvar = true; }
      }
    }
    return blanda(ut);
  }

  // ---------- Hjälpfunktioner för DOM ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  }
  function el(tag, props, ...barn) {
    const e = document.createElement(tag);
    if (props) for (const k in props) {
      const v = props[k];
      if (v == null || v === false) continue;
      if (k === "class") e.className = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "text") e.textContent = v;
      else if (k.slice(0, 2) === "on") e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? "" : v);
    }
    for (const c of barn.flat(Infinity)) {
      if (c == null || c === false) continue;
      e.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return e;
  }
  const lank = (href, text, cls) => el("a", { href, class: cls || "btn" }, text);
  const enc = encodeURIComponent;
  function procent(x) { return Math.round(x * 100); }
  function decimal(x) { return String(Math.round(x * 10) / 10).replace(".", ","); }
  function stapel(x) {
    const p = procent(x);
    return el("div", { class: "bar" + (p < 40 ? " low" : p < 75 ? " mid" : ""), role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(p) },
      el("span", { style: `width:${p}%` }));
  }
  function provPill(datum) {
    const d = dagarTill(datum);
    if (d == null) return null;
    if (d < 0) return el("span", { class: "pill done" }, T.provVarit);
    if (d === 0) return el("span", { class: "pill soon" }, T.provIdag);
    if (d === 1) return el("span", { class: "pill soon" }, T.provImorgon);
    return el("span", { class: "pill" + (d <= 7 ? " soon" : "") }, T.provOm(d));
  }
  function toast(text) {
    const t = el("div", { class: "toast", role: "status" }, text);
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  }
  const slump = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const finPekare = () => { try { return matchMedia("(pointer: fine)").matches; } catch (e) { return false; } };

  // ---------- Routing ----------
  const app = typeof document !== "undefined" ? document.getElementById("app") : null;
  let startad = false, vyNr = 0, tangent = null;

  function visa(...noder) { app.replaceChildren(...noder.flat().filter(Boolean)); }
  function felVy(text) { visa(el("h1", null, text), lank("#/", T.tillStart, "btn primary")); }

  function route() {
    const nr = ++vyNr;
    tangent = null;
    window.scrollTo(0, 0);
    const delar = (location.hash || "").replace(/^#\/?/, "").split("/").filter((x) => x !== "");
    const [vy, rawId, extra] = delar;
    const id = rawId ? decodeURIComponent(rawId) : null;
    const aktuell = () => nr === vyNr;
    const medAmne = (fn) => {
      visa(el("p", { class: "muted" }, T.laddar));
      laddaAmne(id).then((a) => { if (aktuell()) fn(a); }, () => { if (aktuell()) felVy(T.kunde_inte_ladda); });
    };
    if (!vy) return vyStart(aktuell);
    if (vy === "framsteg") return vyFramsteg(aktuell);
    if (!id) return felVy(T.hittadesInte);
    if (vy === "o") return medAmne(vyOmrade);
    if (vy === "las") return medAmne((a) => vyLas(a, parseInt(extra, 10) || 0));
    if (vy === "ova") return medAmne((a) => startaPass(a, "ova", extra ? decodeURIComponent(extra) : null));
    if (vy === "prov") return medAmne((a) => startaPass(a, "prov", null));
    felVy(T.hittadesInte);
  }

  // ---------- Startsidan ----------
  function vyStart(aktuell) {
    const tim = new Date().getHours();
    const halsning = tim < 10 ? T.godMorgon : tim < 18 ? T.hej : T.godKvall;
    const delar = [el("h1", null, `${halsning}, ${T.namn}!`), el("p", { class: "muted" }, T.startIntro)];
    if (!allaOmraden().length) delar.push(el("p", null, T.ingaAmnen));
    const ladda = [];
    for (const amne of KATALOG) {
      delar.push(el("div", { class: "subject-label" }, amne.namn));
      for (const om of amne.omraden || []) {
        const a = AMNEN[om.id];
        if (!a) ladda.push(om.id);
        const m = a ? behorskning(a, a.fragor) : 0;
        const besvarat = a && Object.keys(amneData(a.id).q).length > 0;
        delar.push(el("a", { class: "card", href: `#/o/${enc(om.id)}` },
          el("div", { class: "card-head" }, el("h2", null, om.titel), provPill(om.provdatum || (a && a.provdatum))),
          el("p", { class: "muted small" }, besvarat ? T.kan(procent(m)) : T.inteBorjat),
          stapel(m)));
      }
    }
    visa(delar);
    if (ladda.length) Promise.all(ladda.map((id) => laddaAmne(id).catch(() => null)))
      .then((r) => { if (aktuell() && r.some(Boolean)) vyStart(aktuell); });
  }

  // ---------- Områdesöversikt ----------
  function vyOmrade(amne) {
    const ad = amneData(amne.id);
    const m = behorskning(amne, amne.fragor);
    const forstaOlast = Math.max(0, amne.delomraden.findIndex((d) => !ad.last[d.id]));
    const kort = amne.delomraden.map((d, i) => {
      const dm = behorskning(amne, fragorI(amne, d.id));
      return el("div", { class: "card" },
        el("div", null,
          el("h3", null, d.titel, " ", ad.last[d.id] ? el("span", { class: "pill done" }, T.last) : null),
          el("p", { class: "muted small", style: "margin:0" }, d.sammanfattning || ""),
          el("p", { class: "small", style: "margin:4px 0 0" }, `${procent(dm)} %`)),
        el("div", { class: "sub-actions" },
          lank(`#/las/${enc(amne.id)}/${i}`, T.las),
          lank(`#/ova/${enc(amne.id)}/${enc(d.id)}`, T.ova)),
        stapel(dm));
    });
    visa(
      el("p", { class: "muted small", style: "margin-bottom:4px" }, amne.amne, " ", provPill(amne.provdatum)),
      el("h1", null, amne.titel),
      el("p", null, Object.keys(ad.q).length ? T.kan(procent(m)) : T.lasHint),
      stapel(m),
      el("div", { class: "btn-row" },
        lank(`#/las/${enc(amne.id)}/${forstaOlast}`, T.las),
        lank(`#/ova/${enc(amne.id)}`, T.ova, "btn primary"),
        lank(`#/prov/${enc(amne.id)}`, T.provtraning)),
      el("h2", { style: "margin-top:24px" }, T.delomraden),
      el("div", { class: "sub-list" }, kort),
      amne.kallor && amne.kallor.length ? el("p", { class: "muted small" }, `${T.kallor}: ${amne.kallor.join(" · ")}`) : null);
  }

  // ---------- Lektion ----------
  function block(b) {
    switch (b.typ) {
      case "text": return el("p", { html: md(b.text) });
      case "lista": return [b.rubrik ? el("h3", null, b.rubrik) : null, el("ul", null, (b.punkter || []).map((p) => el("li", { html: md(p) })))];
      case "faktaruta": return el("div", { class: "factbox" }, el("h3", null, b.rubrik || T.komIhag), el("p", { html: md(b.text) }));
      case "tabell": return el("div", { class: "table-wrap" }, el("table", null,
        el("thead", null, el("tr", null, (b.rubriker || []).map((r) => el("th", { html: md(r) })))),
        el("tbody", null, (b.rader || []).map((rad) => el("tr", null, rad.map((c) => el("td", { html: md(c) })))))));
      case "bild-svg": return el("figure", null, el("div", { html: b.svg }), b.bildtext ? el("figcaption", { html: md(b.bildtext) }) : null);
      default: return null;
    }
  }
  function flashkort(nb) {
    const k = el("div", { class: "flash", tabindex: "0", role: "button", "aria-pressed": "false" },
      el("div", { class: "flash-inner" },
        el("div", { class: "flash-face front" }, nb.ord),
        el("div", { class: "flash-face back", html: md(nb.forklaring) })));
    const vand = () => { k.classList.toggle("flipped"); k.setAttribute("aria-pressed", String(k.classList.contains("flipped"))); };
    k.addEventListener("click", vand);
    k.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); vand(); } });
    return k;
  }
  function vyLas(amne, i) {
    const n = amne.delomraden.length;
    i = Math.min(Math.max(i, 0), n - 1);
    const d = amne.delomraden[i];
    const ad = amneData(amne.id);
    ad.last[d.id] = Date.now();
    sparaData();
    const bas = `#/las/${enc(amne.id)}/`;
    visa(
      el("nav", { class: "progress-dots", "aria-label": T.delomraden },
        amne.delomraden.map((x, j) => el("a", { href: bas + j, title: x.titel, class: j === i ? "current" : ad.last[x.id] ? "read" : "", "aria-current": j === i ? "page" : null }, String(j + 1)))),
      el("article", { class: "lesson" },
        el("p", { class: "muted small", style: "margin-bottom:2px" }, el("a", { href: `#/o/${enc(amne.id)}` }, amne.titel), " · ", T.delomradeAv(i + 1, n)),
        el("h1", null, d.titel),
        d.sammanfattning ? el("p", { class: "lead", html: md(d.sammanfattning) }) : null,
        (d.innehall || []).map(block),
        d.nyckelbegrepp && d.nyckelbegrepp.length ? [
          el("h2", { style: "margin-top:24px" }, T.nyckelbegrepp),
          el("p", { class: "hint", style: "margin:0 0 10px" }, T.vandHint),
          d.nyckelbegrepp.map(flashkort)] : null),
      el("div", { class: "btn-row" }, lank(`#/ova/${enc(amne.id)}/${enc(d.id)}`, T.ovaPaDetHar, "btn primary block")),
      el("div", { class: "lesson-nav" },
        i > 0 ? lank(bas + (i - 1), T.foregaende) : lank(`#/o/${enc(amne.id)}`, T.tillOversikt),
        i < n - 1 ? lank(bas + (i + 1), T.nasta) : lank(`#/o/${enc(amne.id)}`, T.tillOversikt)));
  }

  // ---------- Quiz ----------
  let pass = null;

  function startaPass(amne, typ, delId) {
    if (delId && !amne.delomraden.some((d) => d.id === delId)) return felVy(T.hittadesInte);
    const fragor = typ === "prov" ? valjProv(amne) : valjOvning(amne, delId);
    if (!fragor.length) return visa(el("h1", null, T.ingaFragor), lank(`#/o/${enc(amne.id)}`, T.tillOversikt, "btn primary"));
    pass = { amne, typ, delId, fragor, i: 0, res: [] };
    visaFraga();
  }

  function normalisera(s) {
    return String(s).toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, "").replace(/\s+/g, " ").trim();
  }
  function utanAccent(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function levenshtein(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }
  function bedomFyllI(svar, godkanda) {
    const s = normalisera(svar);
    if (!s) return { res: 0 };
    for (const g of godkanda) if (normalisera(g) === s) return { res: 2 };
    for (const g of godkanda) {
      const n = normalisera(g);
      if (utanAccent(n) === utanAccent(s) || (n.length >= 5 && levenshtein(n, s) <= 1)) return { res: 2, not: T.stavning(g) };
    }
    return { res: 0 };
  }

  function visaFraga() {
    const { amne, fragor, i } = pass;
    const q = fragor[i];
    tangent = null;
    window.scrollTo(0, 0);
    const del = amne.delomraden.find((d) => d.id === q.delomrade);
    const feedback = el("div");
    let besvarad = false;
    const kropp = el("div");

    function klar(res, rattText, not) {
      if (besvarad) return;
      besvarad = true;
      kropp.querySelectorAll("button, input, select, textarea").forEach((x) => { x.disabled = true; });
      registreraSvar(amne.id, q.id, res);
      pass.res.push({ id: q.id, del: q.delomrade, res });
      const sist = pass.i === fragor.length - 1;
      let gatt = false;
      const vidare = () => { if (gatt) return; gatt = true; pass.i++; if (sist) visaResultat(); else visaFraga(); };
      const knapp = el("button", { class: "btn primary block", type: "button", onclick: vidare, style: "margin-top:12px" }, sist ? T.seResultat : T.nastaFraga);
      feedback.replaceChildren(el("div", { class: "feedback " + (res === 2 ? "good" : res === 1 ? "mid" : "bad") },
        el("div", { class: "verdict" }, not ? not : res === 2 ? slump(T.domRatt) : res === 1 ? T.domDelvis : T.domFel),
        res < 2 && rattText ? el("p", null, el("strong", null, T.rattSvar), " ", rattText) : null,
        q.forklaring ? el("p", { html: md(q.forklaring) }) : null), knapp);
      tangent = (e) => { if (e.key === "Enter" && !e.repeat) { e.preventDefault(); vidare(); } };
      knapp.focus({ preventScroll: true });
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    const renderare = { flerval: rFlerval, santfalskt: rSantFalskt, "fyll-i": rFyllI, "para-ihop": rParaIhop, ordning: rOrdning, fritext: rFritext }[q.typ];
    kropp.appendChild(renderare ? renderare(q, klar) : el("p", null, "?"));

    let fragaHtml = md(q.fraga);
    if (q.typ === "fyll-i") fragaHtml = fragaHtml.replace(/_{3,}/g, '<span class="blank" aria-label="lucka"></span>');
    visa(
      el("div", { class: "quiz-top" },
        el("a", { href: `#/o/${enc(amne.id)}`, class: "toplink" }, T.avsluta),
        el("div", { class: "quiz-progress" }, stapel(i / fragor.length)),
        el("span", { class: "small muted" }, T.fragaAv(i + 1, fragor.length))),
      el("p", { class: "muted small", style: "margin:12px 0 4px" }, (del ? del.titel : "") + " · " + (T.niva[q.niva] || "")),
      el("div", { class: "question", html: fragaHtml }),
      kropp, feedback);
    const forsta = kropp.querySelector("input, textarea");
    if (forsta && finPekare()) forsta.focus();
  }

  function rFlerval(q, klar) {
    const flera = Array.isArray(q.svar);
    const ratta = flera ? q.svar : [q.svar];
    const ordning = q.blanda === false ? q.alternativ.map((_, i) => i) : blanda(q.alternativ.map((_, i) => i));
    const valda = new Set();
    const rattText = ratta.map((i) => q.alternativ[i]).join(", ");
    const knappar = ordning.map((idx, pos) => el("button", { class: "option", type: "button", onclick: () => tryck(idx) },
      el("span", { class: "key" }, String(pos + 1)), el("span", { html: md(q.alternativ[idx]) })));
    const kontroll = flera ? el("button", { class: "btn primary block", type: "button", disabled: true, onclick: rätta, style: "margin-top:12px" }, T.kontrollera) : null;
    function markera() {
      ordning.forEach((idx, pos) => {
        const b = knappar[pos];
        if (ratta.includes(idx)) b.classList.add("correct");
        else if (valda.has(idx)) b.classList.add("wrong");
        b.classList.remove("selected");
      });
    }
    function rätta() {
      let r = 0, f = 0;
      valda.forEach((i) => { if (ratta.includes(i)) r++; else f++; });
      const res = r === ratta.length && f === 0 ? 2 : r * 2 >= ratta.length && f <= 1 ? 1 : 0;
      markera();
      klar(res, rattText);
    }
    function tryck(idx) {
      if (flera) {
        if (valda.has(idx)) valda.delete(idx); else valda.add(idx);
        knappar[ordning.indexOf(idx)].classList.toggle("selected", valda.has(idx));
        kontroll.disabled = valda.size === 0;
      } else {
        valda.add(idx);
        markera();
        klar(idx === q.svar ? 2 : 0, rattText);
      }
    }
    tangent = (e) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= ordning.length && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); tryck(ordning[n - 1]); }
      else if (flera && e.key === "Enter" && valda.size) { e.preventDefault(); rätta(); }
    };
    return el("div", null,
      flera ? el("p", { class: "hint" }, T.valjAlla) : null,
      el("div", { class: "options" }, knappar),
      kontroll,
      finPekare() ? el("p", { class: "hint", style: "margin:10px 0 0" }, T.tangentTips(ordning.length)) : null);
  }

  function rSantFalskt(q, klar) {
    const val = [[true, T.sant], [false, T.falskt]];
    const knappar = val.map(([v, text], pos) => el("button", { class: "option", type: "button", onclick: () => tryck(v) },
      el("span", { class: "key" }, String(pos + 1)), text));
    function tryck(v) {
      knappar.forEach((b, pos) => {
        if (val[pos][0] === q.svar) b.classList.add("correct");
        else if (val[pos][0] === v) b.classList.add("wrong");
      });
      klar(v === q.svar ? 2 : 0, q.svar ? T.sant : T.falskt);
    }
    tangent = (e) => {
      const k = e.key.toLowerCase();
      if (k === "1" || k === "s") { e.preventDefault(); tryck(true); }
      else if (k === "2" || k === "f") { e.preventDefault(); tryck(false); }
    };
    return el("div", { class: "options" }, knappar);
  }

  function rFyllI(q, klar) {
    const input = el("input", { type: "text", placeholder: T.skrivSvar, autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": T.skrivSvar });
    const kontroll = el("button", { class: "btn primary block", type: "button", onclick: rätta, style: "margin-top:12px" }, T.kontrollera);
    function rätta() {
      if (!input.value.trim()) { input.focus(); return; }
      const b = bedomFyllI(input.value, q.godkanda_svar);
      input.style.borderColor = b.res === 2 ? "var(--good)" : "var(--bad)";
      klar(b.res, q.godkanda_svar[0], b.not);
    }
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); rätta(); } });
    return el("div", null, input, kontroll);
  }

  function rParaIhop(q, klar) {
    const hoger = blanda(Array.from(new Set(q.par.map((p) => p[1]))));
    const rader = q.par.map(([v, h]) => {
      const sel = el("select", { "aria-label": v }, el("option", { value: "" }, T.valj), hoger.map((x) => el("option", { value: x }, x)));
      const rad = el("div", { class: "match-row" }, el("div", { class: "left", html: md(v) }), sel);
      return { rad, sel, ratt: h };
    });
    function rätta() {
      let r = 0;
      for (const x of rader) {
        const ok = x.sel.value === x.ratt;
        if (ok) r++;
        x.rad.classList.add(ok ? "correct" : "wrong");
        if (!ok) x.rad.appendChild(el("div", { class: "small", style: "grid-column:1/-1;color:var(--good)" }, "→ " + x.ratt));
      }
      klar(r === rader.length ? 2 : r * 2 >= rader.length ? 1 : 0, null);
    }
    return el("div", null, rader.map((x) => x.rad),
      el("button", { class: "btn primary block", type: "button", onclick: rätta, style: "margin-top:4px" }, T.kontrollera));
  }

  function rOrdning(q, klar) {
    const n = q.alternativ.length;
    let pool = blanda(q.alternativ.map((_, i) => i));
    if (n > 1 && pool.every((x, i) => x === i)) pool.reverse();
    const vald = [];
    const lista = el("div", { class: "order-picked" });
    const poolEl = el("div", { class: "order-pool" });
    const kontroll = el("button", { class: "btn primary block", type: "button", disabled: true, onclick: rätta }, T.kontrollera);
    let last = false;
    function rita() {
      lista.replaceChildren(...vald.map((idx, pos) => el("button", { class: "option selected", type: "button", disabled: last, onclick: () => { vald.splice(pos, 1); pool.push(idx); rita(); } },
        el("span", { class: "key" }, String(pos + 1)), el("span", { html: md(q.alternativ[idx]) }))));
      poolEl.replaceChildren(...pool.map((idx, pos) => el("button", { class: "option", type: "button", disabled: last, onclick: () => { pool.splice(pos, 1); vald.push(idx); rita(); } },
        el("span", { class: "key" }, "+"), el("span", { html: md(q.alternativ[idx]) }))));
      kontroll.disabled = last || pool.length > 0;
    }
    function rätta() {
      last = true;
      let r = 0;
      vald.forEach((idx, pos) => { if (idx === pos) r++; });
      rita();
      lista.querySelectorAll(".option").forEach((b, pos) => { b.classList.remove("selected"); b.classList.add(vald[pos] === pos ? "correct" : "wrong"); });
      const rattText = el("ol", { style: "margin:4px 0 0;padding-left:1.4em" }, q.alternativ.map((a) => el("li", { html: md(a) })));
      klar(r === n ? 2 : r * 2 >= n ? 1 : 0, rattText);
    }
    rita();
    return el("div", null, el("p", { class: "hint" }, T.ordningHint), lista, poolEl, kontroll);
  }

  function rFritext(q, klar) {
    const ta = el("textarea", { placeholder: T.skrivSvar, "aria-label": T.skrivSvar });
    const omrade = el("div");
    const visaKnapp = el("button", { class: "btn primary block", type: "button", style: "margin-top:12px", onclick: visaSvar }, T.visaModellsvar);
    function traff(kw) {
      const text = normalisera(ta.value);
      return kw.split("|").some((k) => { const n = normalisera(k); return n && (text.includes(n) || utanAccent(text).includes(utanAccent(n))); });
    }
    function visaSvar() {
      visaKnapp.remove();
      ta.readOnly = true;
      const kw = q.nyckelord || [];
      omrade.replaceChildren(
        el("div", { class: "model-answer" },
          el("strong", null, T.modellsvar), el("p", { html: md(q.modellsvar), style: "margin:4px 0 8px" }),
          kw.length ? el("div", { class: "small" }, T.nyckelord, " ", kw.map((k) => el("span", { class: "kw" + (traff(k) ? " hit" : "") }, k.split("|")[0]))) : null),
        el("p", { style: "margin:14px 0 0;font-weight:600" }, T.hurGickDet),
        el("div", { class: "selfgrade" },
          el("button", { class: "btn", type: "button", style: "color:var(--good)", onclick: () => klar(2) }, T.ratt),
          el("button", { class: "btn", type: "button", style: "color:var(--mid)", onclick: () => klar(1) }, T.delvis),
          el("button", { class: "btn", type: "button", style: "color:var(--bad)", onclick: () => klar(0) }, T.fel)));
    }
    return el("div", null, el("p", { class: "hint" }, T.fritextHint), ta, visaKnapp, omrade);
  }

  // ---------- Resultat ----------
  function visaResultat() {
    tangent = null;
    window.scrollTo(0, 0);
    const { amne, typ, delId, res, fragor } = pass;
    const poang = res.reduce((s, r) => s + (r.res === 2 ? 1 : r.res === 1 ? 0.5 : 0), 0);
    const andel = poang / res.length;
    const ad = amneData(amne.id);
    ad.s = ad.s.concat({ t: Date.now(), typ, n: res.length, poang, del: delId || undefined }).slice(-50);
    sparaData();

    const perDel = amne.delomraden.map((d) => {
      const rr = res.filter((r) => r.del === d.id);
      return { d, n: rr.length, p: rr.reduce((s, r) => s + (r.res === 2 ? 1 : r.res === 1 ? 0.5 : 0), 0) };
    }).filter((x) => x.n);
    const svagast = perDel.filter((x) => x.p / x.n < 0.8).sort((a, b) => a.p / a.n - b.p / b.n)[0];
    let forslag;
    if (svagast) {
      const idx = amne.delomraden.indexOf(svagast.d);
      forslag = svagast.p / svagast.n < 0.5
        ? [el("p", { html: md(T.lasOm(svagast.d.titel)) }), lank(`#/las/${enc(amne.id)}/${idx}`, `${T.las}: ${svagast.d.titel}`, "btn primary block")]
        : [el("p", { html: md(T.ovaMer(svagast.d.titel)) }), lank(`#/ova/${enc(amne.id)}/${enc(svagast.d.id)}`, `${T.ova}: ${svagast.d.titel}`, "btn primary block")];
    } else forslag = [el("p", null, T.allaBra)];

    const fel = res.filter((r) => r.res < 2).map((r) => fragor.find((f) => f.id === r.id));
    const igen = el("button", { class: "btn", type: "button", onclick: () => startaPass(amne, typ, delId) }, typ === "prov" ? T.provtraning : T.ovaIgen);
    visa(
      el("p", { class: "muted small", style: "margin-bottom:2px" }, amne.titel, " · ", T.resultat),
      el("h1", null, T.resRubrik(andel)),
      el("div", { class: "card" },
        el("div", { class: "score-big" }, T.av(decimal(poang), res.length)),
        el("p", { class: "muted", style: "margin:0" }, T.procentRatt(procent(andel)))),
      perDel.length > 1 ? el("div", { class: "card" }, el("h2", null, T.perDelomrade),
        perDel.map((x) => el("div", { class: "result-row" }, el("span", null, x.d.titel), el("span", { class: "small muted" }, `${decimal(x.p)}/${x.n}`), stapel(x.p / x.n)))) : null,
      el("div", { class: "card" }, el("h2", null, T.nastaSteg), forslag),
      fel.length ? el("div", { class: "card" }, el("h2", null, T.tittaIgen),
        el("ul", { style: "margin:0;padding-left:1.2em" }, fel.map((f) => el("li", { html: md(f.fraga.replace(/_{3,}/g, "___")) })))) : null,
      el("div", { class: "btn-row" }, igen, lank(`#/o/${enc(amne.id)}`, T.tillOversikt, "btn primary")));
  }

  // ---------- Framsteg och synk ----------
  function utf8TillB64(s) {
    const bytes = new TextEncoder().encode(s);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }
  function b64TillUtf8(b) {
    const bin = atob(b);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function synkkod() { return "SH1-" + utf8TillB64(JSON.stringify(DATA)); }
  function lasSynkkod(kod) {
    const k = String(kod).replace(/\s+/g, "");
    if (!k.startsWith("SH1-")) return null;
    try {
      const d = JSON.parse(b64TillUtf8(k.slice(4)));
      return d && d.v === 1 && d.amnen && typeof d.amnen === "object" ? d : null;
    } catch (e) { return null; }
  }
  function tvatta(r) {
    if (!r || typeof r !== "object") return null;
    const tal = (x) => (typeof x === "number" && isFinite(x) && x >= 0 ? x : 0);
    return {
      b: Math.min(5, Math.max(1, Math.round(tal(r.b)) || 1)), n: tal(r.n), r: tal(r.r), p: tal(r.p), t: tal(r.t),
      h: Array.isArray(r.h) ? r.h.filter((x) => x === 0 || x === 1 || x === 2).slice(-10) : [],
    };
  }
  function slaIhop(in_) {
    for (const id in in_.amnen) {
      const B = in_.amnen[id] || {};
      const A = amneData(id);
      for (const fid in B.q || {}) {
        const y = tvatta(B.q[fid]), x = A.q[fid];
        if (y && (!x || y.n > x.n || (y.n === x.n && y.t > x.t))) A.q[fid] = y;
      }
      for (const k in B.last || {}) if (typeof B.last[k] === "number") A.last[k] = Math.max(A.last[k] || 0, B.last[k]);
      const pass_ = {};
      for (const s of A.s.concat(Array.isArray(B.s) ? B.s : [])) if (s && typeof s.t === "number") pass_[s.t] = s;
      A.s = Object.values(pass_).sort((a, b) => a.t - b.t).slice(-50);
    }
    sparaData();
  }

  function vyFramsteg(aktuell) {
    const omraden = allaOmraden();
    visa(el("p", { class: "muted" }, T.laddar));
    Promise.all(omraden.map((o) => laddaAmne(o.id).catch(() => null))).then((amnen) => {
      if (!aktuell()) return;
      const kort = amnen.filter(Boolean).map((a) => {
        const ad = amneData(a.id);
        const rec = a.fragor.map((f) => ad.q[f.id]).filter((r) => r && r.n);
        const n = rec.reduce((s, r) => s + r.n, 0), r = rec.reduce((s, x) => s + x.r + x.p / 2, 0);
        return el("div", { class: "card" },
          el("div", { class: "card-head" }, el("h2", null, el("a", { href: `#/o/${enc(a.id)}` }, a.titel)), provPill(a.provdatum)),
          el("div", { class: "stat-grid" },
            el("div", { class: "stat" }, el("b", null, `${rec.length}/${a.fragor.length}`), el("span", null, T.besvarade)),
            el("div", { class: "stat" }, el("b", null, n ? `${procent(r / n)} %` : "–"), el("span", null, T.rattProcent)),
            el("div", { class: "stat" }, el("b", null, `${procent(behorskning(a, a.fragor))} %`), el("span", null, T.kanProcent))),
          a.delomraden.map((d) => {
            const m = behorskning(a, fragorI(a, d.id));
            return el("div", { class: "result-row" }, el("span", null, d.titel), el("span", { class: "small muted" }, `${procent(m)} %`), stapel(m));
          }),
          el("p", { class: "muted small", style: "margin:0" }, T.pass(ad.s.length)));
      });

      const kodRuta = el("textarea", { class: "code-box", readonly: true, hidden: true, "aria-label": T.kopiera });
      const kopiera = el("button", { class: "btn primary", type: "button", onclick: () => {
        kodRuta.value = synkkod();
        kodRuta.hidden = false;
        kodRuta.select();
        const lyckat = () => toast(T.kopierad);
        const manuellt = () => { try { if (document.execCommand("copy")) return lyckat(); } catch (e) { /* ignoreras */ } toast(T.markeraKopiera); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(kodRuta.value).then(lyckat, manuellt);
        else manuellt();
      } }, T.kopiera);
      const inRuta = el("textarea", { class: "code-box", placeholder: T.klistraIn, "aria-label": T.klistraIn });
      const ihop = el("button", { class: "btn", type: "button", onclick: () => {
        const d = lasSynkkod(inRuta.value);
        if (!d) return toast(T.felKod);
        slaIhop(d);
        toast(T.ihopslaget);
        vyFramsteg(aktuell);
      } }, T.slaIhop);

      let armerad = null;
      const nollstall = el("button", { class: "btn danger", type: "button", onclick: () => {
        if (!armerad) {
          nollstall.textContent = T.nollstallIgen;
          armerad = setTimeout(() => { armerad = null; nollstall.textContent = T.nollstall; }, 4000);
          return;
        }
        clearTimeout(armerad);
        DATA = tomData();
        sparaData();
        toast(T.nollstallt);
        vyFramsteg(aktuell);
      } }, T.nollstall);

      visa(
        el("h1", null, T.framsteg),
        el("p", { class: "muted" }, T.framstegIntro),
        kort.length ? kort : el("p", null, T.ingaAmnen),
        el("div", { class: "card" },
          el("h2", null, T.synk), el("p", { class: "small muted" }, T.synkIntro),
          el("div", { class: "btn-row" }, kopiera), kodRuta,
          el("div", { style: "margin-top:14px" }, inRuta),
          el("div", { class: "btn-row" }, ihop)),
        el("div", { class: "card" },
          el("div", { class: "btn-row", style: "margin-top:0" }, nollstall),
          el("p", { class: "small muted", style: "margin:0" }, T.nollstallInfo)));
    });
  }

  // ---------- Validering (används av tools/validate.mjs) ----------
  function validera(a) {
    const fel = [], varn = [];
    const F = (m) => fel.push(m), V = (m) => varn.push(m);
    const str = (x) => typeof x === "string" && x.trim().length > 0;
    if (!a || typeof a !== "object") return { fel: ["Ämnet är inte ett objekt"], varningar: [] };
    for (const k of ["id", "amne", "titel"]) if (!str(a[k])) F(`Saknar "${k}"`);
    if (a.id && !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(a.id)) F(`id "${a.id}" ska vara "<ämne>/<område>" med a–z, 0–9, -`);
    if (a.provdatum != null && dagarTill(a.provdatum) == null) F(`provdatum "${a.provdatum}" ska vara YYYY-MM-DD`);
    if (!Array.isArray(a.delomraden) || !a.delomraden.length) { F("Inga delområden"); return { fel, varningar: varn }; }
    if (!Array.isArray(a.fragor)) { F("Saknar fragor"); return { fel, varningar: varn }; }
    const delIds = new Set();
    a.delomraden.forEach((d, i) => {
      const var_ = `delområde ${d && d.id || "#" + i}`;
      if (!str(d.id)) F(`delområde #${i}: saknar id`);
      else if (delIds.has(d.id)) F(`${var_}: dubblett-id`);
      else delIds.add(d.id);
      if (!str(d.titel)) F(`${var_}: saknar titel`);
      if (!str(d.sammanfattning)) V(`${var_}: saknar sammanfattning`);
      if (!Array.isArray(d.innehall) || !d.innehall.length) F(`${var_}: saknar innehåll`);
      (d.innehall || []).forEach((b, j) => {
        const v = `${var_}, block ${j}`;
        if (!BLOCK.includes(b.typ)) return F(`${v}: okänd typ "${b.typ}"`);
        if (b.typ === "text" && !str(b.text)) F(`${v}: text saknas`);
        if (b.typ === "lista" && (!Array.isArray(b.punkter) || !b.punkter.length || !b.punkter.every(str))) F(`${v}: punkter saknas/tomma`);
        if (b.typ === "faktaruta" && !str(b.text)) F(`${v}: text saknas`);
        if (b.typ === "tabell") {
          if (!Array.isArray(b.rubriker) || !Array.isArray(b.rader) || !b.rader.length) F(`${v}: rubriker/rader saknas`);
          else b.rader.forEach((r, k) => { if (!Array.isArray(r) || r.length !== b.rubriker.length) F(`${v}: rad ${k} har fel antal celler`); });
        }
        if (b.typ === "bild-svg") {
          if (!str(b.svg) || !/^\s*<svg[\s>]/.test(b.svg)) F(`${v}: svg ska börja med <svg`);
          else if (/<script|\son\w+=/i.test(b.svg)) F(`${v}: svg får inte innehålla skript`);
          if (!str(b.bildtext)) V(`${v}: saknar bildtext`);
        }
      });
      (d.nyckelbegrepp || []).forEach((n, j) => { if (!str(n.ord) || !str(n.forklaring)) F(`${var_}: nyckelbegrepp ${j} saknar ord/forklaring`); });
    });
    const ids = new Set();
    const perDel = {};
    a.fragor.forEach((q, i) => {
      const v = `fråga ${q && q.id || "#" + i}`;
      if (!str(q.id)) F(`fråga #${i}: saknar id`);
      else if (ids.has(q.id)) F(`${v}: dubblett-id`);
      else ids.add(q.id);
      if (!delIds.has(q.delomrade)) F(`${v}: delomrade "${q.delomrade}" finns inte`);
      else perDel[q.delomrade] = (perDel[q.delomrade] || 0) + 1;
      if (!TYPER.includes(q.typ)) F(`${v}: okänd typ "${q.typ}"`);
      if (![1, 2, 3].includes(q.niva)) F(`${v}: niva ska vara 1, 2 eller 3`);
      if (!str(q.fraga)) F(`${v}: saknar fraga`);
      if (!str(q.forklaring)) F(`${v}: saknar forklaring`);
      const idxOk = (x) => Number.isInteger(x) && x >= 0 && Array.isArray(q.alternativ) && x < q.alternativ.length;
      switch (q.typ) {
        case "flerval":
          if (!Array.isArray(q.alternativ) || q.alternativ.length < 2 || !q.alternativ.every(str)) F(`${v}: behöver minst 2 alternativ`);
          else if (new Set(q.alternativ).size !== q.alternativ.length) F(`${v}: dubbla alternativ`);
          if (Array.isArray(q.svar)) {
            if (!q.svar.length || !q.svar.every(idxOk) || new Set(q.svar).size !== q.svar.length) F(`${v}: svar-listan har ogiltiga index`);
          } else if (!idxOk(q.svar)) F(`${v}: svar ${q.svar} är utanför alternativen`);
          break;
        case "santfalskt":
          if (typeof q.svar !== "boolean") F(`${v}: svar ska vara true/false`);
          break;
        case "fyll-i":
          if (!Array.isArray(q.godkanda_svar) || !q.godkanda_svar.length || !q.godkanda_svar.every(str)) F(`${v}: godkanda_svar saknas`);
          if (str(q.fraga) && !/_{3,}/.test(q.fraga)) V(`${v}: fraga saknar ___`);
          break;
        case "para-ihop":
          if (!Array.isArray(q.par) || q.par.length < 2 || !q.par.every((p) => Array.isArray(p) && p.length === 2 && p.every(str))) F(`${v}: par ska vara minst 2 [vänster, höger]`);
          else if (new Set(q.par.map((p) => p[0])).size !== q.par.length) F(`${v}: dubbla vänsterled i par`);
          break;
        case "ordning":
          if (!Array.isArray(q.alternativ) || q.alternativ.length < 3 || !q.alternativ.every(str)) F(`${v}: ordning behöver minst 3 steg`);
          else if (new Set(q.alternativ).size !== q.alternativ.length) F(`${v}: dubbla steg`);
          break;
        case "fritext":
          if (!str(q.modellsvar)) F(`${v}: saknar modellsvar`);
          if (!Array.isArray(q.nyckelord) || !q.nyckelord.length || !q.nyckelord.every(str)) F(`${v}: saknar nyckelord`);
          break;
      }
    });
    for (const d of delIds) {
      if (!perDel[d]) F(`delområde ${d}: har inga frågor`);
      else if (perDel[d] < 8) V(`delområde ${d}: bara ${perDel[d]} frågor (sikta på 8–12)`);
    }
    return { fel, varningar: varn };
  }

  window.Studiehjalp = { validera, katalog: () => KATALOG, amnen: AMNEN, T, normalisera, bedomFyllI };

  // ---------- Start ----------
  if (!app) return;
  document.addEventListener("keydown", (e) => { if (tangent && !(e.target && e.target.tagName === "TEXTAREA")) tangent(e); });
  function starta() {
    if (startad) return;
    startad = true;
    window.addEventListener("hashchange", route);
    route();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", starta);
  else starta();
})();
