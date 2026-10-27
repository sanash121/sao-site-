# SAO — Athleisure Website Template

A minimal, editorial one-page template for an Indian gym-wear / luxury
athleisure brand, in the spirit of Gymshark and OnerActive: bone/ink
palette, one moss-green accent, tight condensed display type, and a
flip-to-spec product card as the signature interaction.

## Open it
Double-click `index.html`, or drag the whole folder into any browser.
No build step, no dependencies to install.

## What's inside
- `index.html` — full page: hero, women's grid, fabric-tech strip,
  men's grid, editorial/story split, reviews, newsletter band, footer
- `styles.css` — all design tokens (colors, type, spacing) live at the
  top of the file under `:root`
- `script.js` — filter-chip active states + "Add to Bag" counter demo

## Photography
Every image is hotlinked from Unsplash's free CDN (real, freely
licensed editorial/product photography, not placeholders) so the zip
stays lightweight and the page renders fully as soon as you open it
online. Before launch, swap the `src` attributes in `index.html` for
your own product shoots — search "SAO" in the file to jump to each
`<img>` tag; alt text describes what each one should show.

## Pricing
Sample prices reflect the current Indian premium-athleisure DTC
market (roughly ₹999 for a basic tank up to ₹3,999 for fleece
outerwear) — positioned above mass sportswear, below the true luxury
international brands. Adjust freely in `index.html`; prices live next
to each product card and inside the hover spec-tag.

## Customizing
- **Colors / fonts** — edit the `:root` block at the top of `styles.css`
- **Copy** — all headline and body text is plain HTML in `index.html`
- **Products** — duplicate a `<article class="card">...</article>`
  block to add a product; each has a front face (image + price) and a
  back face (fabric spec) that flips on hover
- **Logo** — currently a text wordmark (`SAO`); swap `.logo` for an
  `<img>` if you have a mark
- **Checkout / cart** — this is a front-end template only; the "Add to
  Bag" and newsletter form are visual demos and need to be wired to a
  real backend (Shopify, WooCommerce, or a custom cart) to actually
  transact

## Responsive
Tested down to mobile: nav collapses, hero stacks, product grid goes
to 2 then 1 column, and the hover-flip card falls back to a static
front face on touch devices (≤620px) where hover doesn't apply.
