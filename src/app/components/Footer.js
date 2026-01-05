import Image from "next/image";
import Link from "next/link";
import {
    Phone, Mail, MapPin, Clock,
    ShieldCheck, ArrowUpRight, Globe
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">

                    {/* Brand Section: E-E-A-T Signal */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/logo.webp"
                                alt="RAJA BUFFING WORKS - Professional Utensil Buffing Vasai"
                                width={50}
                                height={50}
                                className="object-contain grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="text-xl font-black tracking-tighter text-slate-900 leading-none">
                                RAJA BUFFING WORKS<br /> <span className="text-slate-600 text-xs"> MATTE SPECIALIST</span>
                            </h3>
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-slate-500">
                            The designated Matte Specialist of Vasai. Providing export-grade
                            finishing for commercial kitchenware and industrial utensils across Maharashtra since 1994.
                        </p>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 w-fit px-3 py-1 rounded-full">
                            <ShieldCheck size={12} className="text-black" /> HSN 7323 Compliant Unit
                        </div>
                    </div>

                    {/* Quick Navigation: Internal Linking */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900">Sitemap</h3>
                        <ul className="space-y-3">
                            {['Home', 'Products', 'Machinery', 'Blog', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item}`}
                                        className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                                    >
                                        {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Local SEO: Service Areas */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-slate-900">Service Hubs</h3>
                        <ul className="space-y-3 text-sm font-bold text-slate-500">
                            <li className="flex items-center gap-2"><MapPin size={14} className="text-black" /> Vasai East (H.O)</li>
                            <li className="flex items-center gap-2"><Globe size={14} className="text-black" /> Mumbai Industrial Belt</li>
                            <li className="flex items-center gap-2"><Globe size={14} className="text-black" /> Palghar District</li>
                            <li className="flex items-center gap-2"><Globe size={14} className="text-black" /> Pune Belt</li>
                            <li className="flex items-center gap-2"><Globe size={14} className="text-black" /> Boisar District</li>
                            <li className="flex items-center gap-2"><Globe size={14} className="text-black" /> Thane District</li>
                        </ul>
                    </div>

                    {/* Contact & Hours: Local Trust */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">Operations</h3>
                        <div className="space-y-3 text-sm font-bold text-slate-500">
                            <p className="flex items-center gap-3"><Clock size={16} className="text-slate-900" /> Mon - Sat: 9:00 - 20:00</p>
                            <p className="flex items-center gap-3"><Phone size={16} className="text-slate-900" /> +91 9096769473</p>
                            <p className="flex items-center gap-3"><Mail size={16} className="text-slate-900" /> rajabuffingworks00@gmail.com</p>
                        </div>
                        <div className="pt-4">
                            <Link href="/Contact" className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all inline-block">
                                Get Technical Quote
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Final SEO signals */}
                <div className="pt-12 mt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} RAJA BUFFING WORKS.
                        <span className="ml-2 border-l border-slate-300 pl-2">Vasai East, Maharashtra 401208</span>
                    </p>
                    <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">B2B Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}