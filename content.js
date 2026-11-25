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
  {q:"My new growth is pale and yellow between the veins. Iron?", a:"<p>Probably, but check availability before you add anything. Pull root-zone pH and EC first. In most cases I've chased, high pH or accumulated salts locked out iron that was already in the feed — and a chelate top-dress just delays the real fix. Correct the root zone, then decide.</p>", who:"Marcus, small commercial · Michigan"},
  {q:"What's the one thing a first-time home grower should spend money on?", a:"<p>Environment control, not lights. A decent light and a room that holds temperature and humidity will beat a great light in a room that swings 15 degrees. Second: a way to measure runoff pH and EC. You can't fix what you can't see.</p>", who:"Dana, home grow · Ohio"},
  {q:"How long should I dry?", a:"<p>Ten to fourteen days at roughly 60°F / 60% RH, with gentle air movement that never blows directly on the flower. If your room can't hold those numbers for the first 48 hours when it's full of wet plants, your dry room is undersized — that's a mechanical problem, not a patience problem.</p>", who:"Priya, craft · Minnesota"},
  {q:"Rolling benches or fixed? We're designing a 3,000 sq ft grow.", a:"<p>Rolling, almost always, at that size. You get a meaningful canopy increase from removing aisles and every task gets faster because the plants come to you. The exceptions are very narrow rooms and operations that need constant access from every side.</p>", who:"Jordan, license applicant · New Jersey"},
  {q:"Is 30% THC real or is it lab shopping?", a:"<p>Both exist. On the right genetics, with the environment and cure dialed, 30%+ is real and repeatable — I run cultivars that do it. But a number without a terpene profile and without consistency across rooms is just a number. Ask for the whole picture.</p>", who:"Alex, retail buyer · Illinois"}
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
