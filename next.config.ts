import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'products-images-source.s3.ap-southeast-2.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd3do62bx9kig63.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
