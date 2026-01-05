import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts'; // Ensure this path matches your file structure
import { Calendar, Clock, ShieldCheck, ArrowLeft, Tag, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return {};

    return {
        title: `${post.title} | Technical Insights | RAJA BUFFING WORKS`,
        description: post.meta,
        alternates: {
            canonical: `https://rajabuffing.shop/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.meta,
            type: 'article',
            publishedTime: post.date,
            authors: ['Raja Buffing Works'],
        }
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        notFound();
    }

    // Dynamic Article Schema for AEO (Answer Engine Optimization)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.meta,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "Raja Buffing Works",
            "url": "https://rajabuffing.shop"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Raja Buffing Works",
            "logo": {
                "@type": "ImageObject",
                "url": "https://rajabuffing.shop/logo.webp"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://rajabuffing.shop/blog/${slug}`
        }
    };

    return (
        <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto px-6">

                {/* Navigation & Context */}
                <div className="flex justify-between items-center mb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm transition-all group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Knowledge Center
                    </Link>
                    <div className="hidden md:flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <Tag size={12} /> {post.category}
                    </div>
                </div>

                <article className="bg-white border border-slate-200 rounded-[3rem] shadow-2xl overflow-hidden">

                    {/* Dynamic Header based on blogData */}
                    <header className="p-8 md:p-16 border-b border-slate-100 bg-slate-50/50 relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Share2 size={80} />
                        </div>

                        <div className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                            <ShieldCheck size={16} className="text-slate-600" /> Verified Technical Content
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold text-xs uppercase tracking-widest">
                            <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100 italic">
                                <Calendar size={14} /> {post.date}
                            </span>
                            <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-100">
                                <Clock size={14} /> {post.readTime}
                            </span>
                            <span className="md:hidden flex items-center gap-2 text-blue-600">
                                <Tag size={14} /> {post.category}
                            </span>
                        </div>
                    </header>

                    {/* Industrial Styled Body Content */}
                    <div className="p-8 md:p-16">
                        {/* Summary Box for Skimming (AEO Booster) */}
                        <div className="mb-12 p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 italic text-slate-600 font-medium">
                            &quot;{post.excerpt}&quot;
                        </div>

                        <div
                            className="prose prose-slate prose-lg max-w-none 
                            prose-headings:text-slate-900 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
                            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-slate-900 prose-h2:pl-6
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                            prose-ul:list-disc prose-ul:pl-6 prose-li:text-slate-600 prose-li:mb-2
                            prose-strong:text-slate-900 prose-strong:font-bold
                            prose-img:rounded-3xl prose-img:shadow-xl"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* B2B Call to Action Footer: Local SEO Signal */}
                    <footer className="p-10 bg-slate-900 text-white border-t border-slate-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="text-center md:text-left">
                                <p className="font-black uppercase tracking-widest text-[10px] text-slate-500 mb-2">Technical Inquiry: Vasai East Unit</p>
                                <p className="font-bold text-xl tracking-tight">Need this level of precision for your batch?</p>
                                <p className="text-slate-400 text-sm mt-1 font-medium">Serving the Maharashtra Industrial corridor since 1994.</p>
                            </div>
                            <Link
                                href="/Contact"
                                className="bg-white text-slate-900 px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all text-sm shadow-xl flex items-center gap-2"
                            >
                                Request Industrial Quote <ArrowRight size={16} />
                            </Link>
                        </div>
                    </footer>
                </article>

                {/* Internal Linking: Next Topic Suggestion */}
                <div className="mt-12 p-8 bg-white border border-slate-200 rounded-4xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-bold text-slate-500">Have more technical questions?</p>
                    <Link href="/blog" className="text-slate-900 font-black uppercase text-xs tracking-widest border-b-2 border-slate-900 pb-1 hover:text-slate-500 hover:border-slate-500 transition-all">
                        Explore more insights
                    </Link>
                </div>
            </div>
        </main>
    );
}