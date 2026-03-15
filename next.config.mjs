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

  async headers() {
    const securityHeaders = [
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://w.clarity.ms; frame-src 'self' https://www.google.com;",
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
    ];

    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Add canonical link for the PDF file and handle caching of static assets
        source: '/catalogue.pdf',
        headers: [
          {
            key: 'Link',
            value: '<https://www.rajabuffing.shop/catalogue.pdf>; rel="canonical"',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Aggressive caching for media assets in public folder
        source: '/(.*).(webp|mp4|webp|png|jpg|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
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