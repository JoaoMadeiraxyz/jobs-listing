/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["jobicy.com"],
  },
  reactStrictMode: true,
  distDir: 'dist',
};

export default nextConfig;
