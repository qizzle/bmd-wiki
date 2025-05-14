import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  devIndicators: false,
  images: {
    remotePatterns: [new URL("https://steamuserimages-a.akamaihd.net/**")],
  },
};

export default withMDX(config);
