import { blogPosts } from '../data/blogPosts';
import { productData } from '../data/productData';

export default function sitemap() {
  const baseUrl = "https://rajabuffing.shop";

  // 1. Static Core Pages
  const staticPages = [
    '',
    '/Products',
    '/Machinery',
    '/blog',
    '/testimonials',
    '/Contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Posts (High Priority Content)
  const blogUrls = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Dynamic Product Pages (Money Pages)
  const productUrls = Object.keys(productData).map((slug) => ({
    url: `${baseUrl}/Products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily', // Increased frequency for products
    priority: 0.9,
  }));

  return [...staticPages, ...blogUrls, ...productUrls];
}
