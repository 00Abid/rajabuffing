export default function sitemap() {
  const baseUrl = "https://rajabuffing.vercel.app";

  // Blog post slugs
  const blogPosts = [
    { slug: 'utensil-maintenance-guide', date: '2025-01-15' },
    { slug: 'benefits-professional-buffing', date: '2025-01-10' },
    { slug: 'commercial-kitchen-equipment', date: '2025-01-05' },
    { slug: 'mirror-finish-techniques', date: '2025-01-01' },
    { slug: 'silverware-restoration', date: '2024-12-28' },
    { slug: 'buffing-vs-polishing', date: '2024-12-25' },
  ];

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Machinery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Blog post URLs
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...mainPages, ...blogUrls];
}
