import Image from "next/image";
import Link from "next/link";
import {
    Phone, Mail, MapPin, Clock,
    ShieldCheck, ArrowUpRight
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 md:grid-cols-2">

                    {/* ── BRAND ─────────────────────────────────────────────── */}
                    <div className="space-y-6 lg:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group w-fit"
                            aria-label="Raja Buffing Works -- Home"
                        >
                            <Image
                                src="/logo.webp"
                                alt="Raja Buffing Works -- Matte Finish Specialists Vasai East"
                                width={48}
                                height={48}
                                className="object-contain grayscale group-hover:grayscale-0 transition-all shrink-0"
                            />
                            <div>
                                <p className="text-lg font-black tracking-tighter text-slate-900 leading-none">
                                    RAJA BUFFING WORKS
                                </p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                                    Matte Specialist
                                </p>
                            </div>
                        </Link>

                        <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-xs">
                            The designated Matte Specialist of Vasai East. Industrial mirror and matte finishing
                            for SS 202, SS 304, SS 316, brass, and aluminium utensils. Serving cookware manufacturers,
                            exporters, and commercial kitchenware operations across Maharashtra since 1994.
                        </p>

                        <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-xs">
                            All job-work invoiced under{" "}
                            <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                                HSN Code 7323
                            </Link>{" "}
                            with full GST documentation for B2B input tax credit eligibility.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200 bg-white px-3 py-1 rounded-full">
                                <ShieldCheck size={11} className="text-slate-700" /> HSN 7323 Compliant
                            </span>
                            <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-200 bg-white px-3 py-1 rounded-full">
                                <ShieldCheck size={11} className="text-slate-700" /> ISO 9001:2015
                            </span>
                        </div>
                    </div>

                    {/* ── SERVICES ──────────────────────────────────────────── */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900">
                            Buffing Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Sauce Pot Buffing", href: "/products/sauce-pot-buffing" },
                                { label: "Milk Pot Polishing", href: "/products/milk-pot-polishing" },
                                { label: "Wok & Frying Pan Finishing", href: "/products/wok-pan-finishing" },
                                { label: "Silverware Restoration", href: "/products/silverware-restoration" },
                                { label: "Commercial Utensils", href: "/products/commercial-utensils-polishing" },
                                { label: "Matte Specialist Finishing", href: "/products/specialty-matte-finishing" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                                    >
                                        {item.label}
                                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── SITE + KNOWLEDGE ──────────────────────────────────── */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900">
                            Knowledge & Site
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Buffing Services", href: "/products" },
                                { label: "Machinery", href: "/machinery" },
                                { label: "Client Trust", href: "/testimonials" },
                                { label: "Get a Quote", href: "/contact" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                                    >
                                        {item.label}
                                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-slate-900">
                            Technical Articles
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "SS 304 vs SS 316 Buffing", href: "/blog/ss-304-vs-316-buffing-guide" },
                                { label: "HSN 7323 Compliance", href: "/blog/hsn-code-7323-job-work-compliance" },
                                { label: "Matte Finish Ra Values", href: "/blog/matte-specialist-finishing-process" },
                                { label: "Kitchen Care Protocols", href: "/blog/commercial-kitchen-maintenance" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                                    >
                                        {item.label}
                                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── CONTACT + SERVICE HUBS ────────────────────────────── */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900">
                                Operations
                            </h3>
                            <div className="space-y-4">
                                <p className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                    <Clock size={15} className="text-slate-700 shrink-0" />
                                    Mon -- Sat: 9:00 -- 20:00
                                </p>
                                <a
                                    href="tel:+919096769473"
                                    className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <Phone size={15} className="text-slate-700 shrink-0" />
                                    +91 9096769473
                                </a>
                                <a
                                    href="tel:+919323269821"
                                    className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
                                >
                                    <Phone size={15} className="text-slate-700 shrink-0" />
                                    +91 9323269821
                                </a>
                                <a
                                    href="mailto:rajabuffingworks02@gmail.com"
                                    className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors break-all"
                                >
                                    <Mail size={15} className="text-slate-700 shrink-0" />
                                    rajabuffingworks02@gmail.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-slate-900">
                                Service Hubs
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    { label: "Vasai East (H.O)", primary: true },
                                    { label: "Boisar MIDC" },
                                    { label: "Palghar District" },
                                    { label: "Thane District" },
                                    { label: "Mumbai Industrial Belt" },
                                    { label: "Pune Belt" },
                                ].map((loc, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                        <MapPin size={13} className={loc.primary ? "text-slate-900" : "text-slate-400"} />
                                        {loc.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/contact"
                            className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all inline-flex items-center gap-2"
                        >
                            Get Technical Quote <ArrowUpRight size={12} />
                        </Link>
                    </div>

                </div>

                {/* ── BOTTOM BAR ────────────────────────────────────────────── */}
                <div className="pt-10 mt-14 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Raja Buffing Works &middot; Vasai East, Maharashtra 401208
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">B2B Terms</Link>
                        <a
                            href="https://www.indiamart.com/raja-buffing-works/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-900 transition-colors flex items-center gap-1"
                        >
                            IndiaMart <ArrowUpRight size={10} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}