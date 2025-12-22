import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/lp-paint",
        has: [
          {
            type: "host",
            value: "paintkraft.in",
          },
        ],
      },
      {
        source: "/",
        destination: "/lp-paint",
        has: [
          {
            type: "host",
            value: "www.paintkraft.in",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
