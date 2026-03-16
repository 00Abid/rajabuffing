import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Industrial Utensil Buffing Services Vasai | Raja Buffing Works",
    description: "Six SS grade finishing services: sauce pots, milk pots, woks, silverware, commercial kitchenware, and matte specialist finishing. HSN 7323. Vasai East.",
    keywords: "sauce pot buffing Vasai, milk pot polishing Maharashtra, wok pan buffing, silverware restoration Vasai, matte finish utensils Maharashtra, commercial utensil polishing, SS 304 buffing job work, HSN 7323 utensil finishing",
    alternates: {
        canonical: 'https://www.rajabuffing.shop/products',
    },
};

const products = [
    {
        slug: 'sauce-pot-buffing',
        id: 1,
        name: "Industrial Sauce Pots",
        grade: "SS 304 / 316",
        description: "Specialized buffing for commercial-grade sauce pots. Thermal blueing removal at weld seams, seamless induction base transitions, and food-grade SS 304 mirror luster to Ra < 0.2μm.",
        image: "/saucepot.webp",
        features: ["Food-Grade SS 304/316 Finishing", "Mirror Luster Ra < 0.2μm", "Seamless Interior Polishing"],
    },
    {
        slug: 'milk-pot-polishing',
        id: 2,
        name: "Milk Pots (Pateela)",
        grade: "Dairy-Grade SS",
        description: "Precision buffing for dairy equipment. Our process removes micro-scratches to prevent milk adhesion and bacterial growth. Edge-to-edge coverage with mirror finish interiors.",
        image: "/milkpot.webp",
        features: ["Dairy-Grade Compliance", "Edge-to-Edge Buffing", "Mirror Finish Interiors"],
    },
    {
        slug: 'wok-pan-finishing',
        id: 3,
        name: "Wok / Deep Frying Pans",
        grade: "SS 202 / 304",
        description: "Heavy-duty buffing for high-heat utensils. High-RPM surface smoothing with our external matte specialist finish for professional kitchen durability.",
        image: "/kadhai.webp",
        features: ["SS 202/304 Compatible", "High-RPM Surface Smoothing", "External Matte Specialist Finish"],
    },
    {
        slug: 'silverware-restoration',
        id: 4,
        name: "Silverware Collections",
        grade: "Silver / Brass",
        description: "Expert restoration of antique and premium silverware. Low-heat soft-cloth buffing preserves the metal while removing oxidation and restoring original brilliance.",
        image: "/silverware.webp",
        features: ["Restoration Expertise", "Oxidation Removal", "Soft-Cloth Buffing Technique"],
    },
    {
        slug: "commercial-utensils-polishing",
        id: 5,
        name: "Commercial Utensils",
        grade: "All Grades",
        description: "Bulk job-work for hotelware and catering equipment. HSN 7323 compliant invoicing with 24-48 hour dispatch. Optimized for high-volume manufacturer batches.",
        image: "/commercial.webp",
        features: ["Bulk Batch Pricing", "24-48h Dispatch", "HSN 7323 Invoicing"],
    },
    {
        slug: "specialty-matte-finishing",
        id: 6,
        name: "Matte Specialist Items",
        grade: "Export SS Grades",
        description: "Our signature fingerprint-resistant satin finish using Ra value-targeted protocols. Ideal for premium export-quality utensils and modern designer cookware.",
        image: "/special.webp",
        features: ["Ra Value-Targeted Texture", "Fingerprint-Resistant Satin", "Export-Standard Finishing"],
    },
];

export default function Products() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Utensil Buffing and Finishing Services -- Raja Buffing Works",
        "description": "Six core job-work categories for matte and mirror finishing of SS 304, SS 316, and brass utensils. Operated from Vasai East, Maharashtra.",
        "itemListElement": products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Service",
                "name": p.name,
                "description": p.description,
                "url": `https://www.rajabuffing.shop/products/${p.slug}`,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Raja Buffing Works",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vasai East",
                        "addressRegion": "Maharashtra",
                        "postalCode": "401208",
                        "addressCountry": "IN"
                    }
                }
            }
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} /> Industrial Capability Profile
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Utensil <br /> <span className="text-slate-400 italic font-medium">Finishing</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                        Raja Buffing Works provides specialized matte and mirror finishing for a wide range of metal utensils.
                        Each job-work category uses a grade-matched buffing compound and RPM protocol calibrated to the
                        specific utensil type -- SS 202, SS 304, SS 316, brass, or aluminium.
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                        Our{" "}
                        <Link href="/machinery" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            industrial machinery fleet
                        </Link>{" "}
                        includes a 20-motor buffing array, dedicated matte polisher, hydraulic press, beading lathe,
                        and fiber laser engraver. For mixed-grade batches, multiple finish types can be processed in
                        a single consignment.{" "}
                        <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            All orders are invoiced under HSN Code 7323
                        </Link>{" "}
                        with full GST compliance for B2B input tax credit eligibility.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-700 transition-colors text-sm"
                    >
                        Request Bulk Pricing <ArrowRight size={16} />
                    </Link>
                </header>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="group"
                        >
                            <article className="h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">

                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} buffing and polishing by Raja Buffing Works Vasai East`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={product.id <= 2}
                                    />
                                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        Verified Batch
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        {product.grade}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col grow">
                                    <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight flex items-center justify-between">
                                        {product.name}
                                        <ArrowUpRight size={20} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                    </h2>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                                        {product.description}
                                    </p>

                                    <div className="space-y-3 mt-auto">
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="text-xs text-slate-700 font-bold flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-colors"
                                            >
                                                <CheckCircle2 size={16} className="text-slate-400 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 flex items-center gap-2 transition-colors">
                                        View Technical Specs <ArrowUpRight size={12} />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* CONTEXTUAL CROSS-LINKS SECTION */}
                <section className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-3xl p-10">
                        <h2 className="text-2xl font-black tracking-tighter uppercase mb-4">Before You Submit a Batch</h2>
                        <p className="text-slate-500 font-medium leading-relaxed mb-6">
                            Two technical resources that answer the most common pre-order questions from manufacturers.
                        </p>
                        <div className="space-y-4">
                            <Link
                                href="/blog/ss-304-vs-316-buffing-guide"
                                className="group flex items-center justify-between gap-4 bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-6 transition-all"
                            >
                                <div>
                                    <p className="font-black text-slate-900 text-sm mb-1">SS 304 vs. SS 316: Which grade needs which compound?</p>
                                    <p className="text-xs text-slate-500 font-medium">Technical guide -- 9 min read</p>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                            </Link>
                            <Link
                                href="/blog/hsn-code-7323-job-work-compliance"
                                className="group flex items-center justify-between gap-4 bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-6 transition-all"
                            >
                                <div>
                                    <p className="font-black text-slate-900 text-sm mb-1">HSN 7323 job-work invoicing and GST input credit eligibility</p>
                                    <p className="text-xs text-slate-500 font-medium">Compliance guide -- 7 min read</p>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-slate-900 text-white rounded-3xl p-10 flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">Machinery</p>
                            <h3 className="text-xl font-black tracking-tighter mb-4">See what processes your batch</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                20+ buffing motors, dedicated matte polisher, beading lathe, and fiber laser engraver.
                                Every machine calibrated per SS grade.
                            </p>
                        </div>
                        <Link
                            href="/machinery"
                            className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-black uppercase tracking-tight text-sm hover:bg-slate-100 transition-colors"
                        >
                            View Machinery <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* B2B TRUST CTA */}
                <footer className="mt-12 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl font-black uppercase italic mb-4">Export-Grade Quality Audit</h3>
                        <p className="text-slate-400 font-medium">
                            We provide comprehensive job-work for manufacturers across all six finishing categories.
                            Every batch -- sauce pots, milk pots, woks, silverware, commercial kitchenware, or matte specialist items --
                            undergoes a manual quality check to ensure finish compliance before dispatch.
                            <span className="block mt-3 text-slate-500 text-sm">
                                HSN 7323 invoicing available on all orders.{" "}
                                <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-300 font-bold underline underline-offset-2 hover:text-white transition-colors">
                                    Read the compliance guide.
                                </Link>
                            </span>
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all flex items-center gap-3 shrink-0"
                    >
                        Request Bulk Pricing <Star size={20} className="fill-slate-900" />
                    </Link>
                </footer>

            </div>
        </main>
    );
}