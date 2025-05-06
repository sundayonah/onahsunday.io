

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 180,  // Increase timeout to 180 seconds
  images: {
    domains: ['github.com'],

  },
  // Reduce the number of static pages generated concurrently
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // Optional: Enable webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Add any webpack optimizations here if needed
    return config
  },
}

module.exports = nextConfig