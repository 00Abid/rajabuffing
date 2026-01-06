import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Industrial Utensil Buffing Services | Matte & Mirror Specialists Vasai",
    description: "High-precision buffing for Milk Pots, Sauce Pots, and Commercial Cookware. 30+ years of expertise in SS 304/316 mirror finishing and premium matte textures.",
    keywords: "sauce pot buffing Vasai, milk pot polishing Maharashtra, wok pans buffing, silverware restoration, matte finish utensils",
    alternates: {
        canonical: 'https://rajabuffing.shop/Products',
    },
};

const products = [

    {
        slug: 'sauce-pot-buffing',
        id: 1,
        name: "Industrial Sauce Pots",
        description: "Specialized buffing for commercial-grade sauce pots. We ensure 100% surface uniformity for professional kitchen hygiene.",
        image: "/saucepot.webp",
        features: ["Food-Grade SS 304 Finishing", "High-Luster Mirror Luster", "Seamless Interior Polishing"],
    },
    {
        slug: 'milk-pot-polishing',
        id: 2,
        name: "Milk Pots (Pateela)",
        description: "Precision buffing for dairy equipment. Our process removes micro-scratches to prevent milk adhesion and bacterial growth.",
        image: "/milkpot.webp",
        features: ["Dairy-Grade Compliance", "Edge-to-Edge Buffing", "Mirror Finish Interiors"],
    },
    {
        slug: 'wok-pan-finishing',
        id: 3,
        name: "Wok / Deep Frying Pans",
        description: "Heavy-duty buffing for high-heat utensils. We provide durable finishes that withstand professional kitchen rigors.",
        image: "/kadhai.webp",
        features: ["SS 202/304 Compatible", "High-RPM Surface Smoothing", "External Matte Specialist Finish"],
    },
    {
        slug: 'silverware-restoration',
        id: 4,
        name: "Silverware Collections",
        description: "Expert restoration of antique and premium silverware. Our low-heat buffing preserves the metal while restoring original brilliance.",
        image: "/silverware.webp",
        features: ["Restoration Expertise", "Oxidation Removal", "Soft-Cloth Buffing Technique"],
    },
    {
        slug: "commercial-utensils-polishing",
        id: 5,
        name: "Commercial Utensils",
        description: "Bulk job-work for hotelware and catering equipment. Optimized for high-volume batches with 24-48 hour turnaround.",
        image: "/commercial.webp",
        features: ["Bulk Batch Pricing", "24-48h Dispatch", "Industrial Quality Audit"],
    },
    {
        slug: "specialty-matte-finishing",
        id: 6,
        name: "Matte Specialist Items",
        description: "Our signature fingerprint-resistant satin finish. Ideal for premium export-quality utensils and modern designer cookware.",
        image: "/special.webp",
        features: ["Exclusive Matte Texture", "Premium Aesthetic Appeal", "Export-Standard Finishing"],
    },
];

export default function Products() {
    // Schema for AEO: Associates your business with specific product entities
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": p.name,
            "description": p.description
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">

                {/* Technical Header */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} /> Industrial Capability Profile
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Utensil <br /> <span className="text-slate-400 italic font-medium">Finishing</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        Raja Buffing Works provides specialized matte and mirror finishing for a wide range of metal utensils.
                        We utilize custom-grade buffing wheels to match the specific SS grade of your products.
                    </p>
                </header>

                {/* Products Grid: Metallic Theme */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/Products/${product.slug}`}
                            className="group" // Move the group class here
                        >
                            <article className="h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">

                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} buffing by Raja Buffing Works`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={product.id <= 2}
                                    />
                                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        Verified Batch
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col grow">
                                    <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight flex items-center justify-between">
                                        {product.name}
                                        <ArrowUpRight size={20} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                                    </h2>

                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
                                        &ldquo;{product.description}&rdquo;
                                    </p>

                                    <div className="space-y-3 mt-auto">
                                        {product.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="text-xs text-slate-700 font-bold flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-transparent group-hover:border-slate-200 transition-colors"
                                            >
                                                <CheckCircle2 size={16} className="text-slate-400" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    {/* SEO Booster: Technical Link Signal */}
                                    <div className="mt-6 pt-6 border-t border-slate-50 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-blue-800 flex items-center gap-2">
                                        View Technical Specs <ArrowUpRight size={12} />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* B2B Trust CTA */}
                <footer className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl font-black uppercase italic mb-4">Export-Grade Quality Audit</h3>
                        <p className="text-slate-400 font-medium">
                            We provide comprehensive job-work for manufacturers. Every batch of
                            Sauce Pots or Milk Pots undergoes a manual quality check to
                            ensure mirror-finish compliance.
                        </p>
                    </div>
                    <Link href="/Contact" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all flex items-center gap-3 shrink-0">
                        Request Bulk Pricing <Star size={20} className="fill-slate-900" />
                    </Link>
                </footer>
            </div>
        </main>
    );
}