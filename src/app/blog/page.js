import Link from "next/link";
import { blogPosts } from './../../data/blogPosts';
import { Calendar, Clock, ArrowRight, ArrowUpRight, ShieldCheck, Tag, Zap, Factory, Settings, BookOpen } from "lucide-react";

export const metadata = {
    title: "Industrial Buffing Technical Insights | Raja Buffing Works",
    description: "Technical guides on SS grade buffing, HSN 7323 compliance, Ra value matte finishing, and B2B care protocols. From 30+ years of operations in Vasai East.",
    keywords: "SS 304 polishing guide, buffing HSN code 7323, utensil maintenance tips, industrial buffing Vasai, mirror finish techniques, Ra value matte finish, stainless steel buffing Maharashtra, commercial kitchenware care",
    alternates: {
        canonical: 'https://www.rajabuffing.shop/blog/',
    },
};

export default function Blog() {
    const postsArray = Object.keys(blogPosts).map((slug) => ({
        slug,
        ...blogPosts[slug],
    }));

    // Map each post slug to its directly related service pages
    const postServiceLinks = {
        "ss-304-vs-316-buffing-guide": [
            { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing" },
            { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing" },
            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing" },
        ],
        "hsn-code-7323-job-work-compliance": [
            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing" },
            { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing" },
            { name: "Matte Specialist", href: "/products/specialty-matte-finishing" },
        ],
        "matte-specialist-finishing-process": [
            { name: "Matte Specialist Finishing", href: "/products/specialty-matte-finishing" },
            { name: "Wok & Frying Pan Finishing", href: "/products/wok-pan-finishing" },
            { name: "View Machinery", href: "/machinery" },
        ],
        "commercial-kitchen-maintenance": [
            { name: "Silverware Restoration", href: "/products/silverware-restoration" },
            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing" },
            { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing" },
        ],
        "how-to-structure-job-work-challan-gst": [
            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing" },
            { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing" },
            { name: "Contact Unit", href: "/contact" },
        ],
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Raja Buffing Technical Insights",
        "description": "Technical knowledge base on industrial buffing, SS grade finishing requirements, HSN 7323 compliance, and Ra value matte finishing. Produced from 30+ years of active operations at Vasai East, Maharashtra.",
        "url": "https://www.rajabuffing.shop/blog",
        "publisher": {
            "@id": "https://www.rajabuffing.shop/#localbusiness"
        },
        "blogPost": postsArray.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "url": `https://www.rajabuffing.shop/blog/${post.slug}`,
            "author": {
                "@type": "Organization",
                "name": "Raja Buffing Works"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Raja Buffing Works",
                "url": "https://www.rajabuffing.shop"
            }
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">
                {/* ── HEADER ────────────────────────────────────────────────── */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Verified Technical Knowledge Base
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Technical <br /> <span className="text-slate-400 italic font-medium">Insights</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                        Industrial deep-dives on metallurgy, SS grade buffing requirements, HSN 7323 job-work compliance,
                        and the science of Ra value-targeted surface finishing. Produced from 30+ years of active buffing
                        operations at our{" "}
                        <Link href="/machinery" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            Vasai East facility
                        </Link>
                        .
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        These articles are written for B2B manufacturers, hotelware buyers, and catering operators who need
                        technical answers -- not general cookware content. Topics cover our{" "}
                        <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            six core finishing services
                        </Link>
                        , compliance requirements for job-work under GST, and practical maintenance protocols that
                        extend the service life of buffed utensil batches.
                    </p>
                </header>
                
                {/* ── THE PURPOSE OF THIS KNOWLEDGE BASE ─────────────────────── */}
                <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
                            <BookOpen size={16} /> Technical Context
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-8">
                            Why Technical <br /> <span className="text-slate-400 italic font-medium">Insights?</span>
                        </h2>
                        <div className="space-y-6 text-slate-400 font-medium leading-relaxed">
                            <p>
                                In industrial buffing, a "good finish" is not a matter of opinion—it is a result of 
                                material science, calibrated RPMs, and correct compound selection. We built this 
                                knowledge base because utensil manufacturers in the Maharashtra industrial belt 
                                face recurring challenges with SS grade mismatches, HSN 7323 compliance, and 
                                export-standard Ra value requirements.
                            </p>
                            <p>
                                These articles distill 30+ years of operational floor experience into actionable 
                                data for procurement teams, quality inspectors, and business owners. Whether 
                                you are scaling a production line for export or managing a high-volume commercial 
                                kitchen, these insights help you protect your surface quality and your tax compliance.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white border-b-2 border-slate-700 pb-2">
                                <ShieldCheck size={14} className="text-slate-400" /> ISO 9001:2015 Verified
                            </div>
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white border-b-2 border-slate-700 pb-2">
                                <Factory size={14} className="text-slate-400" /> Ground Floor Experience
                            </div>
                        </div>
                    </div>
                    <div className="relative h-full min-h-[300px] border-r border-slate-800 flex items-center justify-center opacity-40 group hover:opacity-100 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-transparent rounded-full blur-[100px]" />
                        <Zap size={200} strokeWidth={0.5} className="text-white relative z-10" />
                    </div>
                </section>

                {/* ── TOPIC CLUSTERS ────────────────────────────────────────── */}
                <section className="mb-16">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Knowledge Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: "SS Grade Buffing", tag: "Technical", desc: "SS 202, 304, 316 compound protocols and finish requirements" },
                            { label: "HSN & GST Compliance", tag: "Industrial", desc: "Job-work invoicing, ITC eligibility, and documentation" },
                            { label: "Matte Finishing Science", tag: "Specialization", desc: "Ra values, grain direction, and export specifications" },
                            { label: "B2B Maintenance", tag: "Maintenance", desc: "Post-buffing care protocols for commercial operations" },
                        ].map((cluster, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-slate-400 transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-900 text-white px-2 py-0.5 rounded-full mb-3 inline-block">{cluster.tag}</span>
                                <p className="font-black text-slate-900 text-sm mb-2">{cluster.label}</p>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{cluster.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── POST GRID ─────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                    {postsArray.map((post) => {
                        const relatedLinks = postServiceLinks[post.slug] || [];
                        return (
                            <article
                                key={post.slug}
                                className="group relative bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-slate-200 transition-all duration-500 flex flex-col"
                            >
                                {/* Category + Meta */}
                                <div className="flex justify-between items-start mb-8">
                                    <span className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Tag size={12} /> {post.category}
                                    </span>
                                    <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-slate-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                {/* Excerpt */}
                                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium grow">
                                    {post.excerpt}
                                </p>

                                {/* Related service links -- contextual cross-links per post */}
                                {relatedLinks.length > 0 && (
                                    <div className="mb-8 pt-6 border-t border-slate-200">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Related Services</p>
                                        <div className="flex flex-wrap gap-2">
                                            {relatedLinks.map((link, i) => (
                                                <Link
                                                    key={i}
                                                    href={link.href}
                                                    className="text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-900 hover:text-slate-900 px-3 py-1.5 rounded-full transition-all"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Read CTA */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 font-black uppercase text-xs tracking-[0.2em] text-slate-900 group-hover:gap-4 transition-all"
                                >
                                    Read Technical Paper <ArrowRight size={16} />
                                </Link>
                            </article>
                        );
                    })}
                </div>

                {/* ── SERVICE CROSS-LINKS ───────────────────────────────────── */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
                        Apply the Technical Knowledge
                    </h2>
                    <p className="text-slate-500 font-medium mb-10 max-w-2xl">
                        Every article in this knowledge base connects directly to a live finishing service.
                        If the technical content answers your question, the next step is a batch quote.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Milk Pot Polishing",
                                desc: "Dairy-grade Ra < 0.4μm buffing for pateelas. Specialized interior mirror finishing for hygiene compliance.",
                                href: "/products/milk-pot-polishing",
                                tag: "Dairy Grade"
                            },
                            {
                                title: "Wok & Kadhai Finishing",
                                desc: "Dual-finish protocol: High-RPM interior smoothing with external matte specialist satin texturing.",
                                href: "/products/wok-pan-finishing",
                                tag: "High Heat"
                            },
                            {
                                title: "SS Grade Buffing Services",
                                desc: "Sauce pots, milk pots, woks -- each grade processed with its own compound and RPM protocol.",
                                href: "/products",
                                tag: "All Services"
                            },
                            {
                                title: "Matte Specialist Finishing",
                                desc: "Ra 0.5μm-0.8μm precision on SS 304, SS 316, and Aluminium for export and designer cookware.",
                                href: "/products/specialty-matte-finishing",
                                tag: "Specialization"
                            },
                            {
                                title: "Commercial & Bulk Job-Work",
                                desc: "100 to 10,000+ units. HSN 7323 invoicing. 24-48 hour dispatch from Vasai East.",
                                href: "/products/commercial-utensils-polishing",
                                tag: "High Volume"
                            },
                            {
                                title: "Silverware Restoration",
                                desc: "Low-heat soft-cloth protocol. Solid silver, silver-plated, brass. Zero metal removal.",
                                href: "/products/silverware-restoration",
                                tag: "Restoration"
                            }
                        ].map((card, i) => (
                            <Link
                                key={i}
                                href={card.href}
                                className="group bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-3xl p-8 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">{card.tag}</span>
                                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </div>
                                <h3 className="font-black text-slate-900 tracking-tight">{card.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── KNOWLEDGE BASE CONTEXT ────────────────────────────────── */}
                <section className="mb-20 grid md:grid-cols-2 gap-10">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Who This Knowledge Base Is For</h2>
                        <div className="space-y-4">
                            {[
                                { who: "Utensil Manufacturers", what: "SS grade protocol selection, compound assignment, HSN 7323 job-work structure for recurring production batches." },
                                { who: "Cookware Exporters", what: "Ra value targeting, export specification compliance, grain direction requirements for European and Middle Eastern markets." },
                                { who: "Hotel & Catering Operations", what: "Post-buffing care protocols, re-polishing schedules, silverware tarnish prevention and maintenance." },
                                { who: "B2B Procurement Teams", what: "GST input tax credit eligibility, HSN code classification, job-work invoice documentation requirements." },
                            ].map((item, i) => (
                                <div key={i} className="border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                                    <p className="font-black text-slate-900 text-sm mb-1">{item.who}</p>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.what}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">
                        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">What This Knowledge Base Covers</h2>
                        <div className="space-y-4">
                            {[
                                {
                                    topic: "SS 304 vs SS 316 Buffing Requirements",
                                    href: "/blog/ss-304-vs-316-buffing-guide",
                                    desc: "Compound differences, RPM protocols, and why grade matters for surface outcome."
                                },
                                {
                                    topic: "HSN 7323 Job-Work Compliance",
                                    href: "/blog/hsn-code-7323-job-work-compliance",
                                    desc: "GST structure, ITC eligibility, and invoice documentation for B2B manufacturers."
                                },
                                {
                                    topic: "Ra Value Matte Finishing",
                                    href: "/blog/matte-specialist-finishing-process",
                                    desc: "Ra 0.5μm vs 0.8μm, grain direction, and export specification compliance."
                                },
                                {
                                    topic: "Commercial Kitchenware Maintenance",
                                    href: "/blog/commercial-kitchen-maintenance",
                                    desc: "Re-polishing intervals, cleaning protocols, and silverware tarnish prevention."
                                },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className="group flex items-start justify-between gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0 hover:opacity-80 transition-opacity"
                                >
                                    <div>
                                        <p className="font-black text-slate-900 text-sm mb-1 group-hover:underline underline-offset-2">{item.topic}</p>
                                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0 mt-0.5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ──────────────────────────────────────────────────── */}
                <footer className="bg-slate-900 rounded-[3.5rem] text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Ready to Place a Batch?</p>
                        <h2 className="text-4xl font-black tracking-tighter leading-tight mb-4">
                            The Technical Detail Is Here. <br /> The Machinery Is in Vasai East.
                        </h2>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Send your SS grade, finish specification, batch size, and dispatch requirement.
                            We confirm pricing and lead time on the same working day.
                            All job-work invoiced under{" "}
                            <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-300 font-bold underline underline-offset-2 hover:text-white transition-colors">
                                HSN Code 7323
                            </Link>{" "}
                            with full GST documentation.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 shrink-0">
                        <Link
                            href="/contact"
                            className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-100 transition-all flex items-center gap-3 shadow-xl"
                        >
                            <Zap size={20} /> Request Batch Quote
                        </Link>
                        <Link
                            href="/products"
                            className="bg-transparent border-2 border-slate-700 text-slate-300 px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:border-slate-400 hover:text-white transition-all flex items-center justify-center gap-3"
                        >
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}