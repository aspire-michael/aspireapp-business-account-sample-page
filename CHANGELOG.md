# Changelog

## v2

- Fixed broken images in production: added `unoptimized: true` to `next.config.js` so Next.js renders a plain `<img>` for the hotlinked Webflow CDN assets instead of routing them through server-side Image Optimization, which the CDN's anti-hotlinking rules were blocking.
- Multi-currency section: swapped to image-left / text-right on desktop, with mobile order corrected so text still stacks above the image.
- Full-width CTA buttons on mobile across the hero and payments sections (auto-width from `sm` breakpoint up).
- Slider card titles set to 30px.
- Slider now stays draggable at wide desktop widths (1440px+) by constraining its wrapper to the same max-width as the rest of the page, so the fixed-size cards always overflow.
- Added `.gitignore` and repo housekeeping for GitHub handoff.

## v1

- Initial four-section build: Hero, multi-currency account, fast/transparent payments, choosing the right business account (slider).
- Real production imagery and copy pulled from the live page.
- Brand tokens (ink, mint, mint-grey, dark-green) and Satoshi/Inter typography matched to Aspire's design system.
- Slider rebuilt on the real `swiper` npm package for authentic drag/swipe behavior.
