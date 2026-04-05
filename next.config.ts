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
        destination: 'https://secondbrain-chi-ten.vercel.app',
        permanent: false,
      },
      {
        source: '/projects/interview',
        destination: 'https://interviewqs-seven.vercel.app/',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;