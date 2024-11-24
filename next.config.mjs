/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/school-mgt-nextjs",
  output: "export",
  reactStrictMode: true,
  images: { 
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
