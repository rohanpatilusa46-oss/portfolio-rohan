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
      {
        source: '/projects/chatbot',
        destination: 'https://adaptive-rag-chatbot2.vercel.app',
        permanent: false,
      },
      {
        source: '/projects/secondbrain',
        destination: 'https://secondbrain-no67vr0k2-rohanpatilusa46-oss-projects.vercel.app/',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;