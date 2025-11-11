const isProd = process.env.NODE_ENV === 'production';

export const getImagePath = (path) => {
    // If path is already a full URL (http/https), return as is
    if (path?.startsWith('http')) {
        return path;
    }

    // For local images, add basePath in production
    const basePath = isProd ? '/onahsunday.io' : '';

    // Ensure path starts with /
    const normalizedPath = path?.startsWith('/') ? path : `/${path}`;

    return `${basePath}${normalizedPath}`;
};