import { notFound } from 'next/navigation';

const blogPosts = {
    'utensil-maintenance-guide': {
        title: "Complete Guide to Utensil Maintenance and Care",
        content: `
      <h2>Daily Cleaning Practices</h2>
      <p>Proper daily cleaning is essential for maintaining your kitchen utensils. Always rinse immediately after use and avoid letting food residue dry on surfaces.</p>

      <h2>Storage Tips</h2>
      <p>Store utensils in a dry environment to prevent rust and corrosion. Use proper racks and avoid stacking heavy items on delicate surfaces.</p>

      <h2>When to Seek Professional Help</h2>
      <p>While regular maintenance helps, professional buffing services like ours can restore utensils to their original shine and extend their lifespan significantly.</p>
    `,
        date: "2025-01-15",
        readTime: "5 min read"
    },
};

export async function generateMetadata({ params }) {
    const post = blogPosts[params.slug];
    if (!post) return {};

    return {
        title: `${post.title} - RAJA BUFFING WORKS Blog`,
        description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
        alternates: {
            canonical: `https://rajabuffing.vercel.app/blog/${params.slug}`,
        },
    };
}

export default function BlogPost({ params }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
                        <header className="mb-8">
                            <h1 className="text-3xl font-bold text-black mb-4">{post.title}</h1>
                            <div className="flex justify-between text-gray-500 text-sm">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                        </header>

                        <div
                            className="prose prose-lg max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                </div>
            </div>
    );
}