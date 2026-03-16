import Link from "next/link";
import { Star, Quote, ShieldCheck, CheckCircle2, Building2, ArrowRight, ArrowUpRight, Zap } from "lucide-react";

export const metadata = {
    title: "Client Reviews & B2B Partners | Raja Buffing Works Vasai",
    description: "Verified reviews from utensil manufacturers, exporters, and catering operations across Maharashtra. 4.8/5 rating. 150+ B2B partners. Raja Buffing Works.",
    keywords: "Raja Buffing Works reviews, industrial polishing testimonials, matte finish feedback, utensil restoration reviews, B2B buffing success stories Maharashtra, commercial utensil polishing client reviews Vasai",
    alternates: {
        canonical: 'https://www.rajabuffing.shop/testimonials',
    },
};

// Each testimonial has:
// - plainText: used in JSON-LD schema (must be a string, not JSX)
// - jsx: rendered in the UI with internal links
const testimonials = [
    {
        name: "Rajesh Kumar",
        business: "Kumar Restaurant Group",
        type: "Commercial Partner",
        location: "Mumbai, Maharashtra",
        rating: 5,
        date: "2025-11-01",
        plainText: "Raja Buffing Works has been our primary B2B partner for 5+ years. Their ability to handle high-volume mirror finishing for our commercial kitchenware is unmatched in the Vasai industrial belt.",
        jsx: (
            <span>
                Raja Buffing Works has been our primary B2B partner for 5+ years. Their ability to handle high-volume mirror finishing for our{" "}
                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    commercial kitchenware
                </Link>{" "}
                is unmatched in the Vasai industrial belt.
            </span>
        ),
        serviceLink: { label: "Commercial Utensil Polishing", href: "/products/commercial-utensils-polishing" }
    },
    {
        name: "Priya Sharma",
        business: "Boutique Home Chef",
        type: "Retail Client",
        location: "Thane, Maharashtra",
        rating: 5,
        date: "2025-10-15",
        plainText: "The Matte Specialist finish they provided for my custom cookware line is incredible. It gives the stainless steel a premium, scratch-resistant texture that my customers love.",
        jsx: (
            <span>
                The{" "}
                <Link href="/products/specialty-matte-finishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    Matte Specialist finish
                </Link>{" "}
                they provided for my custom cookware line is incredible. It gives the stainless steel a premium, scratch-resistant texture that my customers love.
            </span>
        ),
        serviceLink: { label: "Matte Specialist Finishing", href: "/products/specialty-matte-finishing" }
    },
    {
        name: "Vikram Patel",
        business: "Patel Industrial Caterers",
        type: "Industrial Partner",
        location: "Palghar, Maharashtra",
        rating: 5,
        date: "2025-09-20",
        plainText: "Reliability is key in logistics. Raja Buffing's 24-48 hour turnaround for bulk batches allows us to keep our operations running without downtime. Exceptional service.",
        jsx: (
            <span>
                Reliability is key in logistics. Raja Buffing&apos;s{" "}
                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    24-48 hour turnaround for bulk batches
                </Link>{" "}
                allows us to keep our operations running without downtime. Exceptional service.
            </span>
        ),
        serviceLink: { label: "Bulk Job-Work", href: "/products/commercial-utensils-polishing" }
    },
    {
        name: "Anita Desai",
        business: "Desai Kitchenware Exports",
        type: "Export Partner",
        location: "Vasai East, Maharashtra",
        rating: 5,
        date: "2025-08-10",
        plainText: "We rely on them for export-grade finishing. Their compliance with technical standards and HSN protocols makes them a highly trustworthy job-work unit.",
        jsx: (
            <span>
                We rely on them for export-grade finishing. Their compliance with technical standards and{" "}
                <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    HSN 7323 protocols
                </Link>{" "}
                makes them a highly trustworthy job-work unit.
            </span>
        ),
        serviceLink: { label: "HSN 7323 Compliance Guide", href: "/blog/hsn-code-7323-job-work-compliance" }
    },
];

export default function Testimonials() {

    // Schema uses plainText only -- JSX cannot be serialized to JSON
    const jsonLd = {
        "@context": "https://schema.org",
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
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": testimonials.map(t => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "datePublished": t.date,
            "reviewBody": t.plainText,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": String(t.rating),
                "bestRating": "5",
                "worstRating": "1"
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
                        <ShieldCheck size={14} /> Verified Industry Reputation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Client <br /> <span className="text-slate-400 italic font-medium">Trust</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                        In industrial job-work, reputation is the only credential that matters.
                        These are our B2B partners -- manufacturers, exporters, caterers, and hotelware buyers
                        across Maharashtra who send us recurring batch consignments because the finish quality and
                        dispatch reliability are consistent.
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Every batch we process is invoiced under{" "}
                        <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            HSN Code 7323
                        </Link>{" "}
                        with full GST documentation. Our{" "}
                        <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            six finishing services
                        </Link>{" "}
                        cover SS 202 through SS 316, brass, aluminium, and silverware -- all from our{" "}
                        <Link href="/machinery" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            Vasai East facility
                        </Link>
                        .
                    </p>
                </header>

                {/* ── STATS BAR ─────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 bg-slate-900 rounded-3xl text-white flex items-center gap-6">
                        <div className="p-4 bg-slate-800 rounded-2xl shrink-0">
                            <CheckCircle2 className="text-slate-400" />
                        </div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">4.8/5</p>
                            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Aggregate Rating</p>
                        </div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 text-slate-900">
                        <div className="p-4 bg-white rounded-2xl shadow-sm shrink-0">
                            <Building2 className="text-slate-600" />
                        </div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">150+</p>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Business Partners</p>
                        </div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 text-slate-900">
                        <div className="p-4 bg-white rounded-2xl shadow-sm shrink-0">
                            <Star className="text-slate-600" />
                        </div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">98%</p>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Retention Rate</p>
                        </div>
                    </div>
                </div>

                {/* ── TESTIMONIAL GRID ──────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {testimonials.map((t, index) => (
                        <article
                            key={index}
                            className="relative p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
                        >
                            <Quote className="absolute top-8 right-10 text-slate-100 group-hover:text-slate-200 transition-colors" size={60} />

                            <div className="relative z-10 flex flex-col grow">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-slate-900 text-slate-900" />
                                    ))}
                                </div>

                                {/* Testimonial body -- uses JSX version with internal links */}
                                <blockquote className="text-lg font-medium text-slate-700 leading-relaxed mb-6 italic grow">
                                    &ldquo;{t.jsx}&rdquo;
                                </blockquote>

                                {/* Related service tag */}
                                <Link
                                    href={t.serviceLink.href}
                                    className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-50 border border-slate-200 hover:border-slate-900 hover:text-slate-900 px-3 py-1.5 rounded-full transition-all mb-6 self-start"
                                >
                                    {t.serviceLink.label} <ArrowUpRight size={10} />
                                </Link>

                                {/* Author */}
                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div>
                                        <cite className="not-italic font-black text-slate-900 text-lg">{t.name}</cite>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.business}</p>
                                        <p className="text-xs font-medium text-slate-300 mt-0.5">{t.location}</p>
                                    </div>
                                    <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-100 shrink-0">
                                        {t.type}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ── WHY PARTNERS STAY ─────────────────────────────────────── */}
                <section className="mb-20">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">
                        What Our Partners Come Back For
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Grade-Matched Precision",
                                desc: "SS 202, SS 304, SS 316, brass, and aluminium each processed with compound and RPM protocols calibrated to the specific grade. No single-protocol shortcuts on mixed batches.",
                                href: "/products",
                                linkLabel: "All Six Services"
                            },
                            {
                                title: "24-48 Hour Dispatch",
                                desc: "Standard bulk batches dispatched within 24-48 hours from our Vasai East facility. Dedicated scheduling slots available for 5,000+ unit consignments.",
                                href: "/products/commercial-utensils-polishing",
                                linkLabel: "Commercial Job-Work"
                            },
                            {
                                title: "HSN 7323 Compliance",
                                desc: "Full GST documentation on every order. B2B manufacturers claim input tax credit on all job-work charges. Complete HSN 7323 invoicing included as standard.",
                                href: "/blog/hsn-code-7323-job-work-compliance",
                                linkLabel: "Read Compliance Guide"
                            },
                            {
                                title: "Export-Grade Matte Finishing",
                                desc: "Ra 0.5μm-0.8μm precision on dedicated 8-unit matte array. Unidirectional grain consistency verified at output. Ra documentation available for export specification compliance.",
                                href: "/products/specialty-matte-finishing",
                                linkLabel: "Matte Specialist"
                            },
                            {
                                title: "Silverware Restoration",
                                desc: "Low-heat soft-cloth protocol for hotel and catering silverware. Zero measurable metal removal. Plating-safe on silver-plated pieces from 5 microns upward.",
                                href: "/products/silverware-restoration",
                                linkLabel: "Silverware Service"
                            },
                            {
                                title: "Technical Knowledge",
                                desc: "30+ years of documented operational knowledge on SS grade buffing, Ra values, HSN compliance, and B2B care protocols. Available as free technical resources.",
                                href: "/blog",
                                linkLabel: "Technical Insights"
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-4">
                                <h3 className="font-black text-slate-900 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed grow">{item.desc}</p>
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide text-slate-900 hover:text-slate-600 transition-colors"
                                >
                                    {item.linkLabel} <ArrowRight size={12} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── SERVICE QUICK-LINKS ───────────────────────────────────── */}
                <section className="mb-20 bg-slate-50 border border-slate-200 rounded-[3rem] p-12">
                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Services Our Partners Use</h2>
                    <p className="text-slate-500 font-medium mb-8 max-w-xl">
                        Every client type above maps to a specific service. Find yours below.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing", tag: "SS 304/316" },
                            { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing", tag: "Dairy Grade" },
                            { name: "Wok & Frying Pan", href: "/products/wok-pan-finishing", tag: "SS 202/304" },
                            { name: "Silverware Restoration", href: "/products/silverware-restoration", tag: "Hotel/Catering" },
                            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", tag: "Bulk Job-Work" },
                            { name: "Matte Specialist", href: "/products/specialty-matte-finishing", tag: "Export Grade" },
                        ].map((service, i) => (
                            <Link
                                key={i}
                                href={service.href}
                                className="group flex items-center justify-between gap-3 bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-5 transition-all"
                            >
                                <div>
                                    <p className="font-black text-slate-900 text-sm">{service.name}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">{service.tag}</p>
                                </div>
                                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────────────── */}
                <section className="p-12 md:p-16 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">
                            B2B Partnership Enquiry
                        </p>
                        <h2 className="text-4xl font-black tracking-tighter leading-tight mb-4">
                            Become a Trusted Partner
                        </h2>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Join 150+ manufacturers, exporters, and catering operations across Maharashtra.
                            We offer dedicated batch scheduling, volume pricing, and full{" "}
                            <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-300 font-bold underline underline-offset-2 hover:text-white transition-colors">
                                HSN 7323 GST compliance
                            </Link>{" "}
                            on all recurring job-work consignments.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 shrink-0">
                        <Link
                            href="/contact"
                            className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-100 transition-all shadow-xl flex items-center gap-3"
                        >
                            <Zap size={20} /> Inquire for Job-Work Partnership
                        </Link>
                        <Link
                            href="/products"
                            className="border border-slate-700 text-slate-400 px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:border-slate-500 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}