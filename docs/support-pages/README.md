# Support and project pages

Implemented 2026-09-23 at `/faq`, `/testimonials` and `/gallery`.

## Source and adaptation

Source repository: `access-op-digital/organized-living`, branch `faq-page`,
commit `c470e262649abe1b080bad4a91d4660764bc963f`. Its Vercel configuration maps
the three supplied routes to the corresponding files in `pages/`.

The live references redirected to a Vercel account area blocked by automatic
browser review. The source branch was available through the configured Git
account, and its actual HTML and stylesheet were inspected locally.

The source composition is retained with the approved Playfair Display /
Montserrat typography, #0032A0 blue, shared logo, header, buttons and footer.
The index and room-page footers link to the new routes.

Content retained: 59 FAQ questions in ten categories, three attributed reviews,
three story summaries, six builder names, recognition and six project records.
Quotes and project-record fields match the supplied source exactly. These
source records have not been independently recertified as current endorsements
or project specifications.

The existing commercial voice was applied to surrounding copy. Older FAQ
statements were aligned with the verified room pages on materials, EDGE scope,
component compatibility, load conditions, dispatch versus delivery and warranty
terms. The original client-input marker for unpublished homeowner photographs
was replaced with a residential planning route. No photos, videos, ratings or
testimonial quotations were invented. Full FAQ before/after records are in
`source-adaptations.json`.

The ADA and federal procurement answers use qualified guidance and link to
the [Access Board's reach standards](https://www.access-board.gov/ada/#ada-308)
and [federal domestic-content guidance](https://www.madeinamerica.gov/resources/financial-assistance/).
The source's universal federal-exemption threshold was removed because agency
requirements and waivers vary. Product wording also follows the existing
room-page records and official [VUE](https://organizedliving.com/products/vue),
[EDGE](https://organizedliving.com/products/freedomrailEDGE) and
[Support](https://organizedliving.com/support) information. The 2026 BUILD award
appears on the [manufacturer's homepage](https://organizedliving.com/).

## Verification

- All three local routes return HTTP 200, with valid scripts, styles and local
  links. Each has one H1, unique IDs, staging noindex and its target canonical.
- FAQ structured data contains 59 questions; question and answer text match the
  visible HTML. All 59 native details are open in the source for the no-JS path.
- Desktop (1280px): every topic filter and All Questions produce the expected
  groups and counts. Twenty-one sampled accordions open by click and close by
  keyboard. A direct question link selects its topic and opens the answer.
- Mobile (390px): all eleven category states work, the topic menu closes after
  selection, and customer-service contact details expand. All three site menus
  open and close with Escape. No page-width overflow was observed.
- FAQ, Testimonials and Project Gallery navigation works between the pages.
  Desktop and mobile layouts were visually checked. Computed typography uses
  Playfair Display and Montserrat; the hero computes to RGB(0, 50, 160).
- The main content of every existing room page is unchanged. The added footer
  navigation is the only room-page HTML change. Source hashes were refreshed.
- JavaScript syntax passed `node --check`. Vercel remains a static deployment
  without an installation or build step.

`static-verification.json` and `content-verification.json` provide the count,
schema, quote, project-record and route checks. Run `python preview.py --port 8000`
from the repository to inspect the site locally.
