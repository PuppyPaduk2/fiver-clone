/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    SERVER_URL: "https://fiver-clone-node-sbhvt.kinsta.app",
  },
};

module.exports = nextConfig;
