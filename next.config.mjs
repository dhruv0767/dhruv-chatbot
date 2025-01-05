/** @type {import('next').NextConfig} */
import fs from "fs";
import withLlamaIndex from "llamaindex/next";
import webpack from "./webpack.config.mjs";

// Read the JSON configuration
const nextConfig = JSON.parse(fs.readFileSync("./next.config.json", "utf-8"));

// Replace deprecated `serverComponentsExternalPackages` with `serverExternalPackages`
if (nextConfig.experimental && nextConfig.experimental.serverComponentsExternalPackages) {
  nextConfig.experimental.serverExternalPackages =
    nextConfig.experimental.serverComponentsExternalPackages;
  delete nextConfig.experimental.serverComponentsExternalPackages; // Remove the deprecated key
}

// Add webpack configuration
nextConfig.webpack = webpack;

// Use withLlamaIndex to modify Next.js configuration for LlamaIndex
export default withLlamaIndex(nextConfig);
