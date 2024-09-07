   /** @type {import('next').NextConfig} */
   const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.externals.push("hardhat");
      return config;
    },
  }

  module.exports = nextConfig