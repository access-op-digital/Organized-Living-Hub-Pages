# Reference adaptation contract

Goal: replicate `/faq`, `/testimonials` and `/gallery` in the current static repo
for homeowners and building professionals, using the approved closet-page brand.

| Evidence | Confidence | Use |
| --- | --- | --- |
| Three user-supplied Vercel URLs | Provided | Requested pages and routes |
| Matching source repository `faq-page` branch | Observed | Actual deployed HTML, JSON content, CSS and interactions |
| Existing Bedroom DESIGN.md and CSS | Observed | Brand colors, type, shared header/footer, spacing and controls |
| Prior commercial voice and product checks | Provided/observed | Copy adaptations and narrow factual corrections |

| Reference | Keep | Change | Do not copy |
| --- | --- | --- | --- |
| FAQ | 59 questions, ten categories, sidebar, contact details, accordions | Brand tokens, shared chrome, keyboard/fallback behavior, older product wording | Alternate brand fonts, unsupported absolutes |
| Testimonials | Attributed quotes, story summaries, builder names, recognition | Typography, spacing and commercial CTA wording | Fabricated ratings or video links |
| Gallery | Six project names and specifications, housing and system coverage | Brand treatment and narrow product wording | Editorial client-input marker or invented before/after photos |

Design stance: the source page composition remains recognizable, while its
header, palette, type and controls belong to the existing room-page collection.

The Vercel URLs redirect to an account area blocked by automatic browser review.
The named source branch is available through the configured Git account; its
static pages can be inspected locally without entering Vercel's account area.
No matching photographs or playable videos are present in the reference files.

Quality gate: content-count and quote preservation, valid routes/anchors/schema,
working FAQ category/disclosure/deep-link behavior, desktop/mobile visual checks,
no page overflow, shared-brand computed styles and successful Vercel deployment.
