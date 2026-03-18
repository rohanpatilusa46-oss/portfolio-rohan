import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/projects/lensapp',
        destination: 'https://lensapp-omega.vercel.app',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;