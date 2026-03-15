import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight, ArrowUpRight, Zap, Package, FileText, Truck } from "lucide-react";
import Form from "../components/Form";

export const metadata = {
    title: "Get a Bulk Job-Work Quote",
    description: "Get a bulk job-work quote for SS 304/316 buffing and matte finishing. HSN 7323 compliant invoicing with 24-48h dispatch in Vasai East.",
    keywords: "contact Raja Buffing Works, buffing job work quote Vasai, metal polishing Maharashtra inquiry, Vasai East industrial buffing, bulk utensil polishing quote, HSN 7323 job work Vasai",
    alternates: {
        canonical: 'https://www.rajabuffing.shop/contact',
    },
};

export default function Contact() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rajabuffing.shop" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.rajabuffing.shop/contact" }
                ]
            },
            {
                "@type": "LocalBusiness",
                "name": "Raja Buffing Works",
                "image": "https://www.rajabuffing.shop/logo.webp",
                "url": "https://www.rajabuffing.shop",
                "telephone": "+919096769473",
                "email": "rajabuffingworks02@gmail.com",
                "description": "Industrial matte finishing and mirror polishing specialist for SS 202, SS 304, SS 316, brass, and aluminium utensils. HSN 7323 job-work. Serving manufacturers across Maharashtra since 1994.",
                "priceRange": "Contact for bulk pricing",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Behind Bengali Chawl, Naikpada",
                    "addressLocality": "Vasai East",
                    "addressRegion": "Maharashtra",
                    "postalCode": "401208",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.4164,
                    "longitude": 72.8697
                },
                "areaServed": ["Vasai", "Vasai East", "Boisar", "Palghar", "Thane", "Mumbai", "Maharashtra"],
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Metal Finishing Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mirror Polishing SS 304/316" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Matte Specialist Finishing Ra 0.5-0.8μm" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bulk Commercial Utensil Job-Work HSN 7323" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Silverware Restoration" } }
                    ]
                }
            }
        ]
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-7xl mx-auto px-6">

                {/* ── HEADER ────────────────────────────────────────────────── */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Response within 120 minutes
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Get a <br /> <span className="text-slate-400 italic font-medium">Quote</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6">
                        Send your SS grade, finish specification, batch size, and dispatch requirement.
                        We confirm pricing and lead time on the same working day. All job-work invoiced under{" "}
                        <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            HSN Code 7323
                        </Link>{" "}
                        with full GST documentation.
                    </p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        We handle{" "}
                        <Link href="/products/specialty-matte-finishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            matte specialist finishing
                        </Link>
                        ,{" "}
                        <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            bulk commercial job-work
                        </Link>
                        ,{" "}
                        <Link href="/products/silverware-restoration" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            silverware restoration
                        </Link>
                        , and all{" "}
                        <Link href="/products" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                            six SS grade finishing services
                        </Link>{" "}
                        from our Vasai East facility.
                    </p>
                </header>

                {/* ── MAIN GRID: FORM + CONTACT INFO ────────────────────────── */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

                    {/* LEFT: Form + Pre-inquiry guidance */}
                    <section className="space-y-8">

                        {/* What to include guidance -- improves form submission quality */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                                What to Include in Your Inquiry
                            </p>
                            <div className="space-y-3">
                                {[
                                    { icon: <Package size={14} />, label: "SS Grade", detail: "SS 202, SS 304, SS 316, Brass, Aluminium, or mixed" },
                                    { icon: <FileText size={14} />, label: "Finish Type", detail: "Mirror, matte (Ra target if known), or dual-finish" },
                                    { icon: <Package size={14} />, label: "Batch Size", detail: "Number of pieces and utensil type (sauce pots, milk pots, etc.)" },
                                    { icon: <Truck size={14} />, label: "Dispatch Requirement", detail: "Standard 24-48h or specific date requirement" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="p-1.5 bg-slate-200 rounded-lg text-slate-600 shrink-0 mt-0.5">{item.icon}</div>
                                        <div>
                                            <p className="font-black text-slate-900 text-xs">{item.label}</p>
                                            <p className="text-slate-500 text-xs font-medium">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form component */}
                        <Form />
                    </section>

                    {/* RIGHT: Map + Contact cards */}
                    <div className="space-y-8">

                        {/* Map */}
                        <div className="relative h-80 bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5106.402928887385!2d72.86814623904395!3d19.418030104819678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a5e9d0774d%3A0xa0dfd7a9f517ca9f!2sRaja%20Buffing%20Works!5e0!3m2!1sen!2sin!4v1767616160642!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Raja Buffing Works location -- Vasai East, Maharashtra"
                            />
                            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400" /> Vasai East Industrial Hub
                            </div>
                        </div>

                        {/* Contact cards */}
                        <div className="grid gap-5">
                            <a
                                href="tel:+919096769473"
                                className="p-7 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-5"
                            >
                                <div className="p-4 bg-slate-50 rounded-2xl text-slate-600 shrink-0"><Phone size={22} /></div>
                                <div>
                                    <p className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Direct Lines</p>
                                    <p className="text-lg font-black text-slate-900 tracking-tight">+91 9096769473</p>
                                    <p className="text-lg font-black text-slate-900 tracking-tight">+91 9323269821</p>
                                </div>
                            </a>

                            <a
                                href="mailto:rajabuffingworks02@gmail.com"
                                className="p-7 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-5"
                            >
                                <div className="p-4 bg-slate-50 rounded-2xl text-slate-600 shrink-0"><Mail size={22} /></div>
                                <div>
                                    <p className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Email Inquiry</p>
                                    <p className="text-base font-black text-slate-900 tracking-tight break-all">rajabuffingworks02@gmail.com</p>
                                    <p className="text-xs font-medium text-slate-400 mt-1">For bulk pricing and recurring batch scheduling</p>
                                </div>
                            </a>

                            <div className="p-7 bg-slate-900 rounded-3xl text-white flex items-start gap-5">
                                <div className="p-4 bg-slate-800 rounded-2xl text-slate-400 shrink-0"><Clock size={22} /></div>
                                <div>
                                    <p className="font-bold text-slate-500 uppercase text-[10px] tracking-widest mb-1">Unit Operations</p>
                                    <p className="text-lg font-bold">Mon -- Sat: 9:00 AM -- 8:00 PM</p>
                                    <p className="text-slate-400 text-sm mt-1">Closed Sundays and Public Holidays</p>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/919096769473?text=I'm%20interested%20in%20a%20bulk%20buffing%20job-work%20quote%20from%20Raja%20Buffing%20Works"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-7 bg-white border border-slate-200 hover:border-slate-900 rounded-3xl transition-all flex items-center justify-between gap-4 group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl shrink-0">
                                        <MessageSquare size={22} className="text-slate-600" />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-900 text-sm">WhatsApp Quick Inquiry</p>
                                        <p className="text-xs font-medium text-slate-400 mt-0.5">Send batch details directly -- fastest response</p>
                                    </div>
                                </div>
                                <ArrowUpRight size={18} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── SERVICE QUICK-LINKS ───────────────────────────────────── */}
                <section className="mb-20">
                    <h2 className="text-2xl font-black uppercase tracking-tighter mb-3">Not Sure Which Service You Need?</h2>
                    <p className="text-slate-500 font-medium mb-8 max-w-2xl">
                        Select the finishing category closest to your requirement. Each service page has full technical specifications,
                        grade compatibility, and process details.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing", tag: "SS 304/316", desc: "Mirror finishing, thermal blueing removal" },
                            { name: "Milk Pot Polishing", href: "/products/milk-pot-polishing", tag: "Dairy Grade", desc: "Ra < 0.4μm dairy compliance" },
                            { name: "Wok & Frying Pan", href: "/products/wok-pan-finishing", tag: "SS 202/304", desc: "Dual-finish interior mirror / exterior matte" },
                            { name: "Silverware Restoration", href: "/products/silverware-restoration", tag: "Silver/Brass", desc: "Low-heat, zero metal removal protocol" },
                            { name: "Commercial Utensils", href: "/products/commercial-utensils-polishing", tag: "Bulk Job-Work", desc: "100 to 10,000+ units, HSN 7323" },
                            { name: "Matte Specialist", href: "/products/specialty-matte-finishing", tag: "Export Grade", desc: "Ra 0.5μm-0.8μm precision satin" },
                        ].map((service, i) => (
                            <Link
                                key={i}
                                href={service.href}
                                className="group bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-2xl p-6 flex flex-col gap-2 transition-all hover:shadow-md"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{service.tag}</span>
                                    <ArrowUpRight size={13} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                </div>
                                <p className="font-black text-slate-900 text-sm tracking-tight">{service.name}</p>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── LOCATION + SERVICE AREA FOOTER ───────────────────────── */}
                <footer className="pt-16 border-t border-slate-100">
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Physical location */}
                        <div>
                            <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">Facility Location</h3>
                            <address className="not-italic text-sm text-slate-500 font-medium leading-relaxed mb-4">
                                Behind Bengali Chawl, Naikpada<br />
                                Vasai East, Palghar<br />
                                Maharashtra -- 401208
                            </address>
                            <p className="text-xs font-medium text-slate-400">
                                HSN 7323 Compliant Unit &middot; ISO 9001:2015 Certified
                            </p>
                        </div>

                        {/* Service area */}
                        <div>
                            <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">Service Coverage</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {["Vasai East", "Boisar MIDC", "Palghar", "Thane", "Mumbai Belt", "Pune Belt"].map((area, i) => (
                                    <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                                        <div className="w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0" />
                                        {area}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs font-medium text-slate-400 mt-4">
                                Consignments accepted from all Maharashtra districts.{" "}
                                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                                    Discuss logistics
                                </Link>
                                .
                            </p>
                        </div>

                        {/* External links + technical resources */}
                        <div>
                            <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">Before You Inquire</h3>
                            <div className="space-y-3">
                                <Link
                                    href="/blog/hsn-code-7323-job-work-compliance"
                                    className="group flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-xl p-4 transition-all"
                                >
                                    <p className="text-xs font-black text-slate-900">HSN 7323 Compliance Guide</p>
                                    <ArrowUpRight size={12} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                </Link>
                                <Link
                                    href="/blog/ss-304-vs-316-buffing-guide"
                                    className="group flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-xl p-4 transition-all"
                                >
                                    <p className="text-xs font-black text-slate-900">SS 304 vs SS 316 Buffing Guide</p>
                                    <ArrowUpRight size={12} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                </Link>
                                <a
                                    href="https://www.indiamart.com/raja-buffing-works/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-xl p-4 transition-all"
                                >
                                    <p className="text-xs font-black text-slate-900">View on IndiaMart</p>
                                    <ArrowUpRight size={12} className="text-slate-300 group-hover:text-slate-900 transition-colors shrink-0" />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    );
}