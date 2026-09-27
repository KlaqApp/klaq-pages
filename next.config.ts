import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files.
  output: "export",
  // Keeps /privacy/ and /terms-and-conditions/ identical to the URLs already registered on the stores.
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: {
    // Each locale has its own root layout (for <html lang>), so the 404 can't compose from a shared one.
    globalNotFound: true,
  },
};

export default nextConfig;
