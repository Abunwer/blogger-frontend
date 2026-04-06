import type { NextConfig } from "next";

const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v2");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      apiUrl,
      {
        protocol: "http",
        hostname: "backend",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
