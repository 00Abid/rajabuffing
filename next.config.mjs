/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Domain Redirects (Optimized for GSC Migration)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rajabuffing.vercel.app',
          },
        ],
        // Use the exact destination URL as seen in GSC (check if it needs www. or not)
        destination: 'https://www.rajabuffing.shop/:path*',
        // REMOVE: permanent: true
        // ADD: statusCode: 301
        statusCode: 301,
      },
    ];
  },

  // 2. Image optimization (No changes needed here)
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;