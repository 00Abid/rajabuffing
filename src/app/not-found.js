import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Wrench, Package, PhoneCall } from "lucide-react";

export const metadata = {
    title: "404 - Page Not Found | Raja Buffing Works",
    description: "The page you are looking for has been moved or polished away. Return to Raja Buffing Works home for industrial metal finishing services in Vasai.",
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden relative">

            {/* Background Aesthetic: Faded Metallic Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="flex flex-wrap text-9xl font-black uppercase tracking-tighter leading-none">
                    404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404
                </div>
            </div>

            <div className="max-w-3xl w-full text-center relative z-10">

                {/* Visual Anchor */}
                <div className="relative w-48 h-48 mx-auto mb-12">
                    <div className="absolute inset-0 bg-slate-100 rounded-full animate-pulse scale-110" />
                    <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                            src="/logo.webp"
                            alt="Raja Buffing Works"
                            width={120}
                            height={120}
                            className="object-contain grayscale opacity-50"
                        />
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-none text-balance">
                    Page <span className="text-slate-400 italic">Polished</span> Away
                </h1>

                <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
                    The technical specification or service page you are looking for isn&apos;t here.
                    It may have been moved to a new industrial category.
                </p>

                {/* Strategic Redirects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-3 p-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl shadow-slate-200"
                    >
                        <Home size={18} /> Return Home
                    </Link>
                    <Link
                        href="/Products"
                        className="flex items-center justify-center gap-3 p-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-md"
                    >
                        <Package size={18} /> Buffing Services
                    </Link>
                    <Link
                        href="/Machinery"
                        className="flex items-center justify-center gap-3 p-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all shadow-md"
                    >
                        {/* Updated to Wrench */}
                        <Wrench size={18} /> Our Machinery
                    </Link>
                    <Link
                        href="/Contact"
                        className="flex items-center justify-center gap-3 p-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all shadow-md"
                    >
                        <PhoneCall size={18} /> Get Support
                    </Link>
                </div>

                {/* Local SEO Footer */}
                <div className="mt-16 pt-8 border-t border-slate-100 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                    Raja Buffing Works - Vasai East, Maharashtra
                </div>
            </div>
        </main>
    );
}