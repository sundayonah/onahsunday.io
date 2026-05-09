/**
 * Prefix for static assets under `/public` when the site is hosted on a subpath
 * (GitHub Pages). Set at build time via `next.config.js` → `NEXT_PUBLIC_BASE_PATH`.
 * Vercel / root hosting: leave empty so paths stay `/images/...`, `/_next/...`.
 */
export const getImagePath = (path) => {
   if (path?.startsWith('http')) {
      return path;
   }

   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

   const normalizedPath = path?.startsWith('/') ? path : `/${path}`;

   return `${basePath}${normalizedPath}`;
};
