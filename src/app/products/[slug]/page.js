import { notFound } from 'next/navigation';
import { productData } from '../../../data/productData.js';
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    Settings,
    ShieldCheck,
    ArrowRight,
    ArrowUpRight,
    PhoneCall,
    Zap
} from "lucide-react";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) return {};

    return {
        title: product.seoTitle || `${product.name}`,
        description: product.seoDescription || product.meta,
        keywords: product.keywords || '',
        alternates: {
            canonical: `https://www.rajabuffing.shop/products/${slug}`,
        },
        openGraph: {
            title: `${product.h1} | Raja Buffing Works`,
            description: product.meta,
            images: [{ url: product.image }],
        },
    };
}

const allServices = [
    { slug: 'sauce-pot-buffing', name: 'Industrial Sauce Pots', grade: 'SS 304/316', image: '/saucepot.webp' },
    { slug: 'milk-pot-polishing', name: 'Milk Pots (Pateela)', grade: 'Dairy SS', image: '/milkpot.webp' },
    { slug: 'wok-pan-finishing', name: 'Wok / Deep Frying Pans', grade: 'SS 202/304', image: '/kadhai.webp' },
    { slug: 'silverware-restoration', name: 'Silverware Collections', grade: 'Silver/Brass', image: '/silverware.webp' },
    { slug: 'commercial-utensils-polishing', name: 'Commercial Utensils', grade: 'All Grades', image: '/commercial.webp' },
    { slug: 'specialty-matte-finishing', name: 'Matte Specialist Items', grade: 'Export SS', image: '/special.webp' },
];

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) notFound();

    const relatedServices = product.relatedServices
        ? allServices.filter(s => product.relatedServices.includes(s.slug))
        : allServices.filter(s => s.slug !== slug).slice(0, 6);

    // ── SCHEMA ──────────────────────────────────────────────────────────────

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": product.name,
        "description": product.description,
        "url": `https://www.rajabuffing.shop/products/${slug}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Raja Buffing Works",
            "url": "https://www.rajabuffing.shop",
            "telephone": "+919096769473",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vasai East",
                "addressRegion": "Maharashtra",
                "postalCode": "401208",
                "addressCountry": "IN"
            }
        },
        "areaServed": ["Vasai East", "Boisar", "Palghar", "Thane", "Mumbai", "Maharashtra"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Industrial Finishing",
            "itemListElement": product.features.map(f => ({
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": f }
            }))
        }
    };

    const faqJsonLd = product.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": product.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a.replace(/<[^>]*>/g, '')
            }
        }))
    } : null;

    // ── RENDER ───────────────────────────────────────────────────────────────

    return (
        <main className="pt-32 pb-24 bg-white font-sans antialiased text-slate-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            {faqJsonLd && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            )}

            <div className="max-w-7xl mx-auto px-6">


                {/* ── HERO GRID ─────────────────────────────────────────────── */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

                    {/* LEFT: image + spec cards + blog link */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                            <Image
                                src={product.image}
                                alt={`${product.h1} at Raja Buffing Works Vasai East`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-900 rounded-3xl text-white">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2">Technical Grade</p>
                                <p className="text-xl font-bold italic">{product.technicalSpecs.metalGrades[0]}</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2">Surface Texture</p>
                                <p className="text-xl font-bold text-slate-900">{product.technicalSpecs.finishType}</p>
                            </div>
                        </div>

                        {product.relatedBlogPost && (
                            <Link
                                href={product.relatedBlogPost.href}
                                className="group flex items-center justify-between gap-4 bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-2xl p-6 transition-all"
                            >
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Technical Reading</p>
                                    <p className="font-black text-slate-900 text-sm leading-snug">{product.relatedBlogPost.title}</p>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                            </Link>
                        )}
                    </div>

                    {/* RIGHT: H1 + specs + process + features + CTA */}
                    <div className="space-y-10">
                        <header>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-200">
                                <ShieldCheck size={14} /> Certified Industrial Job-Work
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                {product.name.split(' ').slice(0, -1).join(' ')}{' '}
                                <span className="text-slate-400 italic">{product.name.split(' ').pop()}</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                {product.longDescription}
                            </p>
                        </header>

                        {/* TECHNICAL SPECS TABLE */}
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Settings size={16} /> Engineering Specs
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                                            {key.replace(/([A-Z])/g, ' $1')}
                                        </span>
                                        <span className="text-sm font-black text-slate-900 text-right max-w-[55%]">
                                            {Array.isArray(value) ? value.join(', ') : value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PROCESS WORKFLOW */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-black uppercase tracking-tighter">The Finishing Workflow</h2>
                            <div className="grid gap-3">
                                {product.process.map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 transition-colors">
                                        <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded-full text-xs font-bold shrink-0">{i + 1}</span>
                                        <p className="text-sm font-bold text-slate-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FEATURES */}
                        {product.features?.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Service Includes</h3>
                                <div className="grid gap-3">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <CheckCircle2 size={16} className="text-slate-400 shrink-0" />
                                            <span className="text-sm font-bold text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="flex-1 bg-slate-900 text-white text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl"
                            >
                                <Zap size={20} /> Request Batch Quote
                            </Link>
                            <a
                                href="tel:+919096769473"
                                className="flex-1 bg-white border-2 border-slate-900 text-slate-900 text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                            >
                                <PhoneCall size={18} /> Call Specialist
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── EXTENDED CONTENT (renders only when fields exist in productData) ── */}

                {/* WHY SECTION */}
                {product.whySection && (
                    <section className="mb-20 max-w-4xl">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            {product.whySection.heading}
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            {product.whySection.body}
                        </p>
                    </section>
                )}

                {/* CONTENT BLOCKS */}
                {product.contentBlocks?.length > 0 && (
                    <section className="mb-20">
                        <div className="grid md:grid-cols-2 gap-10">
                            {product.contentBlocks.map((block, i) => (
                                <div key={i} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:border-slate-300 transition-colors">
                                    <h3 className="text-xl font-black tracking-tight text-slate-900 mb-4 leading-snug">
                                        {block.heading}
                                    </h3>
                                    <p
                                        className="text-slate-600 font-medium leading-relaxed text-sm"
                                        dangerouslySetInnerHTML={{ __html: block.body }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* COMPARISON TABLE */}
                {product.comparisons?.length > 0 && (
                    <section className="mb-20">
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">
                            Mirror Finish vs Matte Finish: Which Is Right for Your Batch?
                        </h2>
                        <div className="overflow-x-auto rounded-3xl border border-slate-200">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="text-left p-5 font-black uppercase tracking-wide text-xs w-[25%]">Aspect</th>
                                        <th className="text-left p-5 font-black uppercase tracking-wide text-xs w-[37.5%]">Mirror Finish</th>
                                        <th className="text-left p-5 font-black uppercase tracking-wide text-xs w-[37.5%]">Matte / Satin Finish</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.comparisons.map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                            <td className="p-5 font-black text-slate-900 border-b border-slate-100">{row.aspect}</td>
                                            <td className="p-5 font-medium text-slate-600 border-b border-slate-100 leading-relaxed">{row.mirror}</td>
                                            <td className="p-5 font-medium text-slate-600 border-b border-slate-100 leading-relaxed">{row.matte}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-slate-400 font-medium mt-4">
                            Not sure which finish suits your application?{" "}
                            <Link href="/contact" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                                Contact our finishing specialists
                            </Link>{" "}
                            or read our{" "}
                            <Link href="/blog/matte-specialist-finishing-process" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                                matte finishing Ra value guide
                            </Link>
                            .
                        </p>
                    </section>
                )}

                {/* ── FAQ ──────────────────────────────────────────────────────── */}
                {product.faqs?.length > 0 && (
                    <section className="mb-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">
                                Technical FAQ: {product.name}
                            </h2>
                            <div className="space-y-6">
                                {product.faqs.map((faq, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                        <h3 className="font-black text-slate-900 mb-3">{faq.q}</h3>
                                        <p
                                            className="text-slate-500 text-sm font-medium leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: faq.a }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── RELATED SERVICES ─────────────────────────────────────────── */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-black uppercase tracking-tighter">Related Services</h2>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-sm font-black text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wide"
                        >
                            All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedServices.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/products/${service.slug}`}
                                className="group bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={`${service.name} buffing by Raja Buffing Works`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {service.grade}
                                    </div>
                                </div>
                                <div className="p-6 flex items-center justify-between">
                                    <p className="font-black text-slate-900 tracking-tight">{service.name}</p>
                                    <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* ── RELATED BLOG POST ───────────────────────────────────── */}
                    {product.relatedBlogPost && (
                        <div className="mt-12 p-8 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-slate-700 transition-colors">
                            <div className="flex-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Technical Insight</p>
                                <h4 className="text-xl font-black text-white tracking-tight">
                                    {product.relatedBlogPost.title}
                                </h4>
                            </div>
                            <Link
                                href={product.relatedBlogPost.href}
                                className="bg-white text-slate-900 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2 shrink-0 shadow-lg"
                            >
                                Read Guide <ArrowRight size={14} />
                            </Link>
                        </div>
                    )}
                </section>

                {/* ── MACHINERY CROSS-LINK ─────────────────────────────────────── */}
                <section className="bg-slate-900 text-white rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Equipment</p>
                        <h3 className="text-2xl font-black tracking-tighter mb-3">
                            See the machinery behind this service
                        </h3>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">
                            Every finishing operation on this page runs through a grade-calibrated machine protocol.
                            Our 20+ motor fleet, matte polisher, beading lathe, and fiber laser are available for inspection.
                        </p>
                    </div>
                    <Link
                        href="/machinery"
                        className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-100 transition-all flex items-center gap-3 shrink-0"
                    >
                        View Machinery <ArrowRight size={18} />
                    </Link>
                </section>

            </div>
        </main>
    );
}