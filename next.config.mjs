// Static export: `next build` writes plain files to ./out, which Netlify serves.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
