import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  // ✅ Static export (for cPanel, GitHub Pages, Netlify static, etc.)
  output: "export",

  // ✅ Images not optimized (required for export)
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withMDX(nextConfig);
