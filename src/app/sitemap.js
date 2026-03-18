import { blogPosts } from '../data/blogPosts';
import { productData } from '../data/productData';

export default function sitemap() {
  const base = "https://www.rajabuffing.shop";

  // 1. Static core pages
  const staticPages = [
    { route: '',             freq: 'daily',   priority: 1.0 },
    { route: 'products',     freq: 'weekly',  priority: 0.8 },
    { route: 'machinery',    freq: 'weekly',  priority: 0.8 },
    { route: 'blog',         freq: 'weekly',  priority: 0.8 },
    { route: 'testimonials', freq: 'monthly', priority: 0.6 },
    { route: 'contact',      freq: 'monthly', priority: 0.6 },
    { route: 'privacy',      freq: 'yearly',  priority: 0.3 },
    { route: 'terms',        freq: 'yearly',  priority: 0.3 },
  ].map(({ route, freq, priority }) => ({
    url: route === '' ? `${base}/` : `${base}/${route}/`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));

  // 2. Dynamic blog posts
  const blogUrls = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 3. Dynamic product sub-pages
  const productUrls = Object.keys(productData).map((slug) => ({
    url: `${base}/products/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...blogUrls, ...productUrls];
}