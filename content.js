/* ============================================================
   HONEY HARVEST SOLUTIONS — SITE CONTENT
   This is the only file you need to edit to add or change:
     • Field notes (blog posts)      → NOTES
     • Ask a Grower Q&A              → QA
     • Genetics cards                → STRAINS
     • Instagram posts on the site   → POSTS
     • Design sheets in the browser  → SHEETS
   Newest items go at the TOP of each list. Save, commit, and the site
   redeploys itself. Watch the commas: every item ends with }, except the last.
   ============================================================ */

/* ---------- FIELD NOTES ----------
   id:    short URL slug, letters/dashes only, unique
   topic: shows as a filter button (reuse existing names to keep the list tidy)
   slot:  image file in images/ — e.g. "note-05" means images/note-05.jpg
   body:  HTML. Use <p>, <h3>, <ul><li>, <blockquote>. */
const NOTES = [
  {
    id:"substrate-reset", topic:"Nutrition", date:"September 2026", read:"6 min",
    title:"The iron deficiency that wasn't an iron problem.",
    dek:"A facility-wide chlorosis event, what the tissue tests actually said, and the substrate reset that fixed it.",
    slot:"note-01 · pale new growth macro, 1200×800",
    body:`
<p>Every flower room in the building started showing it in the same week: pale, interveinal chlorosis on the newest growth, worst at the top of the canopy. Every tech's first word was <em>iron</em>. Every tech was half right.</p>
<p>Iron deficiency looks like iron deficiency. But the plant doesn't care what's in the tank — it cares what's available at the root. We pulled substrate samples across rooms and the story was consistent: pore-water EC had crept up over three cycles, root-zone pH had drifted high, and iron — which is barely mobile to begin with — was locked out before it ever reached the leaf.</p>
<h3>What the numbers said</h3>
<ul><li>Tissue Fe was low, but tissue Mn and Zn were low too. That's a pH story, not a single-nutrient story.</li><li>Substrate pH in the worst rooms was running well above target; the best-looking room was the one on the freshest media.</li><li>Runoff EC was climbing week over week. The salts were accumulating faster than the irrigation strategy was clearing them.</li></ul>
<blockquote>Chasing the symptom with a chelate top-dress would have bought a week and cost a cycle.</blockquote>
<h3>The reset</h3>
<p>We rebuilt the program around the root zone instead of the feed: a controlled flush to pull EC back into range, an acid adjustment to walk pH down without shocking the plant, a lower-EC vegetative-steer irrigation window for a few days to re-establish healthy runoff, then back onto the standard recipe with runoff tracked daily on the dashboard. New growth greened up inside a week. The real win was the trend line — it never drifted again, because now somebody was watching it.</p>
<h3>The lesson</h3>
<p>Deficiencies are usually availability problems. Before you add anything, measure what's already there.</p>`
  },
  {
    id:"crop-steering-without-the-hype", topic:"Crop steering", date:"August 2026", read:"7 min",
    title:"Crop steering without the hype.",
    dek:"Generative and vegetative are just two words for how you shape the root zone. Here's how I actually use them.",
    slot:"note-02 · substrate sensor or dripline detail, 1200×800",
    body:`
<p>Crop steering got turned into a product category, and somewhere along the way the plain idea got buried. Strip it back: you are using irrigation timing, volume, and dryback to tell the plant whether to build structure or build flower. That's it.</p>
<h3>Vegetative steer</h3>
<p>Frequent, smaller irrigations. Shallow drybacks. Lower substrate EC. You're telling the plant the world is generous — stretch, branch, build leaf. I run this from transplant through roughly the end of stretch, and any time I need a room to recover.</p>
<h3>Generative steer</h3>
<p>Fewer, larger irrigations packed earlier in the day. Deeper overnight drybacks. Higher substrate EC. You're telling the plant resources are finite — stop stretching, set flower, fill it. This is bulk and finish.</p>
<blockquote>The sensors don't steer the crop. They just let you see whether the crop believed you.</blockquote>
<h3>Where people get it wrong</h3>
<ul><li>Steering a room that isn't healthy yet. Fix pH, EC, and IPM first; steering an unhealthy plant just stresses it faster.</li><li>Copying someone else's dryback percentages. Your media, pot size, and environment set the numbers, not a slide deck.</li><li>Changing the steer and the environment on the same day, then not knowing which one moved the plant.</li></ul>
<p>Pick a target, change one thing, watch the substrate data for three days, then decide. Boring. Works.</p>`
  },
  {
    id:"the-cure-is-where-flower-is-lost", topic:"Post-harvest", date:"July 2026", read:"5 min",
    title:"The cure is where most flower is lost.",
    dek:"A grow can do everything right for nine weeks and give half of it back in nine days. The dry room deserves a real design.",
    slot:"note-03 · hang-dry room, 1200×800",
    body:`
<p>I have walked into more facilities with a beautiful flower program and a dry room that was, functionally, a closet with a fan. It's the most expensive closet in the building.</p>
<h3>The dry room is a grow room</h3>
<p>It needs the same care in mechanical sizing as flower — arguably more, because the load is entirely latent. Thousands of wet plants coming into a room at once will overwhelm a unit sized by square footage. Size for the water you're removing, not the floor you're covering.</p>
<h3>Slow is the whole point</h3>
<p>60°F and 60% RH is the target most people can name, and most people then violate it in the first 48 hours when the room is flooded with moisture. Hold the environment, keep the air moving without blowing on the flower, and give it the full 10–14 days. Terpenes that leave in a fast dry are never coming back.</p>
<blockquote>You cannot cure your way out of a bad dry. You can only dry your way into a good cure.</blockquote>
<h3>Then actually cure</h3>
<p>Burp, monitor water activity, and don't rush the package. A real cure is the difference between flower that tests well and flower that people come back for.</p>`
  },
  {
    id:"cost-per-gram", topic:"Operations", date:"June 2026", read:"8 min",
    title:"What a dollar a gram actually looks like.",
    dek:"Cultivation OPEX around $1/g is a real target. Here's where the money goes and where it hides.",
    slot:"note-04 · trim room or packaging line, 1200×800",
    body:`
<p>When I say ~$1 per gram cultivation OPEX is a target, I mean it as a discipline, not a brag. The number forces you to look at every line of the grow and ask whether it's serving the plant or serving a habit.</p>
<h3>Where it goes</h3>
<ul><li><strong>Labor</strong> is usually the biggest slice. Labor per gram is set by layout, benching, and SOPs — long before anyone punches a clock.</li><li><strong>Power</strong> is set by fixture choice and by how honest your HVAC sizing was at design time.</li><li><strong>Inputs</strong> — media, nutrients, IPM — are smaller than people think, and the cheap version usually costs more by the end of the cycle.</li></ul>
<h3>Where it hides</h3>
<p>Failed rooms. Rework. A late harvest that pushes the whole cadence. One lost flower room can erase a quarter's worth of savings on nutrients. That's why risk reduction is a cost line, not a nice-to-have.</p>
<blockquote>Cheap is expensive. Consistent is cheap.</blockquote>
<p>The rooms that hit the number are never the rooms that cut the most. They're the rooms that made the fewest mistakes.</p>`
  }
];

/* ---------- ASK A GROWER ----------  q = question, a = answer (HTML), who = name, setup · state */
const QA = [
  {q:"I want to grow at home. Where do I even start?",
   a:"<p>Start smaller than you think, and start with the room — not the plant. Most first grows fail on environment and watering, not genetics.</p><p><b>Break it down:</b></p><ol><li><b>Check your rules.</b> Home-grow laws vary by state and some cities add limits. Know your plant count and whether it has to be out of public view before you buy anything.</li><li><b>Pick the space.</b> A closet, a spare-room corner, or a 2×4 ft tent. You need a power outlet, a way to pull air in and out, and a spot that doesn't swing 20 degrees between day and night.</li><li><b>Set a budget.</b> A solid first setup runs $400–$800 all in. Below that you're usually buying twice.</li><li><b>Grow one or two plants.</b> You'll learn the same lessons with two plants as with six, with a fraction of the headaches.</li><li><b>Write the plan before the seed.</b> Light, medium, feed, schedule. That's what the $99 Starter design does — we hand you the plan so the first run isn't guesswork.</li></ol><p><b>Where people go wrong:</b> buying a big light first and figuring out the room later. Do it the other way around.</p>",
   who:"a first-timer · Colorado"},
  {q:"What do I actually need to buy? Give me the real list.",
   a:"<p>Six things make a grow. Everything else is nice-to-have.</p><ul><li><b>Tent</b> — 2×4 ft is the sweet spot for 1–2 plants; 4×4 for 3–4. Reflective, light-tight, with ports for ducting.</li><li><b>Light</b> — a quality LED bar or board sized to the tent (see the light question below). This is the one place not to go cheap.</li><li><b>Air</b> — a 4-inch or 6-inch inline exhaust fan with a carbon filter, plus one small clip fan for air movement inside. Fresh air in, warm wet air out, smell handled.</li><li><b>Pots and medium</b> — 3–5 gallon fabric pots with a quality potting mix or coco coir. Fabric pots are forgiving on overwatering.</li><li><b>Meters</b> — a pH pen and a cheap thermometer/hygrometer with a min/max memory. You cannot fix what you can't measure.</li><li><b>Timer</b> — a basic outlet timer for the light. Plants count hours; you don't want to.</li></ul><p><b>Rough spend:</b> tent $80–150, light $150–300, fan+filter $80–150, pots/medium $40–60, meters $40, timer $10, nutrients $40. Call it $450–$750.</p><p><b>Skip for now:</b> CO₂, hydro systems, fancy controllers, and anything called a \"kit\" with a no-name light inside.</p>",
   who:"Devin, home grow · Michigan"},
  {q:"How big a tent, and how many plants should I run?",
   a:"<p>Fewer plants, grown bigger, is easier than more plants grown small. Space per plant matters more than plant count.</p><ul><li><b>2×2 ft</b> — one plant. Good for a closet; tight on height.</li><li><b>2×4 ft</b> — one or two plants. Our default recommendation for a first grow.</li><li><b>4×4 ft</b> — three or four plants. Needs a bigger light and more exhaust; this is where a hobby starts looking like a job.</li></ul><p><b>Height matters as much as footprint.</b> Count it up: pot (12 in) + plant (24–36 in) + gap to the light (12–18 in) + the light itself (4–6 in). A 5-ft tent is the minimum; 6-ft is comfortable. Plants roughly double in height after you flip to flower — plan for that.</p><p><b>Where people go wrong:</b> cramming six seedlings into a 2×4. By week 4 of flower they're fighting for light and you're fighting mold.</p>",
   who:"Sam, apartment grow · Illinois"},
  {q:"What light do I need? The numbers are overwhelming.",
   a:"<p>Ignore the marketing watts. Two numbers matter: <b>actual wall draw</b> and <b>footprint</b>.</p><ul><li><b>Rule of thumb:</b> 30–40 true watts of modern LED per square foot of canopy. A 2×4 tent (8 sq ft) wants a 240–320 W light. A 4×4 wants 450–600 W.</li><li><b>Buy bars or a board, not a blurple panel.</b> Full-spectrum white LEDs (Samsung LM301-type diodes are the common benchmark) with a dimmer. The dimmer is how you match the light to the plant's stage.</li><li><b>Hang height:</b> start 18–24 in above seedlings on 40–50% power. Move to 12–18 in at full power in flower. If leaves cup upward or bleach, back off.</li><li><b>If you want one more number:</b> PPFD. Target roughly 300–500 in veg, 600–900 in flower, measured at the canopy. A phone app gets you close enough to start.</li></ul><p><b>Where people go wrong:</b> running a big light at 100% from day one. Seedlings want less; a dimmer is the fix.</p>",
   who:"Kay, first grow · Oregon"},
  {q:"Soil, coco, or hydro?",
   a:"<p>For a first grow: <b>a good potting mix in fabric pots.</b> It buffers your mistakes. Coco is our pick for a second grow once you've got watering figured out.</p><ul><li><b>Soil / potting mix</b> — forgiving, slow to show problems, and a quality mix feeds the plant for the first 3–4 weeks on its own. Downside: harder to correct quickly when something's off.</li><li><b>Coco coir</b> — fast growth and full control, but it holds nothing back: you feed every watering and you water more often. It's what most commercial rooms run, and it's what we design around. Needs a cal-mag habit.</li><li><b>Hydro (DWC, etc.)</b> — fastest of all, and the least forgiving. A pump fails or the water warms up, and you can lose a plant in a day. Not for the first run.</li></ul><p><b>Where people go wrong:</b> buying \"hot\" soil loaded with nutrients and then feeding on top of it. If the bag says it feeds for weeks, believe it — water only until the plant tells you otherwise.</p>",
   who:"Rob, backyard grower · Maine"},
  {q:"Seeds or clones? Autoflower or photoperiod?",
   a:"<p><b>Seeds, feminized, photoperiod</b> is our default for someone learning. Here's why.</p><ul><li><b>Seeds vs clones:</b> clones give you an exact copy of a proven plant and skip two weeks — but they carry whatever the mother had (pests, disease), and a beginner can't tell yet. Seeds are clean and teach you the whole life cycle. Once you know what you're doing, clones from a trusted source are the fastest way to consistent quality.</li><li><b>Feminized</b> means every seed is female. Regular seeds are ~50% male, and males have to be found and removed. Pay for feminized.</li><li><b>Photoperiod vs autoflower:</b> photoperiod plants flower when you change the light schedule to 12 hours — you control the timing and can fix mistakes in veg. Autoflowers flower on their own clock (about 10–12 weeks seed to harvest), which is simple, but there's no pause button: a bad first three weeks is a bad harvest.</li></ul><p><b>Where people go wrong:</b> buying autos for \"easy,\" then stunting them in week two and having no way to recover.</p>",
   who:"Taylor, home grow · Massachusetts"},
  {q:"How often do I water? How do I know?",
   a:"<p>You don't water on a schedule. You water on <b>weight</b>. This is the single biggest skill in growing, and it's the one most beginners get wrong — almost always by overwatering.</p><ol><li><b>Learn the dry weight.</b> Lift the pot when it's freshly watered, then lift it again when the top two inches are dry and it feels noticeably light. That light weight is your trigger.</li><li><b>Water to runoff.</b> When you do water, give enough that 10–20% comes out the bottom. That flushes salts and tells you the whole root zone got wet. Dump the runoff — don't let the pot sit in it.</li><li><b>Then wait.</b> Roots need oxygen. In soil, a 3–5 gallon pot with a small plant can go 3–5 days; a big plant in flower might need it daily. The plant decides, not the calendar.</li><li><b>Measure once in a while.</b> pH your water to 6.2–6.8 in soil, 5.8–6.2 in coco. Check runoff pH and EC every week or two — if runoff EC is climbing well above what you put in, salts are building and it's time for a plain-water flush.</li></ol><p><b>Reading the plant:</b> drooping with a heavy pot = overwatered. Drooping with a light pot = thirsty. Same symptom, opposite fix — which is why you lift first.</p>",
   who:"Morgan, first grow · Arizona"},
  {q:"What temperature and humidity should the tent be?",
   a:"<p>Think of it in three stages, and keep the swing between lights-on and lights-off small.</p><ul><li><b>Seedlings &amp; clones:</b> 75–80°F, 65–75% RH. Warm and humid; they have almost no roots and drink through their leaves.</li><li><b>Veg:</b> 75–82°F, 55–65% RH. Fast growth. Plenty of air movement.</li><li><b>Flower:</b> 72–78°F, 45–55% RH, dropping to 40–45% in the last three weeks. Dense buds plus humidity equals bud rot — this is where the exhaust fan earns its keep.</li><li><b>Lights-off:</b> let it drop 5–10°F, no more. Big drops cause condensation and mold.</li></ul><p><b>If you hear \"VPD\":</b> it's just the combination of temperature and humidity expressed as one number — how hard the air is pulling water out of the leaf. The ranges above land you in the right VPD without doing math. Chase the ranges, not the number, until you're comfortable.</p><p><b>Where people go wrong:</b> a humidifier in veg they forget to remove in flower. Check the hygrometer's min/max every morning for the first month — that's how you catch the lights-off spike.</p>",
   who:"Chris, closet grow · Ohio"},
  {q:"When do I flip to flower, and how long until harvest?",
   a:"<p>Flip when the plant is <b>half the height you want it to finish at</b>, and the tent has room for that. Most home plants flip at 4–6 weeks from seed.</p><ol><li><b>Veg:</b> 18 hours of light, 6 dark. Grow it to roughly half your finished height, 8–10 nodes, nice and bushy. Top it once around node 4–5 if you want a wider, flatter plant.</li><li><b>Flip:</b> change the timer to 12 on / 12 off. The plant reads the long night as fall and starts flowering. Expect a stretch — it can double in height over the next 2–3 weeks.</li><li><b>Flower:</b> 8–10 weeks for most cultivars; the breeder gives a range. Weeks 1–3 is stretch, 4–6 is bulking, 7+ is ripening.</li><li><b>Know when it's done:</b> a cheap jeweler's loupe on the trichomes — the frosty crystals. Clear = too early. Mostly cloudy with a few amber = ready. Lots of amber = heavier, sleepier effect. Pistil color alone is a rough guide; trichomes are the truth.</li></ol><p><b>Where people go wrong:</b> harvesting the week the breeder said, instead of when the plant says. Breeders are optimistic. Add a week and check the loupe.</p>",
   who:"Jordan, home grow · New York"},
  {q:"How do I harvest, dry, and cure without ruining it?",
   a:"<p>Drying is where most home crops lose quality. It's a slow, cool, boring process — and the boring part is the point.</p><ol><li><b>Harvest:</b> cut the plant or branches, remove the big fan leaves, leave the small sugar leaves on for now (they slow the dry). Hang whole branches, not loose buds.</li><li><b>Dry:</b> <b>60°F / 60% RH, 10–14 days</b>, in the dark, with a small fan moving air around the room but never blowing on the flower. The tent itself works fine with the light off and the exhaust on low. Done when small stems snap instead of bend.</li><li><b>Trim:</b> after the dry, trim the sugar leaves. Dry trimming is easier for a beginner and keeps the buds from drying too fast.</li><li><b>Cure:</b> into glass jars, about ¾ full. Open them for a few minutes daily for the first week (\"burping\"), then every few days for another 2–3 weeks. A 62% humidity pack in each jar makes this nearly foolproof.</li></ol><p><b>The two killers:</b> drying too fast (hot, dry room, 3–4 days — harsh smoke, grassy smell that never leaves) and drying too wet (no air movement — mold). If your room can't hold 60/60, a small humidifier or dehumidifier in the space is worth more than any nutrient you'll ever buy.</p>",
   who:"Pat, first harvest · Minnesota"}
];

/* ---------- GENETICS ----------  thc/terps: use "Confirm" to show TBC */
const STRAINS = [
  {name:"Foreign Kush Mints", thc:"30%+", terps:"3%+", lineage:"Kush Mints × (confirm)", flower:"63–70 days", yield:"High", nose:"Mint, fuel, sweet earth", slot:"strain-fkm · macro, 900×1100"},
  {name:"GMO", thc:"30%+", terps:"3%+", lineage:"Chemdog × GSC", flower:"70+ days", yield:"Very high", nose:"Garlic, diesel, funk", slot:"strain-gmo · macro, 900×1100"},
  {name:"Cap Junky", thc:"30%+", terps:"3%+", lineage:"Alien Cookies × Kush Mints", flower:"63–70 days", yield:"High", nose:"Sour fuel, sweet cream", slot:"strain-capjunky · macro, 900×1100"},
  {name:"Moonbeam Gelato", thc:"Confirm", terps:"Confirm", lineage:"Gelato cross (confirm)", flower:"63 days", yield:"Medium–high", nose:"Cream, citrus, berry", slot:"strain-moonbeam · macro, 900×1100"},
  {name:"Mint Choco Chip Pancakes", thc:"Confirm", terps:"Confirm", lineage:"Pancakes × Mint Chocolate Chip (confirm)", flower:"63–70 days", yield:"High", nose:"Mint, cocoa, batter", slot:"strain-mccp · macro, 900×1100"},
  {name:"Blueberry Pancakes", thc:"Confirm", terps:"Confirm", lineage:"Blueberry × Pancakes (confirm)", flower:"63 days", yield:"High", nose:"Blueberry, syrup, vanilla", slot:"strain-bbp · macro, 900×1100"}
];

/* ---------- INSTAGRAM POSTS ----------
   url: the post's link (open the post on Instagram → ··· → Copy link)
   img: a square-ish image saved to images/ig/ (download from the post or reuse the original photo)
   cap: one short line, shown on hover */
const IG_URL='https://www.instagram.com/Honey.Harvest.Solutions';
const POSTS=[
  {url:IG_URL,img:'images/proof-01.jpg',cap:'Aisle view, week 7 under HPS'},
  {url:IG_URL,img:'images/strain-fkm.jpg',cap:'Foreign Kush Mints, day 63'},
  {url:IG_URL,img:'images/hero-03.jpg',cap:'Full canopy, LED flower'},
  {url:IG_URL,img:'images/gir-feature.jpg',cap:'Late flower, purple fade'},
  {url:IG_URL,img:'images/proof-06.jpg',cap:'Prop room, fresh cuts'},
  {url:IG_URL,img:'images/pkg-full.jpg',cap:'Greenhouse bench, 1,200 sites'},
  {url:IG_URL,img:'images/strain-moonbeam.jpg',cap:'Macro, week 8'},
  {url:IG_URL,img:'images/about-04.jpg',cap:'Top cola'},
  {url:IG_URL,img:'images/proof-03.jpg',cap:'Veg wing'},
  {url:IG_URL,img:'images/designs/A300-thumb.jpg',cap:'AVS MN — facility cutaway'},
  {url:IG_URL,img:'images/note-03.jpg',cap:'Trellis, mid-stretch'},
  {url:IG_URL,img:'images/proof-04.jpg',cap:'Frost'}
];

/* ---------- DESIGN SHEETS ----------  id = file name in images/designs/ (A100.jpg + A100-thumb.jpg) */
const SHEETS=[
  {id:'A100',title:'Overall floor plan',desc:'Four-room program on a 76′ × 48′ footprint — flex/circulation, dry, and dual flower with canopy math on the sheet.'},
  {id:'A200',title:'Lighting layout',desc:'Fixture placement by room with PPFD targets and typical flower-bench detail.'},
  {id:'A201',title:'Dry room plan & section',desc:'Hang-dry capacity, rack spacing, and the airflow section — sized for the flower coming out of the rooms.'},
  {id:'A300',title:'Facility cutaway',desc:'Isometric of Phase 1 as designed — racks, mechanical, dehumidification, and the plant flow through the building.'},
  {id:'A301',title:'Dry room 3D',desc:'Racks and airflow in three dimensions, with the equipment schedule.'},
  {id:'M200',title:'Mechanical plan',desc:'HVAC and dehumidification equipment placement, duct routing, and condensate.'},
  {id:'M300',title:'Flower room — integrated services',desc:'Lighting, airflow, irrigation, and sensors coordinated on one rack in 3D, with clearances.'},
  {id:'M301',title:'In-rack airflow',desc:'Per-tier fan schedule and the air path across the canopy — the detail that keeps a multi-tier room even.'}
];
