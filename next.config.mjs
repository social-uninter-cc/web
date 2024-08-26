import createMDX from "@next/mdx";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "md", "mdx"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
