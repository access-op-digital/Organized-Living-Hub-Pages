# Organized Living Hub Pages

Static staging site for Organized Living hub and category pages. Plain HTML and
CSS, no build step, no framework, deployed on Vercel.

## Pages

| File | Serves at | Target production URL | Primary query |
| --- | --- | --- | --- |
| `index.html` | `/` | n/a, staging index | n/a |
| `bedroom-closet.html` | `/bedroom-closet` | `organizedliving.com/bedroom-closet` | `bedroom closet` |
| `linen-closet.html` | `/linen-closet` | `organizedliving.com/linen-closet` | `linen closet`, 9,900/mo |

## Local preview

```
python preview.py --port 8000
```

Then open `http://127.0.0.1:8000/bedroom-closet`. The included standard-library
preview server resolves extensionless HTML paths like Vercel's `cleanUrls` and
binds to the local computer only. No package installation is required.

## Bedroom page

`bedroom-closet.css` and `bedroom-closet.js` provide the page's responsive styles
and keyboard-accessible tabs. Native disclosures work without JavaScript; all
tab content remains readable when JavaScript is unavailable. The source and
design mapping is documented under `docs/bedroom/`. This page follows the
approved Vercel sample's Playfair Display / Montserrat typography and brand
palette. The existing linen page is unchanged.

## Deploy

Vercel builds this repo root as static files. Framework preset **Other**, build
command **empty**, output directory **empty**, install command **empty**.
`vercel.json` supplies the clean URLs and the headers, so nothing else needs
configuring. A push to `main` deploys to production; any other branch gets a
preview URL.

## Conventions

- **Filenames are lowercase and hyphenated.** `linen-closet.html`, never
  `Linen Closet.html`. Spaces and capitals break URLs on Vercel's
  case-sensitive filesystem.
- **Never link with the `.html` suffix.** `cleanUrls` is on, so Vercel redirects
  `/linen-closet.html` to `/linen-closet` and the redirect breaks anchors.
- **Image and asset paths are absolute URLs** to `organizedliving.com`. These
  pages are previews of production pages; pointing at the live asset host means
  the staging copy always shows what production would show, and no binaries need
  to live in this repo.
- **No build step.** Plain HTML, CSS and vanilla JS only. Adding a bundler makes
  Vercel look for an output directory that does not exist.

## Indexing

Every page is `noindex, nofollow` twice over: a meta tag in the document and an
`X-Robots-Tag` header from `vercel.json`, with `robots.txt` disallowing
everything. Each page also carries a canonical pointing at its production URL.

This is deliberate. Staging holds near-identical copies of pages that are meant
to rank on organizedliving.com, and an indexable duplicate would compete with the
live site for the same queries. When a page moves to production, remove the
noindex there, not here.
