# Honey Harvest Solutions, website

One page (`index.html`), one content file (`content.js`), one images folder. No build step.

## Files
| File | What it is | Edit it? |
|---|---|---|
| `index.html` | The whole site, design, pages, logic | Rarely. Ask before changing. |
| `content.js` | Field notes, Q&A, genetics, Instagram posts, design sheets | **Yes, this is where you add things.** |
| `images/` | Photos (`hero-01.jpg` …), `images/designs/` sheets, `images/ig/` Instagram tiles | Add files here |
| `netlify.toml` | Hosting settings | No |

## Add a field note (blog post)
1. Open `content.js`, find `const NOTES = [`.
2. Copy the first `{ … },` block, paste it directly under the `[`, and change `id`, `topic`, `date`, `read`, `title`, `dek`, `slot`, `body`.
3. Put the cover photo at `images/<slot>.jpg` (e.g. `note-05` → `images/note-05.jpg`). Around 1400 px wide, under 300 KB.
4. Save → commit → the site redeploys in about a minute. The post appears on the home page, The Beehive, and at `#beehive/<id>`.

`body` is HTML. These are all you need: `<p>…</p>`, `<h3>…</h3>`, `<ul><li>…</li></ul>`, `<blockquote>…</blockquote>`, `<strong>…</strong>`.

## Add an Instagram post
1. On the post: ··· → **Copy link**.
2. Save a square image of it to `images/ig/` (screenshot or the original photo).
3. In `content.js`, find `const POSTS=[` and add at the top: `{url:'PASTE LINK',img:'images/ig/FILE.jpg',cap:'short caption'},`
4. The first 6 show on the home page; all show on The Beehive.

*Want it automatic?* Connect a feed widget (Behold.so has a free tier) to the Instagram account and paste its embed in place of the `ig-grid` div. Ask and it's a 10-minute change.

## Answer a question / add a strain / add a design sheet
Same idea, find `QA`, `STRAINS`, or `SHEETS` in `content.js` and add a block at the top.

## Forms (contact, Ask a Grower, email list, clone waitlist)
Hosted on Netlify, every form submission lands in **Netlify → Forms**, and you get an email per submission once you turn on notifications (Site settings → Forms → Form notifications → add tylerking@honeyharvestsolutions.com). No code involved.

To feed the email list into MailerLite (or similar): Netlify → Forms → `email-list` → Notifications → Outgoing webhook, or use Zapier's "Netlify form → MailerLite subscriber" recipe.

## Editing without installing anything
Open the repo on GitHub → click `content.js` → pencil icon → edit → **Commit changes**. Netlify sees the commit and redeploys. Images: GitHub → `images/` → Add file → Upload files.

## Swapping a photo
Replace the file in `images/` using the same name. Done.

## Things still marked as placeholders
- Partner logos (Facility Design page, home partner strip), look for `PARTNER LOGO` in `index.html`.
- Genetics figures marked "Confirm".
- Legal page text.
- Instagram tiles currently use site photos and link to the profile until real post links are added.

## Lead magnet
`downloads/hhs-home-grow-checklist.pdf` is the free download offered on the email-list band.
Rebuild it after editing `downloads/build_checklist.py`: `python3 downloads/build_checklist.py`
(needs `pip install weasyprint`). The welcome email in MailerLite links to the same file.
