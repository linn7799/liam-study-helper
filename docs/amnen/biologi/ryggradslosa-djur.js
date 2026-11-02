registreraAmne({
  id: "biologi/ryggradslosa-djur",
  amne: "Biologi",
  titel: "Ryggradslösa djur",
  kallor: [
    "Lärarens genomgångar 1 okt och 9 okt (tavlan)",
    "Lärarens bildspel: Urdjur till maskar, Leddjur",
    "Dissektion av bläckfisk och sill",
    "Frågor till biologiboken s. 66–75 (Liber)",
    "Allmän kunskap (Lgr22 åk 7–9)"
  ],
  delomraden: [
    // ------------------------------------------------------------------
    {
      id: "grupper-urdjur",
      titel: "Sju grupper och urdjur",
      sammanfattning: "Vad ryggradslösa djur är, vilka sju grupper vi läser om – och de minsta av alla: urdjuren.",
      innehall: [
        { typ: "text", text: "Ett **ryggradslöst djur** är ett djur som *inte* har någon ryggrad. Människor, fiskar och fåglar har ryggrad – de är **ryggradsdjur**. Men de allra flesta djur på jorden saknar ryggrad: maskar, sniglar, maneter, spindlar och insekter till exempel." },
        { typ: "lista", rubrik: "De sju grupperna vi läser om", punkter: [
          "**Urdjur** – bara en cell",
          "**Svampdjur** – sitter fast och filtrerar vatten",
          "**Nässeldjur** – har nässelceller med gift (maneter, koraller)",
          "**Blötdjur** – sniglar, snäckor, musslor, bläckfiskar",
          "**Tagghudingar** – sjöstjärnor, sjöborrar m.fl.",
          "**Maskar** – rundmaskar, plattmaskar, ringmaskar",
          "**Leddjur** – insekter, spindeldjur, kräftdjur, mångfotingar"
        ] },
        { typ: "faktaruta", rubrik: "Minnesknep", text: "**U**rsäkta **S**am, **N**u **B**lir **T**orsdagar **M**ycket **L**ånga = **U**rdjur, **S**vampdjur, **N**ässeldjur, **B**lötdjur, **T**agghudingar, **M**askar, **L**eddjur." },
        { typ: "text", text: "**Urdjur** är uppbyggda av **en enda cell**. Den cellen måste klara *allt*: äta, röra sig, göra sig av med avfall och föröka sig. Urdjur är mycket små, så man behöver mikroskop för att se dem. De lever i **fuktiga miljöer**, till exempel i vatten, i blöt jord eller inuti andra djur. Urdjur har funnits på jorden **mycket länge**." },
        { typ: "tabell", rubriker: ["Urdjur", "Så ser det ut och rör sig"], rader: [
          ["**Amöba**", "Har ingen fast form. Den flyter fram genom att ändra form."],
          ["**Toffeldjur**", "Ser ut som en toffel. Har **flimmerhår** på utsidan av cellmembranet som den paddlar fram med."]
        ] },
        { typ: "text", text: "Vissa urdjur ingår i **djurplankton** – pyttesmå djur som svävar i vattnet. Djurplankton är **viktig mat** för fiskar och andra större djur. Utan plankton skulle många näringskedjor i havet och i sjöar inte fungera." },
        { typ: "faktaruta", rubrik: "Farliga urdjur", text: "Sjukdomen **malaria** orsakas av ett litet urdjur. Det sprids till människor av **malariamyggor** när de sticker. Varje år dör **mer än 600 000** människor av malaria." }
      ],
      nyckelbegrepp: [
        { ord: "Ryggradslöst djur", forklaring: "Ett djur som saknar ryggrad." },
        { ord: "Urdjur", forklaring: "Mycket små djur som bara består av en enda cell." },
        { ord: "Flimmerhår", forklaring: "Små hår på utsidan av toffeldjurets cell som det rör sig med." },
        { ord: "Djurplankton", forklaring: "Pyttesmå djur som svävar i vattnet och är mat åt fiskar." },
        { ord: "Malaria", forklaring: "En farlig sjukdom som orsakas av ett urdjur och sprids av myggor." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "svamp-nassel",
      titel: "Svampdjur och nässeldjur",
      sammanfattning: "Svampdjur som silar vattnet, och nässeldjur som bränns med giftiga nässelceller.",
      innehall: [
        { typ: "text", text: "**Svampdjur** lever **fastsittande i havet**. De är **ihåliga** och har massor av små **hålrum**. Vattnet strömmar in genom hålen och svampdjuret **filtrerar** (silar) vattnet. Då fastnar **plankton**, som är svampdjurets mat. Det finns ungefär 5 000–6 000 arter av svampdjur." },
        { typ: "faktaruta", rubrik: "Kom ihåg!", text: "Svampdjur: sitter fast – ihåliga – filtrerar vatten – äter plankton." },
        { typ: "text", text: "**Nässeldjur** har alla något speciellt: **nässelceller**. Det är celler med **gift**. När nässeldjuret \"bränns\" sprutar nässelcellerna ut gift. De vanligaste nässeldjuren är **maneter** och **koraller**. Även **havsanemoner** är nässeldjur." },
        { typ: "lista", rubrik: "Så fungerar en nässelcell", punkter: [
          "Inne i cellen ligger en hoprullad tråd med en spets – som en **laddad harpun**.",
          "Utanpå sitter en liten **avtryckare**.",
          "När ett byte (eller din hud!) **rör vid** avtryckaren skjuts harpunen ut.",
          "Spetsen tränger in och **sprutar in gift**."
        ] },
        { typ: "bild-svg", svg: "<svg viewBox=\"0 0 320 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,sans-serif\" font-size=\"12\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M40 30 Q80 0 120 30 Q122 36 116 38 L44 38 Q38 36 40 30Z\"/><path d=\"M50 38 q2 20 -4 40 M66 38 q-3 22 2 44 M82 38 q2 22 -3 46 M98 38 q-2 20 3 42 M112 38 q3 18 -2 36\"/><path d=\"M220 112 q-12 -10 -10 -26 q4 -20 -10 -32 q-8 -8 -4 -18 M220 112 q4 -18 22 -24 q14 -6 14 -22 M220 112 q10 -10 26 -6 q14 4 22 -6 M220 112 q-14 -4 -24 4 q-10 8 -22 2\"/><path d=\"M206 114 h28 v20 h-28z\"/><path d=\"M190 140 h60\"/></g><text x=\"80\" y=\"104\" text-anchor=\"middle\" fill=\"currentColor\">Medusa</text><text x=\"80\" y=\"120\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\".75\">simmar fritt</text><text x=\"230\" y=\"18\" text-anchor=\"middle\" fill=\"currentColor\">Polyp</text><text x=\"230\" y=\"34\" text-anchor=\"middle\" fill=\"currentColor\" opacity=\".75\">sitter fast</text></svg>", bildtext: "Nässeldjur finns i två former: medusa (frisimmande) och polyp (fastsittande)." },
        { typ: "tabell", rubriker: ["Form", "Hur lever den?", "Exempel"], rader: [
          ["**Medusa**", "Frisimmande – flyter och simmar i vattnet", "Manet"],
          ["**Polyp**", "Fastsittande på botten", "Korall, havsanemon"]
        ] },
        { typ: "text", text: "**Maneter** lever *både* som polyp och som medusa under sitt liv. En liten larv sätter sig fast och blir en **polyp**. Polypen delar av sig i små skivor som simmar iväg och växer till **medusor** – de maneter vi ser på sommaren." },
        { typ: "text", text: "**Koraller** är små polyper som lever tillsammans i stora **kolonier**. De bygger hårda skelett av kalk, och tillsammans kan de bilda enorma **korallrev**." }
      ],
      nyckelbegrepp: [
        { ord: "Filtrera", forklaring: "Sila vatten för att få ut mat, som svampdjuret gör med plankton." },
        { ord: "Nässelcell", forklaring: "Cell med gift som skjuts ut som en harpun när något rör vid den." },
        { ord: "Medusa", forklaring: "Den frisimmande formen hos nässeldjur, t.ex. en manet." },
        { ord: "Polyp", forklaring: "Den fastsittande formen hos nässeldjur, t.ex. en korall." },
        { ord: "Korallrev", forklaring: "Stora rev som byggs av kolonier av korallpolyper." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "blotdjur",
      titel: "Blötdjur",
      sammanfattning: "Sniglar, snäckor, musslor och bläckfiskar – mjuka djur som ofta har skal.",
      innehall: [
        { typ: "text", text: "**Blötdjur** har en mjuk kropp. **Vissa lever i vatten och vissa lever på land.** Några har ett **skyddande skal på utsidan**, till exempel snäckor och musslor. Nästan alla blötdjur har en **mantel** (ett hudveck som täcker kroppen) och en muskulös **fot**." },
        { typ: "tabell", rubriker: ["Grupp", "Kännetecken", "Svenska exempel"], rader: [
          ["**Snäckor**", "Spiralformat skal, rasptunga, fot och ögon. Vissa arter lever på land.", "Vinbergssnäcka, strandsnäcka"],
          ["**Sniglar**", "Som snäckor men **saknar yttre skal**. Har rasptunga, fot och ögon. Vissa lever i vatten, andra på land.", "Mördarsnigel, svart skogssnigel"],
          ["**Musslor**", "**Skal i två delar** (de enda med det). Har mantel, gälar och fot.", "Blåmussla, ostron"],
          ["**Bläckfiskar**", "**Inre skal**, två välutvecklade ögon, **8 eller 10 armar**. Kan bli mycket stora.", "Kalmar, åttaarmad bläckfisk"]
        ] },
        { typ: "faktaruta", rubrik: "Kom ihåg!", text: "I boken räknas sniglar in bland snäckorna (en snigel är som en snäcka utan yttre skal). Därför står det ibland **tre** grupper: snäckor, musslor och bläckfiskar." },
        { typ: "text", text: "**Rasptungan** är en tunga full av små tänder, som ett rivjärn. Snäckor och sniglar skrapar loss mat med den, till exempel alger eller blad. Även bläckfiskar har en rasptunga i munnen." },
        { typ: "text", text: "**Musslor** saknar huvud. De ligger still och **filtrerar vatten** genom sina gälar och silar ut små matbitar – lite som svampdjuren. Gälarna tar också upp syre ur vattnet." }
      ],
      nyckelbegrepp: [
        { ord: "Mantel", forklaring: "Ett hudveck som täcker blötdjurets kropp. Hos snäckor och musslor bildar den skalet." },
        { ord: "Fot", forklaring: "En stark muskel som blötdjuret kryper eller gräver med." },
        { ord: "Rasptunga", forklaring: "En tunga med små tänder som skrapar loss mat." },
        { ord: "Gälar", forklaring: "Organ som tar upp syre ur vattnet." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "blackfisk",
      titel: "Dissektion: bläckfisk",
      sammanfattning: "Vad vi hittade när vi dissekerade en tioarmad bläckfisk – och hur den skiljer sig från sillen.",
      innehall: [
        { typ: "text", text: "Bläckfisken vi dissekerade var en **tioarmad bläckfisk** (kalmar). Den hör till: ryggradslösa djur → **blötdjur** → **bläckfiskar**." },
        { typ: "lista", rubrik: "Utsidan", punkter: [
          "**Armar** (8 st) med **sugkoppar**. Sugkopparna har små \"taggar\" som håller fast bytet.",
          "**Tentakler** – två extra långa armar som fångar bytet.",
          "**Mantel** – den stora delen av kroppen som täcker de inre organen.",
          "**Fenor** – längst bak på manteln, hjälper till vid simning.",
          "**Tratt** – ett rör som vattnet sprutas ut genom. Då åker bläckfisken framåt som en raket (**jetdrift**).",
          "**Kromatoforer** – små prickar på huden. Det är **färgceller**, så att bläckfisken kan byta färg och smälta in."
        ] },
        { typ: "faktaruta", rubrik: "Ögat", text: "Bläckfiskens ögon är **mycket välutvecklade** för att vara ett ryggradslöst djur och **påminner om våra egna**. Linsen har en lite annan form än vår runda. Bläckfisken kan skilja på ljus och mörker, och på blått och gult, och ser kompletta bilder." },
        { typ: "text", text: "Mitt bland armarna sitter munnen med en **näbb** som liknar en **papegojnäbb**. Den är mycket kraftig och biter av bitar från bytet. Inne i munnen sitter **rasptungan** – den har alla blötdjur." },
        { typ: "lista", rubrik: "Insidan", punkter: [
          "**Bläcksäck** (bläckkörtel) – vid fara sprutar bläckfisken ut bläck. Fienden ser inget och bläckfisken hinner fly.",
          "**Gälar** – tar upp syre ur vattnet.",
          "**Hjärta** och **magsäck**.",
          "**\"Skalet\"** (pennan) – ett inre skal, lika långt som manteln. Det håller kroppen rak när bläckfisken simmar fort, ungefär som ett skelett.",
          "**Äggstock** (hos honan) eller **gonad/testikel** (hos hanen)."
        ] },
        { typ: "tabell", rubriker: ["", "Bläckfisk", "Sill"], rader: [
          ["Djurgrupp", "Ryggradslös (blötdjur)", "**Ryggradsdjur** (fisk)"],
          ["Stöd för kroppen", "Inre \"skal\" (penna)", "**Ryggrad** och skelett"],
          ["Andas med", "Gälar", "Gälar"],
          ["Simmar med", "Tratt (jetdrift) och fenor", "Fenor och stjärtfena"],
          ["Ögon", "Mycket välutvecklade", "Ögon utan ögonlock"],
          ["Särskilt", "Bläcksäck, näbb, rasptunga, färgceller", "Simblåsa, sidolinje som känner rörelser i vattnet"]
        ] },
        { typ: "faktaruta", rubrik: "Tänk som en forskare", text: "Bläckfisken och sillen lever båda i havet och har löst samma problem på olika sätt: båda andas med **gälar**, men bläckfisken håller kroppen rak med ett **inre skal** och sillen med en **ryggrad**." }
      ],
      nyckelbegrepp: [
        { ord: "Tratt", forklaring: "Rör som bläckfisken sprutar ut vatten genom för att ta sig fram (jetdrift)." },
        { ord: "Kromatoforer", forklaring: "Färgceller i huden som gör att bläckfisken kan byta färg." },
        { ord: "Bläcksäck", forklaring: "Organ med bläck som sprutas ut vid fara så att fienden inte ser." },
        { ord: "Penna (inre skal)", forklaring: "Bläckfiskens inre \"skal\" som håller kroppen rak." },
        { ord: "Näbb", forklaring: "Bläckfiskens hårda mun som liknar en papegojnäbb." },
        { ord: "Dissektion", forklaring: "Att försiktigt skära upp ett djur för att studera hur det ser ut inuti." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "tagghudingar",
      titel: "Tagghudingar",
      sammanfattning: "Sjöstjärnor, sjöborrar och sjögurkor – taggiga havsdjur som går på sugfötter.",
      innehall: [
        { typ: "text", text: "**Tagghudingar** lever **i havet** och har ett **taggigt skelett**, ytterst i kroppen. De **förflyttar sig med sugfötter** eller genom att **röra taggarna**." },
        { typ: "lista", rubrik: "Grupper av tagghudingar", punkter: [
          "**Sjöstjärnor**",
          "**Ormstjärnor** – smala, ormliknande armar",
          "**Sjöborrar** – runda och fulla av långa taggar",
          "**Sjögurkor** – avlånga, ser ut som en gurka",
          "**Sjöliljor**"
        ] },
        { typ: "lista", rubrik: "Så är en sjöstjärna uppbyggd", punkter: [
          "Har oftast **fem armar**.",
          "Längst ut på varje arm sitter ett litet **\"öga\"** som känner av ljus.",
          "På undersidan finns massor av **sugfötter** som den tar sig fram med."
        ] },
        { typ: "faktaruta", rubrik: "Visste du?", text: "Sjöstjärnan kan öppna en mussla genom att dra i skalhalvorna med sina sugfötter, länge och envist. Vanlig sjöstjärna finns på Sveriges västkust." }
      ],
      nyckelbegrepp: [
        { ord: "Tagghuding", forklaring: "Havsdjur med taggigt skelett som rör sig med sugfötter, t.ex. sjöstjärna." },
        { ord: "Sugfötter", forklaring: "Små fötter som suger fast och som tagghudingar går med." },
        { ord: "Sjöborre", forklaring: "Rund tagghuding täckt av långa taggar." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "maskar",
      titel: "Maskar",
      sammanfattning: "Rundmaskar, plattmaskar och ringmaskar – från nyttiga daggmaskar till parasiter.",
      innehall: [
        { typ: "text", text: "Maskar **andas genom huden**. Därför måste de leva i **fuktiga miljöer** – torkar huden ut kan de inte andas. Maskar delas in i **tre grupper**." },
        { typ: "tabell", rubriker: ["Grupp", "Exempel"], rader: [
          ["**Rundmaskar**", "**Spolmask** (parasit)"],
          ["**Plattmaskar**", "**Binnikemask** (parasit)"],
          ["**Ringmaskar**", "**Daggmask** och **iglar**"]
        ] },
        { typ: "faktaruta", rubrik: "Parasit", text: "En **parasit** är en organism som lever **på eller i en annan organism** och **skadar** den." },
        { typ: "lista", rubrik: "Binnikemasken – en plattmask", punkter: [
          "Lever i **tarmen** hos människor och djur.",
          "**Biter sig fast** i tarmväggen.",
          "Suger upp näring **direkt genom huden** – den behöver ingen egen mun och tarm.",
          "Bitar av masken som är fulla av **ägg** lossnar och kommer ut när man bajsar.",
          "Den som drabbas får äta **medicin** så att masken dör."
        ] },
        { typ: "text", text: "**Daggmasken** är en **ringmask** – kroppen är uppdelad i många ringar (segment). Den äter **döda växtdelar och jord**. Daggmaskens bajs blir **ny, näringsrik jord**. Den gräver **gångar** som gör marken **porös** (luftig och \"fluffig\"), så att luft och vatten kommer ner till växternas rötter. **Mycket viktigt** för naturen och för odlingar!" },
        { typ: "faktaruta", rubrik: "Hona eller hane?", text: "Det går inte att se om en daggmask är hona eller hane – den är **båda**! Daggmasken är **tvåkönad** (**hermafrodit**). När två daggmaskar parar sig lägger de sig bredvid varandra och byter spermier, och sedan kan båda lägga ägg." }
      ],
      nyckelbegrepp: [
        { ord: "Parasit", forklaring: "En organism som lever på eller i en annan organism och skadar den." },
        { ord: "Hermafrodit (tvåkönad)", forklaring: "Ett djur som är både hona och hane, som daggmasken." },
        { ord: "Ringmask", forklaring: "Mask med kropp i ringar, t.ex. daggmask och igel." },
        { ord: "Plattmask", forklaring: "Platt mask, t.ex. binnikemasken." },
        { ord: "Rundmask", forklaring: "Rund, smal mask, t.ex. spolmasken." },
        { ord: "Porös", forklaring: "Luftig, med många små hål – som jorden blir av daggmaskarnas gångar." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "leddjur",
      titel: "Leddjur",
      sammanfattning: "Den största djurgruppen: insekter, spindeldjur, kräftdjur och mångfotingar.",
      innehall: [
        { typ: "text", text: "**Leddjur** är **den största gruppen** av alla djur. Det finns väldigt många olika sorters leddjur." },
        { typ: "lista", rubrik: "Typiskt för leddjur", punkter: [
          "**Ledade ben** – benen har leder så att de kan röra sig.",
          "**Yttre skal** – ett hårt skal utanpå kroppen som kallas **exoskelett**.",
          "De **lägger ägg** – ofta väldigt många.",
          "De är **mat till många andra djur**."
        ] },
        { typ: "faktaruta", rubrik: "Ömsa skal", text: "Exoskelettet växer inte med djuret. När leddjuret blir större måste det **ömsa** skal: det kryper ur det gamla skalet och bildar ett nytt, större." },
        { typ: "tabell", rubriker: ["Grupp", "Antal ben", "Mer att veta"], rader: [
          ["**Insekter**", "**6 ben**", "**Tredelad kropp**: huvud, mellankropp, bakkropp. Fler arter än alla andra djurarter tillsammans!"],
          ["**Spindeldjur**", "**8 ben**", "Spindlar, lockespindlar, kvalster och skorpioner. Spindlar har **framkropp** (med benen) och **bakkropp**."],
          ["**Kräftdjur**", "**10–30 ben**", "De flesta lever i vatten (sjöar och hav), men inte alla. T.ex. kräfta, krabba, räka."],
          ["**Mångfotingar**", "**Mer än 40 ben**", "**Enkelfotingar** är rovdjur. **Dubbelfotingar** är växtätare."]
        ] },
        { typ: "bild-svg", svg: "<svg viewBox=\"0 0 340 150\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,sans-serif\" font-size=\"13\"><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"70\" cy=\"62\" r=\"20\"/><path d=\"M60 44 q-12 -24 -30 -28 M78 44 q6 -24 22 -30\"/><ellipse cx=\"125\" cy=\"62\" rx=\"30\" ry=\"20\"/><ellipse cx=\"225\" cy=\"62\" rx=\"62\" ry=\"26\"/><path d=\"M180 52 q0 20 0 20 M200 42 v40 M220 38 v48 M240 38 v48 M260 42 v40\" opacity=\".45\"/><path d=\"M108 78 l-14 28 l-6 6 M125 82 l0 30 l-6 4 M142 78 l14 28 l6 6\"/></g><g fill=\"currentColor\" text-anchor=\"middle\"><text x=\"48\" y=\"132\">huvud</text><text x=\"125\" y=\"132\">mellankropp</text><text x=\"225\" y=\"132\">bakkropp</text></g></svg>", bildtext: "En insekt har tredelad kropp. Alla sex benen sitter på mellankroppen." },
        { typ: "faktaruta", rubrik: "Minnesknep", text: "Ju \"större\" grupp i listan, desto fler ben: insekt **6** → spindel **8** → kräftdjur **10–30** → mångfoting **över 40**." }
      ],
      nyckelbegrepp: [
        { ord: "Exoskelett", forklaring: "Ett hårt yttre skal som skyddar och stöttar leddjurets kropp." },
        { ord: "Ömsa", forklaring: "Att krypa ur sitt gamla skal och bilda ett nytt, större." },
        { ord: "Ledade ben", forklaring: "Ben med leder, så att de kan böjas. Har gett leddjuren deras namn." },
        { ord: "Spindeldjur", forklaring: "Leddjur med 8 ben: spindlar, lockespindlar, kvalster, skorpioner." },
        { ord: "Kräftdjur", forklaring: "Leddjur med 10–30 ben, de flesta lever i vatten." },
        { ord: "Mångfotingar", forklaring: "Leddjur med mer än 40 ben: enkelfotingar och dubbelfotingar." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "insekter",
      titel: "Insekternas förvandling och betydelse",
      sammanfattning: "Fullständig och ofullständig förvandling – och varför insekter är så viktiga.",
      innehall: [
        { typ: "text", text: "Insekter kan utvecklas från ägg till vuxen (adult) på **två sätt**: genom **fullständig förvandling** eller **ofullständig förvandling**." },
        { typ: "bild-svg", svg: "<svg viewBox=\"0 0 340 170\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"system-ui,sans-serif\" font-size=\"13\"><g fill=\"currentColor\"><text x=\"6\" y=\"20\" font-weight=\"700\">Fullständig (t.ex. fjäril)</text><text x=\"6\" y=\"108\" font-weight=\"700\">Ofullständig (t.ex. gräshoppa)</text></g><g fill=\"none\" stroke=\"var(--accent, currentColor)\" stroke-width=\"2\"><rect x=\"6\" y=\"32\" width=\"62\" height=\"34\" rx=\"8\"/><rect x=\"92\" y=\"32\" width=\"62\" height=\"34\" rx=\"8\"/><rect x=\"178\" y=\"32\" width=\"62\" height=\"34\" rx=\"8\"/><rect x=\"264\" y=\"32\" width=\"70\" height=\"34\" rx=\"8\"/><rect x=\"6\" y=\"120\" width=\"62\" height=\"34\" rx=\"8\"/><rect x=\"120\" y=\"120\" width=\"80\" height=\"34\" rx=\"8\"/><rect x=\"254\" y=\"120\" width=\"80\" height=\"34\" rx=\"8\"/></g><g stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"><path d=\"M70 49h18m-6-5 6 5-6 5M156 49h18m-6-5 6 5-6 5M242 49h18m-6-5 6 5-6 5M70 137h46m-6-5 6 5-6 5M202 137h48m-6-5 6 5-6 5\"/></g><g fill=\"currentColor\" text-anchor=\"middle\"><text x=\"37\" y=\"54\">ägg</text><text x=\"123\" y=\"54\">larv</text><text x=\"209\" y=\"54\">puppa</text><text x=\"299\" y=\"54\">vuxen</text><text x=\"37\" y=\"142\">ägg</text><text x=\"160\" y=\"142\">nymf(er)</text><text x=\"294\" y=\"142\">vuxen</text></g></svg>", bildtext: "Fullständig förvandling har fyra stadier med puppa. Ofullständig har ingen puppa – nymfen växer och ömsar skal." },
        { typ: "tabell", rubriker: ["", "Fullständig förvandling", "Ofullständig förvandling"], rader: [
          ["Stadier", "ägg → **larv** → **puppa** → vuxen", "ägg → **nymf** → vuxen"],
          ["Ungen", "Larven ser **inte alls** ut som den vuxna", "Nymfen ser ut som en **liten vuxen** (utan vingar)"],
          ["Exempel", "Fjäril, skalbagge, bi, fluga, myra", "Gräshoppa, trollslända, vägglus"]
        ] },
        { typ: "faktaruta", rubrik: "Kom ihåg!", text: "**Puppa** finns bara vid **fullständig** förvandling. Inne i puppan byggs larvens kropp om helt till en vuxen insekt." },
        { typ: "lista", rubrik: "Därför är insekter viktiga", punkter: [
          "**Pollinerare** – bin, humlor och fjärilar flyttar pollen mellan blommor, så att växter kan bilda frön och frukt (äpplen, jordgubbar, blåbär…).",
          "**Mat åt andra djur** – fåglar, grodor, fiskar och fladdermöss äter insekter.",
          "**Honung** – bin gör honung som vi kan äta.",
          "**Nedbrytare** – många insekter hjälper till att bryta ner döda växter och djur."
        ] }
      ],
      nyckelbegrepp: [
        { ord: "Fullständig förvandling", forklaring: "Ägg → larv → puppa → vuxen. T.ex. fjäril." },
        { ord: "Ofullständig förvandling", forklaring: "Ägg → nymf → vuxen. T.ex. gräshoppa." },
        { ord: "Larv", forklaring: "Ungen vid fullständig förvandling. Ser helt annorlunda ut än den vuxna." },
        { ord: "Puppa", forklaring: "Vilostadiet där larven byggs om till en vuxen insekt." },
        { ord: "Nymf", forklaring: "Ungen vid ofullständig förvandling. Ser ut som en liten vuxen." },
        { ord: "Pollinera", forklaring: "Att flytta pollen mellan blommor så att växten kan bilda frön och frukt." }
      ]
    }
  ],

  fragor: [
    // ---------------- Sju grupper och urdjur ----------------
    { id: "gru-01", delomrade: "grupper-urdjur", typ: "flerval", niva: 1, fraga: "Vad betyder det att ett djur är *ryggradslöst*?",
      alternativ: ["Det saknar ryggrad", "Det saknar ben", "Det lever bara i vatten", "Det har ett hårt skal"], svar: 0,
      forklaring: "Ryggradslösa djur har ingen ryggrad. Många har ändå ben (insekter) eller skal (snäckor)." },
    { id: "gru-02", delomrade: "grupper-urdjur", typ: "flerval", niva: 1, fraga: "Vilka av dessa är grupper av ryggradslösa djur? Välj alla som stämmer.",
      alternativ: ["Nässeldjur", "Tagghudingar", "Fiskar", "Blötdjur", "Fåglar"], svar: [0, 1, 3],
      forklaring: "Fiskar och fåglar har ryggrad. De sju grupperna är urdjur, svampdjur, nässeldjur, blötdjur, tagghudingar, maskar och leddjur." },
    { id: "gru-03", delomrade: "grupper-urdjur", typ: "fyll-i", niva: 1, fraga: "Ett urdjur består av bara ___ cell.",
      godkanda_svar: ["en", "1", "ett", "en enda"],
      forklaring: "Urdjur är encelliga. Den enda cellen måste klara allt: äta, röra sig och föröka sig." },
    { id: "gru-04", delomrade: "grupper-urdjur", typ: "santfalskt", niva: 1, fraga: "Urdjur lever i fuktiga miljöer.", svar: true,
      forklaring: "Urdjur lever i vatten, blöt jord eller inuti andra djur. En enda liten cell skulle torka ut annars." },
    { id: "gru-05", delomrade: "grupper-urdjur", typ: "flerval", niva: 1, fraga: "Hur tar sig ett toffeldjur fram?",
      alternativ: ["Med flimmerhår på utsidan av cellen", "Genom att ändra form", "Med små ben", "Med en tratt som sprutar vatten"], svar: 0,
      forklaring: "Toffeldjuret har massor av flimmerhår som slår i takt, som små åror. Det är amöban som rör sig genom att ändra form." },
    { id: "gru-06", delomrade: "grupper-urdjur", typ: "para-ihop", niva: 2, fraga: "Para ihop urdjuret med hur det rör sig.",
      par: [["Amöba", "Ändrar form och flyter fram"], ["Toffeldjur", "Paddlar med flimmerhår"]],
      forklaring: "Amöban har ingen fast form. Toffeldjuret har fast form och flimmerhår." },
    { id: "gru-07", delomrade: "grupper-urdjur", typ: "flerval", niva: 1, fraga: "Vilken sjukdom orsakas av ett urdjur?",
      alternativ: ["Malaria", "Förkylning", "Vattkoppor", "Borrelia"], svar: 0,
      forklaring: "Malaria orsakas av ett urdjur som sprids med malariamyggor. Mer än 600 000 människor dör av malaria varje år." },
    { id: "gru-08", delomrade: "grupper-urdjur", typ: "fyll-i", niva: 2, fraga: "Malaria sprids till människor av ___.",
      godkanda_svar: ["myggor", "mygg", "malariamyggor", "malariamygg", "mygga", "malariamyggan", "myggan"],
      forklaring: "När en malariamygga sticker kan urdjuret följa med in i blodet." },
    { id: "gru-09", delomrade: "grupper-urdjur", typ: "fritext", niva: 3, fraga: "Varför är djurplankton så viktigt i havet och i sjöar?",
      modellsvar: "Djurplankton är pyttesmå djur som svävar i vattnet. De är viktig mat åt fiskar och andra större djur, så många näringskedjor i vattnet börjar med plankton.",
      nyckelord: ["mat|föda|äter", "fisk", "näringskedja|större djur"],
      forklaring: "Utan djurplankton skulle fiskarna inte få mat, och då inte heller sälar, fåglar och människor som äter fisk." },
    { id: "gru-10", delomrade: "grupper-urdjur", typ: "fritext", niva: 3, fraga: "Vad är speciellt med urdjur? Beskriv med egna ord.",
      modellsvar: "Urdjur består av bara en cell, och den cellen klarar allt som djuret behöver göra. De är mycket små och lever i fuktiga miljöer.",
      nyckelord: ["en cell|encellig|en enda cell", "liten|små", "fukt|vatten|blöt"],
      forklaring: "Tre saker att komma ihåg: en cell, mycket små, fuktigt." },
    { id: "gru-11", delomrade: "grupper-urdjur", typ: "santfalskt", niva: 2, fraga: "De flesta djur på jorden har ryggrad.", svar: false,
      forklaring: "Tvärtom! De allra flesta djur är ryggradslösa – bara insekterna är fler än alla andra djurarter tillsammans." },

    // ---------------- Svampdjur och nässeldjur ----------------
    { id: "sva-01", delomrade: "svamp-nassel", typ: "flerval", niva: 1, fraga: "Var lever svampdjur?",
      alternativ: ["Fastsittande i havet", "Frisimmande i sjöar", "I fuktig skogsmark", "Inuti andra djur"], svar: 0,
      forklaring: "Svampdjur sitter fast i havet och låter vattnet strömma genom sig." },
    { id: "sva-02", delomrade: "svamp-nassel", typ: "fyll-i", niva: 1, fraga: "Svampdjur äter ___ som de filtrerar ur vattnet.",
      godkanda_svar: ["plankton", "djurplankton"],
      forklaring: "Vattnet strömmar genom svampdjurets många hålrum, och planktonet fastnar." },
    { id: "sva-03", delomrade: "svamp-nassel", typ: "fritext", niva: 3, fraga: "Beskriv hur ett svampdjur är uppbyggt och hur det får sin mat.",
      modellsvar: "Ett svampdjur är ihåligt och har många små hålrum. Det sitter fast i havet. Vattnet strömmar igenom svampdjuret, som filtrerar vattnet och tar upp plankton.",
      nyckelord: ["ihålig|hålrum|hål", "sitter fast|fastsittande", "filtrera|sila", "plankton"],
      forklaring: "Svampdjuret kan inte jaga – därför låter det maten komma med vattnet." },
    { id: "sva-04", delomrade: "svamp-nassel", typ: "flerval", niva: 1, fraga: "Vad har alla nässeldjur?",
      alternativ: ["Nässelceller med gift", "Ett hårt skal", "Åtta armar", "Flimmerhår"], svar: 0,
      forklaring: "Nässelcellerna har gett nässeldjuren deras namn. Det är därför en manet kan bränna." },
    { id: "sva-05", delomrade: "svamp-nassel", typ: "flerval", niva: 1, fraga: "Vilka är de vanligaste grupperna av nässeldjur?",
      alternativ: ["Koraller och maneter", "Sjöstjärnor och sjöborrar", "Snäckor och musslor", "Amöbor och toffeldjur"], svar: 0,
      forklaring: "Koraller och maneter är nässeldjur. Havsanemoner också." },
    { id: "sva-06", delomrade: "svamp-nassel", typ: "para-ihop", niva: 2, fraga: "Para ihop formen med hur den lever.",
      par: [["Medusa", "Frisimmande"], ["Polyp", "Fastsittande"]],
      forklaring: "Medusan simmar fritt (manetformen). Polypen sitter fast (som koraller)." },
    { id: "sva-07", delomrade: "svamp-nassel", typ: "santfalskt", niva: 2, fraga: "En manet lever både som polyp och som medusa under sitt liv.", svar: true,
      forklaring: "Larven sätter sig fast och blir en polyp. Polypen delar av sig små maneter som växer till medusor." },
    { id: "sva-08", delomrade: "svamp-nassel", typ: "ordning", niva: 2, fraga: "Sätt stegen i rätt ordning: vad händer när en nässelcell bränns?",
      alternativ: ["Något rör vid avtryckaren", "Harpunen skjuts ut", "Spetsen tränger in i bytet", "Giftet sprutas in"],
      forklaring: "Nässelcellen fungerar som en laddad harpun med avtryckare." },
    { id: "sva-09", delomrade: "svamp-nassel", typ: "fritext", niva: 3, fraga: "Beskriv kort hur en nässelcell fungerar.",
      modellsvar: "En nässelcell är som en liten laddad harpun. Den har en avtryckare, och om något rör vid den skjuts harpunen ut och sprutar in gift.",
      nyckelord: ["harpun", "avtryckare|rör vid|nudda", "skjut", "gift"],
      forklaring: "Jämförelsen med en harpun är bra att använda på provet." },
    { id: "sva-10", delomrade: "svamp-nassel", typ: "flerval", niva: 2, fraga: "Vad bygger koraller?",
      alternativ: ["Stora kolonier och rev", "Nät av silke", "Hus av sand", "Gångar i jorden"], svar: 0,
      forklaring: "Korallpolyper lever tillsammans i kolonier och bygger kalkskelett som blir korallrev." },
    { id: "sva-11", delomrade: "svamp-nassel", typ: "santfalskt", niva: 2, fraga: "Svampdjur kan simma omkring för att jaga plankton.", svar: false,
      forklaring: "Svampdjur sitter fast. De filtrerar vattnet som strömmar genom dem i stället för att jaga." },

    // ---------------- Blötdjur ----------------
    { id: "blo-01", delomrade: "blotdjur", typ: "flerval", niva: 1, fraga: "Vilka av dessa är blötdjur? Välj alla som stämmer.",
      alternativ: ["Snäcka", "Mussla", "Bläckfisk", "Sjöstjärna", "Daggmask"], svar: [0, 1, 2],
      forklaring: "Sjöstjärnan är en tagghuding och daggmasken är en ringmask." },
    { id: "blo-02", delomrade: "blotdjur", typ: "santfalskt", niva: 1, fraga: "Alla blötdjur lever i vatten.", svar: false,
      forklaring: "Vissa lever i vatten och vissa på land, t.ex. vinbergssnäckor och mördarsniglar." },
    { id: "blo-03", delomrade: "blotdjur", typ: "para-ihop", niva: 2, fraga: "Para ihop blötdjuret med dess kännetecken.",
      par: [["Mussla", "Skal i två delar"], ["Snäcka", "Spiralformat skal"], ["Snigel", "Saknar yttre skal"], ["Bläckfisk", "Inre skal och 8 eller 10 armar"]],
      forklaring: "Skalet är ett bra sätt att skilja grupperna åt." },
    { id: "blo-04", delomrade: "blotdjur", typ: "flerval", niva: 1, fraga: "Vilka är de enda blötdjuren med skal i två delar?",
      alternativ: ["Musslor", "Snäckor", "Bläckfiskar", "Sniglar"], svar: 0,
      forklaring: "Musslans två skalhalvor kan stängas med starka muskler." },
    { id: "blo-05", delomrade: "blotdjur", typ: "fyll-i", niva: 2, fraga: "Snäckor och sniglar skrapar loss mat med sin ___.",
      godkanda_svar: ["rasptunga", "rasptungan"],
      forklaring: "Rasptungan är full av små tänder, som ett rivjärn. Alla blötdjur har en." },
    { id: "blo-06", delomrade: "blotdjur", typ: "santfalskt", niva: 1, fraga: "Bläckfiskar har ett inre skal.", svar: true,
      forklaring: "Bläckfiskens \"skal\" sitter inne i kroppen och håller den rak." },
    { id: "blo-07", delomrade: "blotdjur", typ: "flerval", niva: 2, fraga: "Vad har sniglar och snäckor gemensamt?",
      alternativ: ["Rasptunga, fot och ögon", "Skal i två delar", "Åtta armar", "Sugfötter"], svar: 0,
      forklaring: "Skillnaden är skalet: snäckor har spiralformat yttre skal, sniglar saknar det." },
    { id: "blo-08", delomrade: "blotdjur", typ: "fritext", niva: 3, fraga: "Blötdjuren delas in i grupper. Beskriv kort vad som är typiskt för musslor, snäckor och bläckfiskar.",
      modellsvar: "Musslor har mantel, gälar och fot och är de enda med skal i två delar. Snäckor har spiralformat skal, rasptunga, fot och ögon, och vissa lever på land. Bläckfiskar har inre skal, två välutvecklade ögon och åtta eller tio armar, och kan bli mycket stora.",
      nyckelord: ["två delar", "spiral", "rasptunga", "inre skal", "armar", "ögon"],
      forklaring: "Ta med minst två kännetecken per grupp. Sniglar kan du beskriva som snäckor utan yttre skal." },
    { id: "blo-09", delomrade: "blotdjur", typ: "flerval", niva: 2, fraga: "Hur får en mussla sin mat?",
      alternativ: ["Den filtrerar vattnet", "Den jagar med armar", "Den skrapar alger med fötterna", "Den suger blod"], svar: 0,
      forklaring: "Musslan silar vatten genom gälarna och fångar små matbitar – ungefär som svampdjuren." },
    { id: "blo-10", delomrade: "blotdjur", typ: "fyll-i", niva: 1, fraga: "Bläckfiskar har åtta eller ___ armar.",
      godkanda_svar: ["tio", "10"],
      forklaring: "Åttaarmade bläckfiskar (som kraken i sagorna) och tioarmade som kalmaren vi dissekerade." },

    // ---------------- Dissektion: bläckfisk ----------------
    { id: "bla-01", delomrade: "blackfisk", typ: "flerval", niva: 1, fraga: "Vilken djurgrupp hör bläckfisken till?",
      alternativ: ["Blötdjur", "Fiskar", "Nässeldjur", "Kräftdjur"], svar: 0,
      forklaring: "Trots namnet är bläckfisken ingen fisk. Den är ett ryggradslöst blötdjur, släkt med snäckor och musslor." },
    { id: "bla-02", delomrade: "blackfisk", typ: "para-ihop", niva: 2, fraga: "Para ihop delen med vad den gör.",
      par: [["Tratt", "Sprutar ut vatten så att bläckfisken åker framåt"], ["Bläcksäck", "Gör bläck som fienden inte kan se igenom"], ["Kromatoforer", "Gör att den kan byta färg"], ["Sugkoppar", "Håller fast bytet"]],
      forklaring: "Bläckfiskens kropp är full av smarta lösningar för att jaga och fly." },
    { id: "bla-03", delomrade: "blackfisk", typ: "flerval", niva: 1, fraga: "Vad liknar bläckfiskens mun?",
      alternativ: ["En papegojnäbb", "En sugkopp", "En harpun", "En tratt"], svar: 0,
      forklaring: "Näbben är mycket kraftig och biter av bitar från bytet. Inne i munnen sitter rasptungan." },
    { id: "bla-04", delomrade: "blackfisk", typ: "santfalskt", niva: 2, fraga: "Bläckfiskens ögon påminner mycket om våra egna.", svar: true,
      forklaring: "Ögonen är mycket välutvecklade för ett ryggradslöst djur. Bara linsen har lite annan form än vår runda." },
    { id: "bla-05", delomrade: "blackfisk", typ: "fritext", niva: 3, fraga: "Varför sprutar bläckfisken bläck? Förklara.",
      modellsvar: "Bläcket är ett sätt att fly vid fara. Den som jagar bläckfisken kan inte se något i bläckmolnet, och bläckfisken hinner komma undan.",
      nyckelord: ["fara|fiende|jagar", "se|syns", "fly|undan|komma bort"],
      forklaring: "Det kallas en avledande manöver – fienden blir lurad medan bläckfisken simmar iväg." },
    { id: "bla-06", delomrade: "blackfisk", typ: "flerval", niva: 2, fraga: "Vad gör bläckfiskens inre \"skal\" (pennan)?",
      alternativ: ["Håller kroppen rak när den simmar fort", "Skyddar ögonen", "Tillverkar bläck", "Tar upp syre"], svar: 0,
      forklaring: "Skalet fungerar ungefär som ett skelett. Det är lika långt som manteln." },
    { id: "bla-07", delomrade: "blackfisk", typ: "fyll-i", niva: 1, fraga: "Bläckfisken tar upp syre ur vattnet med sina ___.",
      godkanda_svar: ["gälar", "gälarna", "gäle"],
      forklaring: "Både bläckfisken och sillen andas med gälar – en likhet mellan två mycket olika djur." },
    { id: "bla-08", delomrade: "blackfisk", typ: "flerval", niva: 2, fraga: "Vad är kromatoforer?",
      alternativ: ["Färgceller i huden", "Små tänder i sugkopparna", "Bläckfiskens hjärta", "Bläckfiskens ägg"], svar: 0,
      forklaring: "Med färgcellerna kan bläckfisken byta färg och smälta in i omgivningen." },
    { id: "bla-09", delomrade: "blackfisk", typ: "flerval", niva: 2, fraga: "Vilka av dessa har både bläckfisken och sillen? Välj alla som stämmer.",
      alternativ: ["Gälar", "Hjärta", "Ryggrad", "Bläcksäck", "Simblåsa"], svar: [0, 1],
      forklaring: "Ryggrad och simblåsa har bara sillen. Bläcksäck har bara bläckfisken." },
    { id: "bla-10", delomrade: "blackfisk", typ: "fritext", niva: 3, fraga: "Jämför bläckfisken och sillen. Ge minst en likhet och en skillnad.",
      modellsvar: "Båda lever i havet och andas med gälar, och båda har hjärta och ögon. En skillnad är att sillen är ett ryggradsdjur med ryggrad, medan bläckfisken är ryggradslös och håller kroppen rak med ett inre skal. Bläckfisken tar sig fram med en tratt, sillen med fenor.",
      nyckelord: ["gälar", "ryggrad", "inre skal|skal|penna", "tratt|fenor"],
      forklaring: "Tänk på hur de har löst samma problem på olika sätt: stöd för kroppen, simning och skydd." },
    { id: "bla-11", delomrade: "blackfisk", typ: "santfalskt", niva: 1, fraga: "Den bläckfisk vi dissekerade hade två extra långa armar som kallas tentakler.", svar: true,
      forklaring: "Den tioarmade bläckfisken har åtta armar och två längre tentakler som den fångar bytet med." },

    // ---------------- Tagghudingar ----------------
    { id: "tag-01", delomrade: "tagghudingar", typ: "flerval", niva: 1, fraga: "Var lever tagghudingar?",
      alternativ: ["I havet", "I sjöar", "På land", "Både i havet och på land"], svar: 0,
      forklaring: "Alla tagghudingar lever i havet. I Sverige finns de på västkusten, där vattnet är saltare." },
    { id: "tag-02", delomrade: "tagghudingar", typ: "flerval", niva: 1, fraga: "Vilka av dessa är tagghudingar? Välj alla som stämmer.",
      alternativ: ["Sjöstjärna", "Sjöborre", "Sjögurka", "Manet", "Mussla"], svar: [0, 1, 2],
      forklaring: "Manet är ett nässeldjur och mussla är ett blötdjur. Ormstjärnor och sjöliljor är också tagghudingar." },
    { id: "tag-03", delomrade: "tagghudingar", typ: "fyll-i", niva: 1, fraga: "En sjöstjärna har oftast ___ armar.",
      godkanda_svar: ["fem", "5"],
      forklaring: "Fem armar är vanligast, men det finns arter med fler." },
    { id: "tag-04", delomrade: "tagghudingar", typ: "flerval", niva: 1, fraga: "Hur tar sig en sjöstjärna fram?",
      alternativ: ["Med sugfötter", "Med flimmerhår", "Med en tratt", "Med ledade ben"], svar: 0,
      forklaring: "Under armarna finns massor av små sugfötter. Andra tagghudingar kan också röra sig med taggarna." },
    { id: "tag-05", delomrade: "tagghudingar", typ: "santfalskt", niva: 2, fraga: "Sjöstjärnan har små \"ögon\" längst ut på varje arm.", svar: true,
      forklaring: "De känner av ljus och mörker, så att sjöstjärnan vet åt vilket håll den kryper." },
    { id: "tag-06", delomrade: "tagghudingar", typ: "fritext", niva: 3, fraga: "Beskriv kort hur en sjöstjärna är uppbyggd.",
      modellsvar: "En sjöstjärna har oftast fem armar. Längst ut på varje arm sitter ett litet öga, och på undersidan har den sugfötter som den tar sig fram med. Den har ett taggigt skelett.",
      nyckelord: ["fem|5", "arm", "öga|ögon", "sugfötter|sugfot"],
      forklaring: "Fem armar, ögon på armspetsarna och sugfötter – det är de tre viktigaste sakerna." },
    { id: "tag-07", delomrade: "tagghudingar", typ: "para-ihop", niva: 2, fraga: "Para ihop tagghudingen med hur den ser ut.",
      par: [["Sjöborre", "Rund och full av långa taggar"], ["Sjögurka", "Avlång, som en gurka"], ["Ormstjärna", "Smala, ormliknande armar"], ["Sjöstjärna", "Oftast fem breda armar"]],
      forklaring: "Namnen säger ofta hur djuren ser ut." },
    { id: "tag-08", delomrade: "tagghudingar", typ: "santfalskt", niva: 2, fraga: "Tagghudingar kan förflytta sig genom att röra sina taggar.", svar: true,
      forklaring: "De rör sig med sugfötter eller genom att röra taggarna – sjöborren kan \"gå\" på sina taggar." },

    // ---------------- Maskar ----------------
    { id: "mas-01", delomrade: "maskar", typ: "flerval", niva: 1, fraga: "Vilka är maskarnas tre grupper?",
      alternativ: ["Rundmaskar, plattmaskar och ringmaskar", "Daggmaskar, iglar och larver", "Spolmaskar, sniglar och iglar", "Långmaskar, kortmaskar och ringmaskar"], svar: 0,
      forklaring: "Rund – platt – ring. Ett exempel på var: spolmask, binnikemask, daggmask." },
    { id: "mas-02", delomrade: "maskar", typ: "para-ihop", niva: 2, fraga: "Para ihop masken med rätt grupp.",
      par: [["Daggmask", "Ringmask"], ["Binnikemask", "Plattmask"], ["Spolmask", "Rundmask"], ["Igel", "Ringmask"]],
      forklaring: "Daggmask och igel hör båda till ringmaskarna." },
    { id: "mas-03", delomrade: "maskar", typ: "fyll-i", niva: 1, fraga: "Daggmaskar och iglar tillhör samma grupp: ___.",
      godkanda_svar: ["ringmaskar", "ringmask", "ringmaskarna"],
      forklaring: "Ringmaskarnas kropp är uppdelad i många ringar (segment) – titta på en daggmask nästa gång!" },
    { id: "mas-04", delomrade: "maskar", typ: "fritext", niva: 3, fraga: "Varför måste maskar leva i fuktiga miljöer?",
      modellsvar: "Maskar andas genom huden. Huden måste vara fuktig för att de ska kunna ta upp syre. Om de torkar ut kan de inte andas.",
      nyckelord: ["andas", "huden|hud", "torka|uttork|fukt"],
      forklaring: "Därför kommer daggmaskarna upp när det regnar – och torkar ihjäl på asfalten när solen kommer fram." },
    { id: "mas-05", delomrade: "maskar", typ: "flerval", niva: 1, fraga: "Vad är en parasit?",
      alternativ: ["En organism som lever på en annan organism och skadar den", "Ett djur som äter döda växter", "Ett djur som är både hona och hane", "Ett djur som filtrerar vatten"], svar: 0,
      forklaring: "Binnikemasken och spolmasken är parasiter – de lever av sin värd och skadar den." },
    { id: "mas-06", delomrade: "maskar", typ: "fritext", niva: 3, fraga: "Berätta kort om binnikemasken.",
      modellsvar: "Binnikemasken är en plattmask och en parasit. Den lever i våra tarmar, biter sig fast i tarmväggen och suger upp näring direkt genom huden. Bitar av masken med ägg lossnar och kommer ut när man bajsar. Den som drabbas får äta medicin så att masken dör.",
      nyckelord: ["tarm", "biter|fast", "huden|hud", "ägg", "medicin", "parasit"],
      forklaring: "Ta med var den lever, hur den äter och hur äggen sprids." },
    { id: "mas-07", delomrade: "maskar", typ: "santfalskt", niva: 2, fraga: "Man kan se på en daggmask om den är en hona eller en hane.", svar: false,
      forklaring: "Daggmasken är tvåkönad (hermafrodit) – den är både hona och hane på samma gång." },
    { id: "mas-08", delomrade: "maskar", typ: "fyll-i", niva: 2, fraga: "Ett annat ord för tvåkönad är ___.",
      godkanda_svar: ["hermafrodit", "hermafroditer"],
      forklaring: "Daggmaskar är hermafroditer. När två parar sig kan båda lägga ägg efteråt." },
    { id: "mas-09", delomrade: "maskar", typ: "fritext", niva: 3, fraga: "Varför är daggmasken så viktig? Förklara.",
      modellsvar: "Daggmasken äter döda växter och jord, och dess bajs blir ny näringsrik jord. Den gräver gångar som gör marken porös, så att luft och vatten kommer ner till växternas rötter.",
      nyckelord: ["döda växter|löv", "bajs|jord", "näring", "gångar", "porös|luftig|fluffig"],
      forklaring: "Daggmasken gör jorden både näringsrik och luftig – två saker som växter behöver." },
    { id: "mas-10", delomrade: "maskar", typ: "flerval", niva: 2, fraga: "Hur får binnikemasken i sig näring?",
      alternativ: ["Den suger upp näring genom huden", "Den äter jord", "Den filtrerar vatten", "Den fångar plankton"], svar: 0,
      forklaring: "I tarmen finns redan nedbruten mat, så masken kan ta upp näringen direkt genom huden." },
    { id: "mas-11", delomrade: "maskar", typ: "flerval", niva: 1, fraga: "Vilka av dessa maskar är parasiter? Välj alla som stämmer.",
      alternativ: ["Binnikemask", "Spolmask", "Daggmask"], svar: [0, 1],
      forklaring: "Daggmasken är inte en parasit – den är nyttig och gör jorden bättre." },

    // ---------------- Leddjur ----------------
    { id: "led-01", delomrade: "leddjur", typ: "flerval", niva: 1, fraga: "Vilken är den största gruppen av djur?",
      alternativ: ["Leddjur", "Blötdjur", "Maskar", "Däggdjur"], svar: 0,
      forklaring: "Det finns fler sorters leddjur än något annat. Bara insekterna har fler arter än alla andra djurarter tillsammans." },
    { id: "led-02", delomrade: "leddjur", typ: "flerval", niva: 1, fraga: "Vad är typiskt för leddjur? Välj alla som stämmer.",
      alternativ: ["Ledade ben", "Yttre skal (exoskelett)", "De lägger ägg", "De har ryggrad", "De andas genom huden"], svar: [0, 1, 2],
      forklaring: "Leddjur har ledade ben, exoskelett och lägger ägg. De är också mat till många andra djur." },
    { id: "led-03", delomrade: "leddjur", typ: "fyll-i", niva: 1, fraga: "Leddjurens hårda yttre skal kallas ___.",
      godkanda_svar: ["exoskelett", "exoskelettet", "yttre skelett"],
      forklaring: "Exo betyder utanför. Vi människor har i stället ett inre skelett." },
    { id: "led-04", delomrade: "leddjur", typ: "para-ihop", niva: 1, fraga: "Para ihop gruppen med antalet ben.",
      par: [["Insekter", "6 ben"], ["Spindeldjur", "8 ben"], ["Kräftdjur", "10–30 ben"], ["Mångfotingar", "Mer än 40 ben"]],
      forklaring: "Antalet ben är det enklaste sättet att skilja grupperna åt. Glöm dem inte på provet!" },
    { id: "led-05", delomrade: "leddjur", typ: "flerval", niva: 1, fraga: "Hur många ben har ett spindeldjur?",
      alternativ: ["8", "6", "10", "Fler än 40"], svar: 0,
      forklaring: "Spindeldjur har åtta ben. Insekter har sex." },
    { id: "led-06", delomrade: "leddjur", typ: "flerval", niva: 2, fraga: "Vilka hör till spindeldjuren? Välj alla som stämmer.",
      alternativ: ["Kvalster", "Skorpioner", "Lockespindlar", "Gråsuggor", "Myror"], svar: [0, 1, 2],
      forklaring: "Spindeldjur: spindlar, lockespindlar, kvalster och skorpioner. Gråsuggan är ett kräftdjur och myran en insekt." },
    { id: "led-07", delomrade: "leddjur", typ: "ordning", niva: 1, fraga: "Insektens kropp har tre delar. Sätt dem i ordning framifrån.",
      alternativ: ["Huvud", "Mellankropp", "Bakkropp"],
      forklaring: "Tredelad kropp: huvud, mellankropp, bakkropp. Alla sex benen sitter på mellankroppen." },
    { id: "led-08", delomrade: "leddjur", typ: "para-ihop", niva: 2, fraga: "Para ihop mångfotingen med vad den äter.",
      par: [["Enkelfoting", "Rovdjur"], ["Dubbelfoting", "Växtätare"]],
      forklaring: "Enkelfotingar är snabba jägare. Dubbelfotingar är långsamma och äter växtdelar." },
    { id: "led-09", delomrade: "leddjur", typ: "santfalskt", niva: 1, fraga: "De flesta kräftdjur lever i vatten.", svar: true,
      forklaring: "Kräftor, krabbor och räkor lever i vatten. Men inte alla – gråsuggan är ett kräftdjur som lever på land." },
    { id: "led-10", delomrade: "leddjur", typ: "fritext", niva: 3, fraga: "Leddjuren delas in i fyra grupper. Beskriv kort varje grupp. Glöm inte antalet ben!",
      modellsvar: "Insekter har sex ben och tredelad kropp. Spindeldjur har åtta ben och delas in i spindlar, lockespindlar, kvalster och skorpioner. Kräftdjur har 10–30 ben och de flesta lever i vatten. Mångfotingar har mer än 40 ben och delas in i enkelfotingar (rovdjur) och dubbelfotingar (växtätare).",
      nyckelord: ["sex|6", "åtta|8", "tredelad", "vatten", "40", "enkelfoting|dubbelfoting"],
      forklaring: "Det här är en typisk provfråga. Antal ben + en sak till om varje grupp ger fullt." },
    { id: "led-11", delomrade: "leddjur", typ: "fritext", niva: 3, fraga: "Varför måste leddjur ömsa skal?",
      modellsvar: "Leddjur har ett hårt yttre skal, ett exoskelett, som inte växer med djuret. När djuret blir större måste det krypa ur det gamla skalet och bilda ett nytt, större.",
      nyckelord: ["exoskelett|yttre skal|skal", "växer inte|växa", "större|nytt"],
      forklaring: "Precis efter ömsningen är det nya skalet mjukt, och då är djuret extra sårbart." },
    { id: "led-12", delomrade: "leddjur", typ: "santfalskt", niva: 2, fraga: "En spindel har en tredelad kropp, precis som en insekt.", svar: false,
      forklaring: "Spindeln har två delar: framkropp (där benen sitter) och bakkropp. Insekten har tre." },

    // ---------------- Insekter: förvandling och betydelse ----------------
    { id: "ins-01", delomrade: "insekter", typ: "ordning", niva: 1, fraga: "Sätt stadierna i rätt ordning för **fullständig** förvandling.",
      alternativ: ["Ägg", "Larv", "Puppa", "Vuxen insekt"],
      forklaring: "Fullständig förvandling har fyra stadier – och puppan är det som skiljer den från ofullständig." },
    { id: "ins-02", delomrade: "insekter", typ: "ordning", niva: 1, fraga: "Sätt stadierna i rätt ordning för **ofullständig** förvandling.",
      alternativ: ["Ägg", "Nymf", "Vuxen insekt"],
      forklaring: "Ingen puppa! Nymfen ömsar skal flera gånger och växer tills den är vuxen." },
    { id: "ins-03", delomrade: "insekter", typ: "flerval", niva: 1, fraga: "Vilken insekt har **fullständig** förvandling?",
      alternativ: ["Fjäril", "Gräshoppa", "Trollslända", "Vägglus"], svar: 0,
      forklaring: "Fjärilen går från larv (fjärilslarv) via puppa till vuxen fjäril." },
    { id: "ins-04", delomrade: "insekter", typ: "flerval", niva: 1, fraga: "Vilken insekt har **ofullständig** förvandling?",
      alternativ: ["Gräshoppa", "Fjäril", "Nyckelpiga", "Bi"], svar: 0,
      forklaring: "Gräshoppans unge, nymfen, ser ut som en liten gräshoppa." },
    { id: "ins-05", delomrade: "insekter", typ: "santfalskt", niva: 2, fraga: "En nymf ser ut som en liten vuxen insekt.", svar: true,
      forklaring: "Det är skillnaden mot en larv, som inte alls ser ut som den vuxna insekten." },
    { id: "ins-06", delomrade: "insekter", typ: "santfalskt", niva: 2, fraga: "Vid ofullständig förvandling finns ett puppstadium.", svar: false,
      forklaring: "Puppa finns bara vid fullständig förvandling." },
    { id: "ins-07", delomrade: "insekter", typ: "fyll-i", niva: 2, fraga: "Vid fullständig förvandling byggs larven om till en vuxen insekt inne i en ___.",
      godkanda_svar: ["puppa", "puppan"],
      forklaring: "I puppan löses larvens kropp nästan helt upp och byggs om – därför ser fjärilen helt annorlunda ut än larven." },
    { id: "ins-08", delomrade: "insekter", typ: "fritext", niva: 3, fraga: "Förklara skillnaden mellan fullständig och ofullständig förvandling. Ge ett exempel på varje.",
      modellsvar: "Vid fullständig förvandling kommer en larv ur ägget. Larven blir en puppa, och ur puppan kommer en vuxen insekt som inte alls ser ut som larven, t.ex. en fjäril. Vid ofullständig förvandling kommer en nymf ur ägget. Nymfen ser ut som en liten vuxen och växer tills den är vuxen, t.ex. en gräshoppa.",
      nyckelord: ["larv", "puppa", "nymf", "fjäril", "gräshoppa"],
      forklaring: "Nyckeln: larv + puppa = fullständig. Nymf (som liknar den vuxna) = ofullständig." },
    { id: "ins-09", delomrade: "insekter", typ: "flerval", niva: 2, fraga: "På vilka sätt är insekter viktiga i naturen? Välj alla som stämmer.",
      alternativ: ["De pollinerar blommor", "De är mat åt andra djur", "Bin gör honung", "De hjälper till att bryta ner döda växter och djur", "De tillverkar syre"], svar: [0, 1, 2, 3],
      forklaring: "Insekter pollinerar, är mat åt andra djur, gör honung (bin) och bryter ner döda växter och djur. Det är växterna som tillverkar syre, inte insekterna." },
    { id: "ins-10", delomrade: "insekter", typ: "fritext", niva: 3, fraga: "Ge exempel på hur insekter är viktiga i naturen och för oss människor.",
      modellsvar: "Insekter som bin och humlor pollinerar blommor, så att växter kan bilda frön och frukt, t.ex. äpplen och blåbär. Insekter är mat åt många andra djur, som fåglar och grodor. Bin gör honung som vi kan äta. Många insekter bryter också ner döda växter och djur (nedbrytning).",
      nyckelord: ["pollinera|pollinerar|pollinering", "mat|föda", "honung", "nedbryt|bryter ner|bryta ner|nedbrytare|nedbrytning"],
      forklaring: "Pollinering, mat åt andra djur, honung och nedbrytning av döda växter och djur är de fyra exemplen från genomgången." },
    { id: "ins-11", delomrade: "insekter", typ: "santfalskt", niva: 1, fraga: "Det finns fler arter av insekter än av alla andra djur tillsammans.", svar: true,
      forklaring: "Både alla andra ryggradslösa djur och alla ryggradsdjur tillsammans är färre arter än insekterna!" }
  ]
});
