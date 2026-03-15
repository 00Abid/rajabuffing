import Link from "next/link";
import { Cpu, ShieldCheck, Zap, ArrowRight, Factory, Settings } from "lucide-react";

export const metadata = {
    title: "Industrial Machinery Fleet",
    description: "Tier-1 machinery fleet including 20+ buffing motors, matte precision polishers, and fiber laser engravers for bulk utensil job-work in Vasai.",
    keywords: "industrial buffing machinery Vasai, buffing motors Maharashtra, matte finish polishing machine, hydraulic press utensils, beading lathe machine, fiber laser engraver utensils, SS polishing machinery Vasai East",
    alternates: {
        canonical: 'https://www.rajabuffing.shop/machinery',
    },
};

const machines = [
    {
        id: "buffing-system",
        name: "Industrial Buffing System",
        subName: "Heavy-Duty Utensil Finisher",
        description: (
            <span>
                Our primary high-capacity system designed for{" "}
                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    bulk utensil finishing and commercial job-work
                </Link>
                . A 20-motor buffing array capable of handling 500+ pieces per hour with consistent mirror luster across SS 202, SS 304, and SS 316 grade batches.
            </span>
        ),
        video: "/buff.mp4",
        poster: "/buff.webp",
        specs: [
            "Processing speed: 500+ pieces/hour",
            "Advanced 20-Motor Buffing Array",
            "Variable RPM for SS 202/304/316",
            "Industrial Heat Dissipation System"
        ],
        schemaName: "Industrial Buffing System",
        schemaDesc: "High-capacity 20-motor buffing array for bulk utensil mirror and matte finishing at 500+ pieces per hour"
    },
    {
        id: "matte-polisher",
        name: "Matte Precision Polisher",
        subName: "Satin Finish Specialist",
        description: (
            <span>
                Dedicated 8-unit matte array with precision pressure regulators -- the core machinery behind our{" "}
                <Link href="/products/specialty-matte-finishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    matte specialist finishing
                </Link>{" "}
                reputation. Programmed to achieve specific Ra (Roughness Average) values for fingerprint-resistant satin surfaces on export-grade cookware. See the{" "}
                <Link href="/blog/matte-specialist-finishing-process" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    technical process behind Ra value targeting
                </Link>
                .
            </span>
        ),
        video: "/matte.mp4",
        poster: "/matte.webp",
        specs: [
            "8-Unit Dedicated Matte Array",
            "Precision Pressure Regulators",
            "Ra Value-Targeted Programming",
            "Fingerprint-Resistant Finish Logic"
        ],
        schemaName: "Matte Precision Polisher",
        schemaDesc: "8-unit dedicated matte array with Ra value targeting for fingerprint-resistant satin finishes on export cookware"
    },
    {
        id: "hydraulic-press",
        name: "Industrial Hydraulic Press",
        subName: "Pre-Buffing Form Integrity",
        description: (
            <span>
                Dual-stage 100T hydraulic forming units used in the pre-buffing stage to ensure structural integrity and dimensional accuracy before any{" "}
                <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    polishing or finishing operation
                </Link>{" "}
                begins. Handles heavy-gauge utensils and commercial kitchenware across all supported metal grades.
            </span>
        ),
        video: "/press.mp4",
        poster: "/press.webp",
        specs: [
            "Dual-Stage 100T Hydraulic Units",
            "Precision Environmental Control",
            "Zero-Tolerance Forming Accuracy",
            "Auto-Lubrication System"
        ],
        schemaName: "Industrial Hydraulic Press",
        schemaDesc: "Dual-stage 100T hydraulic press for pre-buffing form integrity and dimensional accuracy on heavy-gauge utensils"
    },
    {
        id: "beading-lathe",
        name: "Beading Lathe Machine",
        subName: "Edge & Rim Perfection System",
        description: (
            <span>
                High-torque beading lathe units for precision rim formation and edge smoothing on stainless steel and brass utensils. Essential for{" "}
                <Link href="/products/silverware-restoration" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    silverware restoration
                </Link>{" "}
                and premium cookware where edge finish is part of the product specification. Multi-diameter support covers the full range of{" "}
                <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    utensil types we service
                </Link>
                .
            </span>
        ),
        video: "/lathe.mp4",
        poster: "/lathe.webp",
        specs: [
            "High-Torque Beading Motors",
            "Automated Edge Guidance System",
            "Vibration Dampening Base",
            "Multi-Utensil Diameter Support"
        ],
        schemaName: "Beading Lathe Machine",
        schemaDesc: "High-torque beading lathe for precision rim formation and edge smoothing on SS and brass utensils"
    },
    {
        id: "laser-engraver",
        name: "Fiber Laser Engraving System",
        subName: "Permanent Brand Identity",
        description: (
            <span>
                50W fiber laser for permanent branding, batch coding, and hallmarking on finished utensils. High-contrast, micro-precision marks compatible with SS 202, SS 304, SS 316, brass, and aluminium grades. Available as an add-on to any{" "}
                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    commercial job-work batch
                </Link>
                .{" "}
                <Link href="/contact" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    Enquire about laser engraving job-work
                </Link>
                .
            </span>
        ),
        video: "/laser.mp4",
        poster: "/laser.webp",
        specs: [
            "50W Fiber Laser Power",
            "Ultra-Fine Hallmarking Accuracy",
            "High-Speed Batch Processing",
            "Supports LOGO & Batch Coding"
        ],
        schemaName: "Fiber Laser Engraving System",
        schemaDesc: "50W fiber laser for permanent branding, hallmarking, and batch coding on SS 202, 304, 316, brass, and aluminium grades"
    },
];

export default function Machinery() {

    const machinerySchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Industrial Buffing Machinery Fleet - Raja Buffing Works",
        "description": "Tier-1 industrial machinery fleet operated by Raja Buffing Works, Vasai East. Comprising buffing systems, matte polishers, hydraulic press, beading lathe, and fiber laser engraver for bulk utensil job-work.",
        "itemListElement": machines.map((m, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
                "@type": "Product",
                "name": m.schemaName,
                "description": m.schemaDesc,
                "image": `https://www.rajabuffing.shop${m.poster}`,
                "brand": {
                    "@type": "Brand",
                    "name": "Raja Buffing Works"
                },
                "manufacturer": {
                    "@id": "https://www.rajabuffing.shop/#localbusiness"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.rajabuffing.shop/machinery",
                    "priceCurrency": "INR",
                    "price": "0",
                    "availability": "https://schema.org/InStock",
                    "priceValidUntil": "2027-12-31"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "12"
                }
            }
        }))
    };

    return (
        <main className="pt-32 pb-24 bg-white font-sans antialiased text-slate-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(machinerySchema) }} />

            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Tier-1 Industrial Machinery -- Vasai East
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Industrial <br /> <span className="text-slate-400 italic font-medium">Assets</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                        Raja Buffing Works operates a Tier-1 facility in Vasai East with a fleet of 20+ industrial buffing motors,
                        dedicated matte polishing systems, hydraulic forming press, beading lathe units, and a fiber laser engraver.
                        Every machine is calibrated for bulk job-work across SS 202, SS 304, SS 316, brass, and aluminium grades.
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        The machinery stack below is what enables our{" "}
                        <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            six core finishing services
                        </Link>{" "}
                        to operate at scale with consistent quality audits per batch. For technical questions on
                        grade compatibility and machine selection, visit our{" "}
                        <Link href="/blog" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            Technical Insights
                        </Link>
                        .
                    </p>
                </header>

                {/* CAPABILITY STATS BAR */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { val: "20+", label: "Buffing Motors" },
                        { val: "500+", label: "Pieces/Hour Capacity" },
                        { val: "5", label: "Machine Categories" },
                        { val: "SS 202-316", label: "Grade Coverage" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                            <p className="text-3xl font-black tracking-tighter text-slate-900 mb-1">{stat.val}</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* MACHINE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {machines.map((machine) => (
                        <article
                            key={machine.id}
                            className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative aspect-4/3 bg-slate-200">
                                <video
                                    src={machine.video}
                                    className="w-full h-full object-cover"
                                    autoPlay loop muted playsInline
                                    title={machine.name + " at Raja Buffing Works Vasai East"}
                                    aria-label={machine.name + " machinery video"}
                                    poster={machine.poster}
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                    Live Ops
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black tracking-tight">{machine.name}</h2>
                                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{machine.subName}</p>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                                    {machine.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <Cpu size={16} />
                                        <h3 className="text-xs font-black uppercase tracking-widest">Technical Specs</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {machine.specs.map((spec, i) => (
                                            <li key={i} className="text-xs text-slate-500 flex items-center gap-2 font-bold">
                                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0"></div>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* HOW MACHINERY MAPS TO SERVICES -- NEW SECTION */}
                <section className="mt-24 bg-slate-50 border border-slate-200 rounded-[3rem] p-12">
                    <h2 className="text-3xl font-black tracking-tighter uppercase mb-2">How the Machinery Maps to Your Order</h2>
                    <p className="text-slate-500 font-medium mb-10 max-w-2xl">
                        Every utensil type goes through a specific machine sequence depending on the target finish and grade.
                        Here is how the fleet serves each of our core job-work categories.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                service: "Sauce Pot & Milk Pot Polishing",
                                machines: "Industrial Buffing System + Lustre Audit",
                                href: "/products/sauce-pot-buffing",
                                note: "SS 304/316 mirror finish protocol"
                            },
                            {
                                service: "Matte Specialist Finishing",
                                machines: "Matte Precision Polisher (Ra-targeted)",
                                href: "/products/specialty-matte-finishing",
                                note: "Export-grade satin texture"
                            },
                            {
                                service: "Commercial Utensils Job Work",
                                machines: "Industrial Buffing System + Hydraulic Press (pre-form)",
                                href: "/products/commercial-utensils-polishing",
                                note: "Bulk batches, 24-48hr dispatch"
                            },
                            {
                                service: "Silverware Restoration",
                                machines: "Beading Lathe + Industrial Buffing System",
                                href: "/products/silverware-restoration",
                                note: "Low-heat soft-cloth technique"
                            },
                            {
                                service: "Wok & Frying Pan Finishing",
                                machines: "Industrial Buffing System (high-RPM external matte)",
                                href: "/products/wok-pan-finishing",
                                note: "SS 202/304 compatible"
                            },
                            {
                                service: "Laser Engraving Add-On",
                                machines: "Fiber Laser Engraving System",
                                href: "/Contact",
                                note: "Available on any batch"
                            }
                        ].map((row, i) => (
                            <Link
                                key={i}
                                href={row.href}
                                className="group flex flex-col gap-2 bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-6 transition-all"
                            >
                                <div className="flex items-start justify-between">
                                    <p className="font-black text-slate-900 text-sm">{row.service}</p>
                                    <ArrowRight size={14} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                                </div>
                                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{row.machines}</p>
                                <p className="text-xs text-slate-400 font-medium">{row.note}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* TRUST FOOTER */}
                <footer className="mt-16 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h4 className="text-3xl font-bold mb-4 italic tracking-tighter">Scalable Batch Processing</h4>
                        <p className="text-slate-400 font-medium mb-4">
                            Our fleet of 20+ buffing motors ensures your production line never stops.
                            We handle batches from 100 to 10,000+ units with consistent quality audits per dispatch.
                        </p>
                        <p className="text-slate-500 text-sm font-medium">
                            Read more about our{" "}
                            <Link href="/blog/ss-304-vs-316-buffing-guide" className="text-slate-300 font-bold underline underline-offset-2 hover:text-white transition-colors">
                                SS grade-specific buffing protocols
                            </Link>{" "}
                            or{" "}
                            <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-300 font-bold underline underline-offset-2 hover:text-white transition-colors">
                                HSN 7323 job-work compliance
                            </Link>
                            .
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all flex items-center gap-3 shadow-xl shrink-0"
                    >
                        Request Machine Spec Sheet <Zap size={20} />
                    </Link>
                </footer>

            </div>
        </main>
    );
}