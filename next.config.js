/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

/**
 * Static export + asset prefix are only for GitHub Pages (`npm run build:github`).
 * Vercel sets VERCEL=1 during build — omit export/basePath so the app is served from /
 * and avoids static-export edge cases with nested files under `pages/`.
 */
const useGhPagesExport = process.env.GITHUB_PAGES === 'true'

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
  webpack: (config) => {
    return config
  },
}

const ghPagesConfig =
  isProd && useGhPagesExport
    ? {
        output: 'export',
        basePath: '/onahsunday.io',
        assetPrefix: '/onahsunday.io/',
      }
    : {}

const nextConfig = {
  ...baseConfig,
  ...ghPagesConfig,
}

module.exports = nextConfig
