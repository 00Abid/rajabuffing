import Link from "next/link";
import { blogPosts } from './../../data/blogPosts'; // Ensure this path matches your file structure
import { Calendar, Clock, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import Newsletter from "../components/NewLetter";

export const metadata = {
    title: "Technical Insights | Industrial Buffing & Polishing Blog | Raja Buffing",
    description: "Expert guides on utensil maintenance, SS 304/316 buffing techniques, HSN codes for job work, and industrial polishing best practices from Raja Buffing Works.",
    keywords: "SS 304 polishing guide, buffing HSN code, utensil maintenance tips, industrial buffing Vasai, mirror finish techniques",
    alternates: {
        canonical: 'https://rajabuffing.shop/blog',
    },
};

export default function Blog() {
    // Convert the blogPosts object into an array for mapping
    const postsArray = Object.keys(blogPosts).map((slug) => ({
        slug,
        ...blogPosts[slug],
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Raja Buffing Technical Insights",
        "description": "Professional metal finishing and industrial buffing knowledge base.",
        "publisher": {
            "@type": "Organization",
            "name": "Raja Buffing Works"
        },
        "blogPost": postsArray.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "url": `https://rajabuffing.shop/blog/${post.slug}`
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">

                {/* Blog Header: Authority & Context */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Verified Technical Knowledge Base
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Technical <br /> <span className="text-slate-400 italic font-medium">Insights</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        &quot;Explore our industrial deep-dives on metallurgy, HSN compliance, and the science of the perfect mirror finish.&quot;
                    </p>
                </header>

                {/* Dynamic Grid: Mapping from blogPosts data */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {postsArray.map((post) => (
                        <article
                            key={post.slug}
                            className="group relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-500 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Tag size={12} /> {post.category}
                                </span>
                                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-slate-600 transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>

                            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium grow">
                                {post.excerpt}
                            </p>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-[0.2em] text-slate-900 group-hover:gap-4 transition-all"
                            >
                                Read Technical Paper <ArrowRight size={16} />
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Newsletter / Trust Signal Footer */}
                <footer className="mt-24 p-10 md:p-16 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
                    <Newsletter />
                </footer>

            </div>
        </main>
    );
}