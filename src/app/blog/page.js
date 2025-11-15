import Link from "next/link";

export const metadata = {
    title: "Blog - RAJA BUFFING WORKS | Utensil Care Tips & Industry Insights",
    description: "Learn about utensil maintenance, buffing techniques, and industry best practices from RAJA BUFFING WORKS experts.",
    alternates: {
        canonical: 'https://rajabuffing.vercel.app/blog',
    },
};

const blogPosts = [
    {
        slug: "utensil-maintenance-guide",
        title: "Complete Guide to Utensil Maintenance and Care",
        excerpt: "Learn how to properly maintain your kitchen utensils to extend their lifespan and keep them looking their best.",
        date: "2025-01-15",
        readTime: "5 min read"
    },
    {
        slug: "benefits-professional-buffing",
        title: "Why Choose Professional Utensil Buffing Services",
        excerpt: "Discover the advantages of professional buffing over DIY methods and how it can save you time and money.",
        date: "2025-01-10",
        readTime: "4 min read"
    },
    {
        slug: "commercial-kitchen-equipment",
        title: "Maintaining Commercial Kitchen Equipment",
        excerpt: "Essential maintenance tips for restaurants and commercial kitchens to ensure food safety and equipment longevity.",
        date: "2025-01-05",
        readTime: "6 min read"
    },
    {
        slug: "mirror-finish-techniques",
        title: "Achieving Perfect Mirror Finish on Kitchen Utensils",
        excerpt: "Master the art of mirror finishing with our professional techniques and equipment for stunning results.",
        date: "2025-01-01",
        readTime: "7 min read"
    },
    {
        slug: "silverware-restoration",
        title: "Silverware Restoration: Bringing Back the Shine",
        excerpt: "Complete guide to restoring tarnished silverware and maintaining its beauty for years to come.",
        date: "2024-12-28",
        readTime: "5 min read"
    },
    {
        slug: "buffing-vs-polishing",
        title: "Buffing vs Polishing: Understanding the Difference",
        excerpt: "Learn the technical differences between buffing and polishing processes and when to use each method.",
        date: "2024-12-25",
        readTime: "4 min read"
    },
];

export default function Blog() {
    return (
        <div className="pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center mb-12 text-black">
                    Our Blog
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Expert insights, tips, and industry knowledge from RAJA BUFFING WORKS
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-black">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}