/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BasePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
