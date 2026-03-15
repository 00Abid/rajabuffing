export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
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
