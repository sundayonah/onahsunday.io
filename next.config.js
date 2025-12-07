/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// Base config that applies to both dev and production
const baseConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 180,
  images: {
    domains: ['github.com'],
    unoptimized: true, // Required for static export
  },
  // Reduce the number of static pages generated concurrently
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  trailingSlash: true, // Helps with GitHub Pages routing
  // Optional: Enable webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Add any webpack optimizations here if needed
    return config
  },
}

// Production-only config (for GitHub Pages)
const prodConfig = isProd ? {
  output: 'export', // Enable static export for GitHub Pages
  basePath: '/onahsunday.io', // Your GitHub repo name
  assetPrefix: '/onahsunday.io/', // Ensure assets load correctly
} : {}

// Merge configs
const nextConfig = {
  ...baseConfig,
  ...prodConfig,
}

module.exports = nextConfig