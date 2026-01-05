import { blogPosts } from '../data/blogPosts';
import { productData } from '../data/productData';

export default function sitemap() {
  const baseUrl = "https://rajabuffing.shop";

  // Main static pages
  const mainPages = [
    '',
    '/Products',
    '/Machinery',
    '/blog',
    '/testimonials',
    '/Contact',
    '/privacy', // Add this
    '/terms',   // Add this
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Blog Posts
  const blogUrls = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Products
  const productUrls = Object.keys(productData).map((slug) => ({
    url: `${baseUrl}/Products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...mainPages, ...blogUrls, ...productUrls];
}
