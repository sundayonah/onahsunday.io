/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for GitHub Pages
  basePath: '/onahsunday.io', // Your GitHub repo name
  assetPrefix: '/onahsunday.io/', // Ensure assets load correctly
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

module.exports = nextConfig