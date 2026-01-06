/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // reactCompiler: true, // Disabled - can cause reload issues in dev

  // 1. Domain Redirects (The SEO Fix for GSC/Bing)
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
        destination: 'https://rajabuffing.shop/:path*',
        permanent: true, // This is the 301 Permanent signal Google needs
      },
    ];
  },

  // 2. Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 3. Performance & Security
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;