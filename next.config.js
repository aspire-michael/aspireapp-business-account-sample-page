/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // These images are hotlinked from Webflow's CDN for this sample.
    // Webflow's CDN blocks the server-side fetch Next's Image Optimization
    // relies on (it isn't a normal browser request), which shows up as
    // broken images even though the URLs work fine in a plain <img> tag.
    // Skipping optimization renders a plain <img>, so the browser fetches
    // the image directly instead. Swap for owned/optimizable assets and
    // remove `unoptimized` when this moves past the sample stage.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

module.exports = nextConfig;
