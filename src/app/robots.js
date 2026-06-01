export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/cdn-cgi/', // Cloudflare-specific if applicable
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        allow: ['/llms.txt'],
        disallow: ['/api/'],
      }
    ],
    sitemap: 'https://www.rajabuffing.shop/sitemap.xml',
  }
}
