import { notFound } from 'next/navigation';
import { productData } from '../../../data/productData.js';
import Image from "next/image";
import Link from "next/link";
import {
    CheckCircle2,
    Settings,
    ShieldCheck,
    Factory,
    ArrowLeft,
    PhoneCall,
    Zap
} from "lucide-react";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) return {};

    return {
        title: `${product.h1} | Raja Buffing Works`,
        description: product.meta,
        alternates: {
            canonical: `https://rajabuffing.shop/Products/${slug}`,
        },
    };
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = productData[slug];

    if (!product) {
        notFound();
    }

    // Dynamic Product Schema for Google Rich Snippets
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": product.name,
        "description": product.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Raja Buffing Works",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vasai East",
                "addressRegion": "Maharashtra"
            }
        },
        "areaServed": "Maharashtra",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Industrial Finishing",
            "itemListElement": product.features.map((f, i) => ({
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": f }
            }))
        }
    };

    return (
        <main className="pt-32 pb-24 bg-white font-sans antialiased text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-6">

                {/* Navigation */}
                <Link href="/Products" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold text-sm mb-12 transition-all">
                    <ArrowLeft size={16} /> Back to Services
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Industrial Imagery */}
                    <div className="space-y-6">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                            <Image
                                src={product.image}
                                alt={product.h1}
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
                    </div>

                    {/* Right: Technical Specifications */}
                    <div className="space-y-10">
                        <header>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-200">
                                <ShieldCheck size={14} /> Certified Industrial Job-Work
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                                {product.name.split(' ').slice(0, -1).join(' ')} <span className="text-slate-400 italic">{product.name.split(' ').pop()}</span>
                            </h1>
                            <div
                                className="text-xl text-slate-600 leading-relaxed font-medium italic"
                                dangerouslySetInnerHTML={{ __html: `&quot;${product.longDescription}&quot;` }}
                            />
                        </header>

                        {/* Technical Data Table */}
                        <div className="bg-slate-50 rounded-4xl p-8 border border-slate-100">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                                <Settings size={16} /> Engineering Specs
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-tight">{key.replace(/([A-Z])/g, ' $1')}</span>
                                        <span className="text-sm font-black text-slate-900">{Array.isArray(value) ? value.join(', ') : value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Process Flow */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase tracking-tighter">The Restoration Workflow</h3>

                            <div className="grid gap-3">
                                {product.process.map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 transition-colors">
                                        <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded-full text-xs font-bold shrink-0">{i + 1}</span>
                                        <p className="text-sm font-bold text-slate-700">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Link href="/Contact" className="flex-1 bg-slate-900 text-white text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl">
                                <Zap size={20} /> Request Batch Quote
                            </Link>
                            <Link href="tel:+919096769473" className="flex-1 bg-white border-2 border-slate-900 text-slate-900 text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                <PhoneCall size={18} /> Call Specialist
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ / AEO Support Block */}
                <section className="mt-32 p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">Technical FAQ: {product.name}</h2>
                        <div className="space-y-8 text-center md:text-left">
                            <div className="bg-white p-8 rounded-3xl shadow-sm">
                                <h4 className="font-black text-slate-900 mb-2">What is the turnaround time for bulk {product.name} orders?</h4>
                                <p className="text-slate-500 text-sm font-medium">For standard batches in Vasai, we offer a 24-48 hour turnaround. High-precision export orders may require up to 72 hours for final luster audits.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm">
                                <h4 className="font-black text-slate-900 mb-2">Do you handle {product.technicalSpecs.metalGrades[0]} specifically?</h4>
                                <p className="text-slate-500 text-sm font-medium">Yes. Our machinery is calibrated for specific SS grades. We use different buffing compounds for {product.technicalSpecs.metalGrades.join(' and ')} to prevent surface thinning.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}