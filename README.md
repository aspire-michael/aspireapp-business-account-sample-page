# Aspire business account — Next.js/Tailwind sample

A sample recreation of four sections from
[aspireapp.com/business-account](https://aspireapp.com/business-account),
rebuilt with Next.js (App Router) and Tailwind CSS.

## Sections included

1. **Hero** — "The online business account for fast-growing businesses"
   (`components/Hero.tsx`)
2. **Multi-currency account** — "A multi-currency business account built for
   global business" (`components/MultiCurrencyAccount.tsx`)
3. **Fast and transparent international payments**
   (`components/FastTransparentPayments.tsx`)
4. **Choosing the right business account** — a real drag/swipe slider built
   on the `swiper` package (`components/ChoosingRightAccount.tsx` +
   `components/CardSlider.tsx`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes on fidelity to the live site

- **Copy** is taken directly from the live page's headings and body text.
- **Colors** use Aspire's real brand tokens (ink `#181818`, mint `#BEFFCF`,
  mint-grey `#F2F7F4`, dark-green `#2E332F`) defined in
  `tailwind.config.ts`.
- **Type**: body copy uses Inter via `next/font/google`. Headings use
  Satoshi — Aspire's real display face — linked from Fontshare in
  `app/layout.tsx` since Satoshi isn't on Google Fonts. Swap that `<link>`
  for a self-hosted `next/font/local` setup if you have the licensed woff2
  files.
- **Logo**: no Aspire logo asset is included in this sample. Swap in the
  official SVG from your design system before shipping — don't redraw or
  approximate it.
- **Images**: hero, account, payments, and slider card images are hotlinked
  from the live site's CDN (`cdn.prod.website-files.com`) as placeholders
  for this sample — replace with your own asset pipeline.
- **Slider**: `CardSlider.tsx` uses the real `swiper` npm package (not a
  CDN script) with drag/swipe, momentum, and clickable pagination dots.
  Cards are sized 415×650px on desktop and scale to `78vw` (same aspect
  ratio) below the `sm` breakpoint.
- Interactive elements are keyboard accessible and show visible focus
  states; motion respects `prefers-reduced-motion` via `app/globals.css`.

## Pushing to GitHub

This project is already git-initialized with an initial commit (tagged
`v2`). To push it to a new GitHub repo:

```bash
# create an empty repo on GitHub first, then:
git remote add origin <your-new-repo-url>
git branch -M main
git push -u origin main --tags
```

If you'd rather start fresh, delete the `.git` folder and run `git init`
yourself.

## Versioning

Starting with this release, packaged handoffs are versioned and suffixed
accordingly (e.g. `aspire-business-account-sample-v2.zip`). See
`CHANGELOG.md` for what changed in each version. The `package.json`
version field is kept in sync with the same number.

## Not included

The comparison table, testimonials carousel, account-opening steps, and FAQ
accordions from the live page are out of scope for this sample — only the
four requested sections are built out.
