import { Star, Quote, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

export const metadata = {
    title: "Client Trust & Success Stories | Raja Buffing Works Vasai",
    description: "Verified reviews from industrial partners and retailers across Maharashtra. Rated 4.8/5 for matte and mirror finishing expertise. See why 150+ clients trust us.",
    keywords: "Raja Buffing Works reviews, industrial polishing testimonials, matte finish feedback, utensil restoration reviews, B2B buffing success stories",
    alternates: {
        canonical: 'https://rajabuffing.shop/testimonials',
    },
};

const testimonials = [
    {
        name: "Rajesh Kumar",
        business: "Kumar Restaurant Group",
        testimonial: "Raja Buffing Works has been our primary B2B partner for 5+ years. Their ability to handle high-volume mirror finishing for our commercial kitchenware is unmatched in the Vasai industrial belt.",
        rating: 5,
        date: "2025-11-01",
        type: "Commercial Partner"
    },
    {
        name: "Priya Sharma",
        business: "Boutique Home Chef",
        testimonial: "The Matte Specialist finish they provided for my custom cookware line is incredible. It gives the stainless steel a premium, scratch-resistant texture that my customers love.",
        rating: 5,
        date: "2025-10-15",
        type: "Retail Client"
    },
    {
        name: "Vikram Patel",
        business: "Patel Industrial Caterers",
        testimonial: "Reliability is key in logistics. Raja Buffing's 24-48 hour turnaround for bulk batches allows us to keep our operations running without downtime. Exceptional service.",
        rating: 5,
        date: "2025-09-20",
        type: "Industrial Partner"
    },
    {
        name: "Anita Desai",
        business: "Desai Kitchenware Exports",
        testimonial: "We rely on them for export-grade finishing. Their compliance with technical standards and HSN protocols makes them a highly trustworthy job-work unit.",
        rating: 5,
        date: "2025-08-10",
        type: "Export Partner"
    }
];

export default function Testimonials() {
    // 0.1% SEO: Enhanced Review & AggregateRating Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Industrial Buffing & Polishing",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Raja Buffing Works",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vasai East",
                "addressRegion": "Maharashtra"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "150",
            "bestRating": "5"
        },
        "review": testimonials.map(t => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": t.name },
            "datePublished": t.date,
            "reviewBody": t.testimonial,
            "reviewRating": { "@type": "Rating", "ratingValue": t.rating }
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header: E-E-A-T Focus */}
                {/* <header className="max-w-4xl mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-slate-200">
                        <ShieldCheck size={14} /> Verified Industry Reputation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                        Client <span className="text-slate-400 italic">Trust</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">
                        In the industrial sector, our reputation is forged in steel. From local caterers
                        to global exporters, discover why the industry leaders of Maharashtra choose
                        Raja Buffing Works for high-precision finishing.
                    </p>
                </header> */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={14} /> Verified Industry Reputation
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Client <br /> <span className="text-slate-400 italic font-medium">Trust</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        In the industrial sector, our reputation is forged in steel. From local caterers
                        to global exporters, discover why the industry leaders of Maharashtra choose
                        Raja Buffing Works for high-precision finishing.                    </p>
                </header>

                {/* Authority Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-8 bg-slate-900 rounded-3xl text-white flex items-center gap-6">
                        <div className="p-4 bg-slate-800 rounded-2xl"><CheckCircle2 className="text-slate-400" /></div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">4.8/5</p>
                            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Aggregate Rating</p>
                        </div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 text-slate-900">
                        <div className="p-4 bg-white rounded-2xl shadow-sm"><Building2 className="text-slate-600" /></div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">150+</p>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Business Partners</p>
                        </div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-6 text-slate-900">
                        <div className="p-4 bg-white rounded-2xl shadow-sm"><Star className="text-slate-600" /></div>
                        <div>
                            <p className="text-3xl font-black tracking-tighter">98%</p>
                            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Retention Rate</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <article
                            key={index}
                            className="relative p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <Quote className="absolute top-8 right-10 text-slate-100 group-hover:text-slate-200 transition-colors" size={60} />

                            <div className="relative z-10">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-slate-900 text-slate-900" />
                                    ))}
                                </div>

                                <blockquote className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8 italic">
                                    &ldquo;{t.testimonial}&rdquo;
                                </blockquote>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                    <div>
                                        <cite className="not-italic font-black text-slate-900 text-lg">{t.name}</cite>
                                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t.business}</p>
                                    </div>
                                    <span className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-100">
                                        {t.type}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* B2B Referral Section */}
                <section className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-200 text-center">
                    <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Become a Trusted Partner</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10 font-medium">
                        Join the industrial leaders of Maharashtra. We offer specialized bulk rates
                        for manufacturers, retailers, and commercial kitchen suppliers.
                    </p>
                    <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-black transition-all shadow-xl">
                        Inquire for Job-Work Partnerships
                    </button>
                </section>
            </div>
        </main>
    );
}