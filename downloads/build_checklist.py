from weasyprint import HTML, CSS
import os
HERE=os.path.dirname(os.path.abspath(__file__))
LOGO=os.path.join(HERE,'..','images','logo-gold.png')

def box(items):
    return ''.join(f'<li><span class="cb"></span><span>{i}</span></li>' for i in items)

html=f'''<!doctype html><html><head><meta charset="utf-8"><style>
@page {{ size: letter; margin: 0.5in 0.6in 0.6in; background:#0b0b0b;
  @bottom-left {{ content:"Honey Harvest Solutions · honeyharvestsolutions.com"; font-family:Poppins; font-size:8pt; color:#8a8a8a; letter-spacing:.06em }}
  @bottom-right {{ content:"Page " counter(page) " of " counter(pages); font-family:Poppins; font-size:8pt; color:#8a8a8a }} }}
html,body {{ background:#0b0b0b; color:#e9e4d8; font-family:Poppins; font-weight:300; font-size:9.1pt; line-height:1.4; margin:0 }}
h1,h2,h3 {{ font-family:Lora; font-weight:400; margin:0 }}
.top {{ display:flex; justify-content:space-between; align-items:flex-end; border-bottom:1px solid #c9a44c; padding-bottom:10pt; margin-bottom:14pt }}
.top img {{ height:34pt }}
.kicker {{ font-size:7.5pt; letter-spacing:.22em; text-transform:uppercase; color:#c9a44c }}
h1 {{ font-size:30pt; line-height:1.05; color:#f4efe4; margin-top:4pt }}
.lede {{ color:#bdb6a6; margin:6pt 0 0; font-size:10pt; max-width:5.6in }}
h2 {{ font-size:15pt; color:#f4efe4; margin:0 0 6pt; padding-top:4pt }}
h2 small {{ font-family:Poppins; font-size:7.5pt; letter-spacing:.2em; text-transform:uppercase; color:#c9a44c; display:block; margin-bottom:3pt; font-weight:400 }}
.sec {{ border:1px solid #2a2a2a; background:#121212; padding:9pt 12pt; margin-bottom:8pt; break-inside:avoid }}
ul {{ list-style:none; padding:0; margin:0; columns:2; column-gap:18pt }}
ul.one {{ columns:1 }}
li {{ display:flex; gap:7pt; align-items:flex-start; margin:0 0 4.5pt; break-inside:avoid }}
.cb {{ flex:none; width:9pt; height:9pt; border:1px solid #c9a44c; margin-top:2.5pt; border-radius:1pt }}
b {{ font-weight:500; color:#f4efe4 }}
table {{ width:100%; border-collapse:collapse; font-size:8.4pt; table-layout:fixed; margin-top:4pt }}
th {{ text-align:left; font-weight:400; color:#c9a44c; font-size:7.5pt; letter-spacing:.14em; text-transform:uppercase; padding:4pt 6pt; border-bottom:1px solid #c9a44c }}
td {{ padding:5pt 6pt; border-bottom:1px solid #222; vertical-align:top }}
td:first-child {{ color:#f4efe4; font-weight:500 }}
.two {{ display:flex; gap:10pt }} .two>div {{ flex:1 }}
.note {{ color:#bdb6a6; font-size:8.8pt; margin-top:6pt }}
.cta {{ border:1px solid #c9a44c; padding:10pt 14pt; margin-top:2pt; display:flex; justify-content:space-between; align-items:center; gap:14pt }}
.cta h3 {{ font-size:14pt; color:#f4efe4 }}
.cta p {{ margin:3pt 0 0; color:#bdb6a6; font-size:9pt }}
.cta .price {{ font-family:Lora; font-size:22pt; color:#c9a44c; white-space:nowrap }}
</style></head><body>

<div class="top"><div><div class="kicker">Free download · Honey Harvest Solutions</div>
<h1>The Home Grow Room Checklist</h1>
<p class="lede">Everything a first grow needs, in the order you need it, from the rules check to the cure jar. Print it, tape it to the tent, check it off.</p></div>
<img src="file://{LOGO}"></div>

<div class="sec"><h2><small>Step 1</small>Before you buy anything</h2>
<ul class="one">{box([
 "<b>Know your rules.</b> Plant count, out-of-public-view requirement, renter/landlord terms. State and city both.",
 "<b>Pick the space.</b> Outlet nearby, a way to pull air in and push it out, no 20° day/night swing. Closet, corner, or 2×4 ft tent.",
 "<b>Measure the height.</b> Pot 12\" + plant 24–36\" + gap to light 12–18\" + light 4–6\". A 5 ft tent is minimum; 6 ft is comfortable.",
 "<b>Set the budget.</b> $450–$750 for a setup that won't need replacing. Under $400 usually means buying twice.",
 "<b>Decide the plant count.</b> One or two for a 2×4. Fewer plants grown bigger beats more plants grown small.",
])}</ul></div>

<div class="sec"><h2><small>Step 2</small>The build list</h2>
<ul>{box([
 "<b>Tent</b>, 2×4 ft (1–2 plants) or 4×4 ft (3–4). Light-tight, ducting ports.",
 "<b>Light</b>, full-spectrum white LED bar/board with a dimmer. 30–40 true W per sq ft (2×4 → 240–320 W).",
 "<b>Exhaust fan + carbon filter</b>, 4\" for a 2×4, 6\" for a 4×4. Speed control.",
 "<b>Clip fan</b>, one small oscillating fan for air movement inside.",
 "<b>Fabric pots</b>, 3–5 gal, one per plant, with saucers.",
 "<b>Medium</b>, quality potting mix (first grow) or coco coir (second grow).",
 "<b>pH pen</b> + calibration solution.",
 "<b>Thermometer/hygrometer</b> with min/max memory, hang it at canopy height.",
 "<b>Outlet timer</b> for the light.",
 "<b>Nutrients</b>, a simple 2-part veg/bloom line, plus cal-mag if you run coco.",
 "<b>Feminized seeds</b>, photoperiod for your first run.",
 "<b>Jeweler's loupe</b> (30–60×) for reading trichomes at harvest.",
 "<b>Extras worth it:</b> rope ratchets, a watering can with a narrow spout, trellis net, 62% humidity packs for the cure.",
 "<b>Skip for now:</b> CO₂, hydro systems, controllers, no-name \"kits.\"",
])}</ul></div>

<div class="cta"><div><h3>Want the plan done for you?</h3>
<p>The <b>Starter design ($99)</b> turns this checklist into a build list, layout, and schedule for your exact space. The <b>Room design ($299)</b> adds lighting, airflow, and a feed program. honeyharvestsolutions.com → Work With Us.</p></div>
<div class="price">from $99</div></div>
<div style="break-before:page"></div>
<div class="sec"><h2><small>Step 3</small>Dial-in targets by stage</h2>
<table><colgroup><col style='width:15%'><col style='width:12%'><col style='width:13%'><col style='width:11%'><col style='width:19%'><col style='width:30%'></colgroup><tr><th>Stage</th><th>Light schedule</th><th>Temp (lights on)</th><th>Humidity</th><th>Light power / height</th><th>Water &amp; feed</th></tr>
<tr><td>Seedling (wk 1–2)</td><td>18 on / 6 off</td><td>75–80°F</td><td>65–75%</td><td>40–50% · 18–24" above</td><td>Light sips around the stem. No feed in soil; ¼ strength in coco.</td></tr>
<tr><td>Veg (wk 3–6)</td><td>18 on / 6 off</td><td>75–82°F</td><td>55–65%</td><td>60–80% · 18" above</td><td>Water to 10–20% runoff when the pot is light. Veg feed, ½ → full.</td></tr>
<tr><td>Flower, stretch (wk 1–3)</td><td>12 on / 12 off</td><td>72–78°F</td><td>50–55%</td><td>80–100% · 12–18" above</td><td>Switch to bloom feed. Plant may double in height, raise the light.</td></tr>
<tr><td>Flower, bulk (wk 4–6)</td><td>12 / 12</td><td>72–78°F</td><td>45–50%</td><td>100% · 12–18" above</td><td>Heaviest feeding. Check runoff EC; flush if it climbs well above input.</td></tr>
<tr><td>Flower, ripen (wk 7+)</td><td>12 / 12</td><td>70–76°F</td><td>40–45%</td><td>100% · watch for bleaching</td><td>Taper feed. Plain water the last 7–10 days. Loupe the trichomes.</td></tr>
<tr><td>Lights off (all stages)</td><td>, </td><td>Drop 5–10°F, no more</td><td>Watch the spike</td><td>, </td><td>Big temperature drops = condensation = mold.</td></tr>
</table>
<p class="note"><b>pH:</b> 6.2–6.8 in soil, 5.8–6.2 in coco. <b>The watering rule:</b> lift the pot. Heavy = wait. Light = water to runoff, then dump the runoff.</p></div>

<div class="two">
<div class="sec"><h2><small>Step 4</small>The weekly routine</h2>
<ul class="one">{box([
 "<b>Every day (2 min):</b> read the min/max on the hygrometer, reset it. Lift the pots. Look under a few leaves.",
 "<b>Every watering:</b> pH the water. Water to runoff. Note the date on tape on the pot.",
 "<b>Weekly:</b> check runoff pH/EC on one plant. Clean the clip fan. Raise the light if needed. Tuck or train.",
 "<b>Week 4–5 of veg:</b> top once at node 4–5 if you want a flat, wide plant.",
 "<b>At flip:</b> set the timer to 12/12, pull any humidifier, add the trellis net.",
 "<b>Weeks 3+ of flower:</b> humidity is the enemy. Exhaust up, defoliate the shaded inside leaves lightly.",
])}</ul></div>
<div class="sec"><h2><small>Step 5</small>Harvest, dry, cure</h2>
<ul class="one">{box([
 "<b>Ready when:</b> trichomes mostly cloudy with a few amber under the loupe, not when the breeder's calendar says.",
 "<b>Harvest:</b> cut branches, strip the big fan leaves, hang whole. Leave sugar leaves on.",
 "<b>Dry:</b> 60°F / 60% RH, 10–14 days, dark, air moving in the room but never on the flower. Stems snap, not bend.",
 "<b>Trim:</b> after the dry, not before.",
 "<b>Cure:</b> jars ¾ full with a 62% pack. Burp daily for a week, then every few days for 2–3 weeks.",
 "<b>Never:</b> dry in 3–4 days in a hot room. That grassy smell never leaves.",
])}</ul></div>
</div>



</body></html>'''
out=os.path.join(HERE,'hhs-home-grow-checklist.pdf')
HTML(string=html,base_url=HERE).write_pdf(out)
print(out)
