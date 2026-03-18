/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // Vercel preview domain -> production
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'rajabuffing.vercel.app' }],
        destination: 'https://www.rajabuffing.shop/:path*',
        permanent: true,
      },
      // Non-www -> www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'rajabuffing.shop' }],
        destination: 'https://www.rajabuffing.shop/:path*',
        permanent: true,
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
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: https:",
          "connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://w.clarity.ms",
          // Maps embed needs both google.com and maps.googleapis.com
          "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com",
        ].join('; '),
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
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
        // webp was listed twice -- removed duplicate
        source: '/(.*).(webp|mp4|png|jpg|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

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