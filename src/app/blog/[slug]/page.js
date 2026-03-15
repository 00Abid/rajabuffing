import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';
import {
    Calendar, Clock, ShieldCheck, ArrowLeft,
    Tag, ArrowRight, ArrowUpRight, Zap, BookOpen, Factory
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) return {};

    return {
        title: `${post.title}`,
        description: post.meta,
        keywords: post.keywords || '',
        alternates: {
            canonical: `https://www.rajabuffing.shop/blog/${slug}`,
        },
        openGraph: {
            title: `${post.title} | Raja Buffing Works`,
            description: post.meta,
            type: 'article',
            publishedTime: post.date,
            authors: ['Raja Buffing Works'],
            url: `https://www.rajabuffing.shop/blog/${slug}`,
        }
    };
}

const relatedPostsMap = {
    "ss-304-vs-316-buffing-guide": [
        "matte-specialist-finishing-process",
        "hsn-code-7323-job-work-compliance",
        "commercial-kitchen-maintenance"
    ],
    "hsn-code-7323-job-work-compliance": [
        "ss-304-vs-316-buffing-guide",
        "commercial-kitchen-maintenance",
        "matte-specialist-finishing-process"
    ],
    "matte-specialist-finishing-process": [
        "ss-304-vs-316-buffing-guide",
        "commercial-kitchen-maintenance",
        "hsn-code-7323-job-work-compliance"
    ],
    "commercial-kitchen-maintenance": [
        "matte-specialist-finishing-process",
        "ss-304-vs-316-buffing-guide",
        "how-to-structure-job-work-challan-gst"
    ],
    "how-to-structure-job-work-challan-gst": [
        "hsn-code-7323-job-work-compliance",
        "ss-304-vs-316-buffing-guide",
        "commercial-kitchen-maintenance"
    ],
};

const relatedServicesMap = {
    "ss-304-vs-316-buffing-guide": [
        { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing", desc: "SS 304/316 mirror finishing for commercial sauce pots." },
        { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing", desc: "Dairy-grade SS buffing to Ra < 0.4μm." },
        { name: "Wok & Frying Pan", href: "/products/wok-pan-finishing", desc: "High-heat dual-finish buffing for commercial kadhais." },
        { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", desc: "Mixed SS grade bulk job-work with HSN 7323 invoicing." },
    ],
    "hsn-code-7323-job-work-compliance": [
        { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", desc: "Bulk job-work with full HSN 7323 GST documentation." },
        { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing", desc: "SS 304/316 finishing -- HSN 7323 invoicing included." },
        { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing", desc: "Dairy-grade buffing for manufacturers under HSN 7323." },
        { name: "Matte Specialist", href: "/products/specialty-matte-finishing", desc: "Export-grade matte finishing under HSN 7323." },
    ],
    "matte-specialist-finishing-process": [
        { name: "Matte Specialist Finishing", href: "/products/specialty-matte-finishing", desc: "Ra 0.5μm-0.8μm on SS 304, SS 316, Aluminium." },
        { name: "Wok & Frying Pan Finishing", href: "/products/wok-pan-finishing", desc: "Exterior matte specialist finish for commercial kadhais." },
        { name: "Sauce Pot Matte", href: "/products/sauce-pot-buffing", desc: "Matte-finish options for specialist sauce pot batches." },
        { name: "View Machinery", href: "/machinery", desc: "8-unit dedicated matte precision array." },
    ],
    "commercial-kitchen-maintenance": [
        { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing", desc: "Dairy-grade buffing with maintenance protocol guidance." },
        { name: "Wok & Frying Pan", href: "/products/wok-pan-finishing", desc: "Cleaning protocols for high-heat matte finishes." },
        { name: "Silverware Restoration", href: "/products/silverware-restoration", desc: "Low-heat soft-cloth protocol for hotel silverware." },
        { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", desc: "Re-polishing batches for hotelware and catering equipment." },
    ],
    "how-to-structure-job-work-challan-gst": [
        { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", desc: "Bulk job-work with full HSN 7323 GST documentation." },
        { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing", desc: "Send SS 304/316 batches under GST challan rules." },
        { name: "Wok Pan Finishing", href: "/products/wok-pan-finishing", desc: "Internal/External dual-finish batches under HSN 7323." },
        { name: "Contact Unit", href: "/contact", desc: "Consult on GST invoice & job-work formalities." },
    ],
};

// Extract H2 headings from HTML content string for TOC
function extractHeadings(html) {
    const matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
    return matches.map((m, i) => ({
        index: i,
        text: m[1].replace(/<[^>]*>/g, '').trim(),
    }));
}

// Inject id attributes into H2 tags for anchor linking
function injectHeadingIds(html) {
    let i = 0;
    return html.replace(/<h2([^>]*)>/gi, () => {
        return `<h2 id="section-${i++}"$1>`;
    });
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts[slug];
    if (!post) notFound();

    const relatedSlugs = relatedPostsMap[slug] || [];
    const relatedPosts = relatedSlugs
        .map(s => blogPosts[s] ? { slug: s, ...blogPosts[s] } : null)
        .filter(Boolean)
        .slice(0, 3);

    const relatedServices = relatedServicesMap[slug] || [];

    const headings = extractHeadings(post.content);
    const contentWithIds = injectHeadingIds(post.content);

    // ── SCHEMA ──────────────────────────────────────────────────────────────

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.meta,
        "datePublished": post.date,
        "url": `https://www.rajabuffing.shop/blog/${slug}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.rajabuffing.shop/blog/${slug}`
        },
        "author": {
            "@id": "https://www.rajabuffing.shop/#localbusiness"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Raja Buffing Works",
            "url": "https://www.rajabuffing.shop",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.rajabuffing.shop/logo.webp"
            }
        }
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rajabuffing.shop" },
            { "@type": "ListItem", "position": 2, "name": "Technical Insights", "item": "https://www.rajabuffing.shop/blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.rajabuffing.shop/blog/${slug}` }
        ]
    };

    // ── RENDER ───────────────────────────────────────────────────────────────

    return (
        <main className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className="max-w-4xl mx-auto px-6">
                {/* ── ARTICLE HEADER (outside card for visual breathing room) */}
                <header className="mb-8">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                            <Tag size={11} /> {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <Calendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                            <Clock size={12} /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
                        {post.title}
                    </h1>

                    {/* Author attribution */}
                    <div className="flex items-center gap-3 py-4 border-y border-slate-200">
                        <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                            <Factory size={16} className="text-white" />
                        </div>
                        <div>
                            <p className="font-black text-slate-900 text-sm">Raja Buffing Works</p>
                            <p className="text-slate-400 text-xs font-medium">
                                Vasai East, Maharashtra &middot; Industrial Buffing Specialists since 1994
                            </p>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            <ShieldCheck size={12} className="text-slate-600" /> Verified Technical Content
                        </div>
                    </div>
                </header>

                {/* ── SUMMARY PULL-QUOTE ─────────────────────────────────── */}
                <div className="mb-8 p-6 bg-white border border-slate-200 rounded-2xl border-l-4 border-l-slate-900">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Summary</p>
                    <p className="text-slate-700 font-medium leading-relaxed italic text-lg">
                        &quot;{post.excerpt}&quot;
                    </p>
                </div>

                {/* ── TABLE OF CONTENTS ─────────────────────────────────── */}
                {headings.length > 0 && (
                    <div className="mb-8 bg-white border border-slate-200 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen size={14} className="text-slate-500" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">In This Article</p>
                        </div>
                        <ol className="space-y-2">
                            {headings.map((h, i) => (
                                <li key={i}>
                                    <a
                                        href={`#section-${h.index}`}
                                        className="flex items-start gap-3 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors group"
                                    >
                                        <span className="text-[10px] font-black text-slate-300 group-hover:text-slate-500 pt-0.5 shrink-0 w-4">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="leading-snug">{h.text}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* ── ARTICLE BODY ─────────────────────────────────────── */}
                <article className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm mb-6">
                    <div className="p-8 md:p-14">
                        <div
                            className="
                                prose prose-slate prose-lg max-w-none

                                /* Headings */
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900
                                prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5
                                prose-h2:border-l-4 prose-h2:border-slate-900 prose-h2:pl-5
                                prose-h2:pb-2
                                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3

                                /* Paragraphs */
                                prose-p:text-slate-600 prose-p:leading-[1.85] prose-p:mb-6 prose-p:text-base

                                /* Lists */
                                prose-ul:my-6 prose-ul:space-y-2
                                prose-ol:my-6 prose-ol:space-y-2
                                prose-li:text-slate-600 prose-li:text-base prose-li:leading-relaxed

                                /* Strong */
                                prose-strong:text-slate-900 prose-strong:font-black

                                /* Links */
                                prose-a:text-slate-900 prose-a:font-bold
                                prose-a:underline prose-a:underline-offset-2
                                prose-a:decoration-slate-400
                                hover:prose-a:decoration-slate-900

                                /* Images */
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8

                                /* HR */
                                prose-hr:border-slate-200 prose-hr:my-10

                                /* Blockquote */
                                prose-blockquote:border-l-slate-900 prose-blockquote:bg-slate-50
                                prose-blockquote:rounded-r-xl prose-blockquote:py-1
                                prose-blockquote:text-slate-700 prose-blockquote:not-italic
                            "
                            dangerouslySetInnerHTML={{ __html: contentWithIds }}
                        />
                    </div>

                    {/* ── APPLY THIS KNOWLEDGE (inside article) ──────────── */}
                    {relatedServices.length > 0 && (
                        <div className="px-8 md:px-14 pb-10">
                            <div className="border-t border-slate-100 pt-10">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5">
                                    Apply This Knowledge
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {relatedServices.map((service, i) => (
                                        <Link
                                            key={i}
                                            href={service.href}
                                            className="group bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-2xl p-5 transition-all duration-300 hover:shadow-md flex flex-col gap-2"
                                        >
                                            <div className="flex items-start justify-between">
                                                <p className="font-black text-slate-900 text-sm tracking-tight">{service.name}</p>
                                                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── ARTICLE FOOTER CTA ─────────────────────────────── */}
                    <footer className="p-8 md:p-12 bg-slate-900 text-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <div>
                                <p className="font-black uppercase tracking-widest text-[10px] text-slate-500 mb-2">
                                    Technical Inquiry &mdash; Vasai East Unit
                                </p>
                                <p className="font-bold text-xl tracking-tight mb-1">
                                    Need this level of precision for your batch?
                                </p>
                                <p className="text-slate-400 text-sm font-medium max-w-sm leading-relaxed">
                                    Serving the Maharashtra industrial corridor since 1994.
                                    All job-work invoiced under HSN 7323 with full GST documentation.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 shrink-0">
                                <Link
                                    href="/contact"
                                    className="bg-white text-slate-900 px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-slate-100 transition-all text-sm shadow-xl flex items-center justify-center gap-2"
                                >
                                    <Zap size={16} /> Request Industrial Quote
                                </Link>
                                <Link
                                    href="/products"
                                    className="border border-slate-700 text-slate-400 px-10 py-4 rounded-xl font-black uppercase tracking-tighter hover:border-slate-500 hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                                >
                                    View All Services <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </footer>
                </article>

                {/* ── CONTINUE READING ─────────────────────────────────── */}
                {relatedPosts.length > 0 && (
                    <section className="mt-12 mb-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900">
                                Continue Reading
                            </h2>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wide"
                            >
                                All Articles <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="grid md:grid-cols-3 gap-5">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col gap-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-slate-900 px-2 py-0.5 rounded-full">
                                            {related.category}
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">
                                            {related.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-black text-slate-900 text-sm leading-snug tracking-tight group-hover:text-slate-600 transition-colors">
                                        {related.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium leading-relaxed grow">
                                        {related.excerpt}
                                    </p>
                                    <div className="flex items-center gap-1 text-slate-900 font-black text-[10px] uppercase tracking-widest mt-1">
                                        Read <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── BOTTOM NAV ───────────────────────────────────────── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white border border-slate-200 rounded-2xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm transition-all group"
                    >
                        <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Technical Insights
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        <Link href="/contact" className="text-xs font-black text-slate-900 underline underline-offset-2 hover:text-slate-500 transition-colors uppercase tracking-wide">
                            Request a Quote
                        </Link>
                        <span className="text-slate-300 hidden md:inline">|</span>
                        <Link href="/machinery" className="text-xs font-black text-slate-900 underline underline-offset-2 hover:text-slate-500 transition-colors uppercase tracking-wide">
                            View Machinery
                        </Link>
                        <span className="text-slate-300 hidden md:inline">|</span>
                        <Link href="/products" className="text-xs font-black text-slate-900 underline underline-offset-2 hover:text-slate-500 transition-colors uppercase tracking-wide">
                            All Services
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}