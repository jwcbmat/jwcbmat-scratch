/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      }
    ]
  }
};

export default nextConfig;

