"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, PhoneCall } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Buffing Services" },
        { href: "/machinery", label: "Machinery" },
        { href: "/blog", label: "Technical Insights" },
        { href: "/testimonials", label: "Client Trust" },
        { href: "/contact", label: "Get a Quote" },
    ];

    // Active detection:
    // Home route: exact match only
    // All other routes: startsWith match so sub-pages stay highlighted
    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* ── NAVBAR ──────────────────────────────────────────────────── */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200/80 py-2"
                    : "bg-white py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* ── LOGO ────────────────────────────────────────── */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                            aria-label="Raja Buffing Works -- Home"
                        >
                            <div className="relative w-12 h-12 shrink-0">
                                <Image
                                    src="/logo.webp"
                                    alt="Raja Buffing Works Logo -- Matte Finish Specialists Vasai East"
                                    fill
                                    sizes="48px"
                                    priority
                                    className="object-contain transition-transform group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                                    RAJA BUFFING WORKS
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                                    Matte Specialists
                                </span>
                            </div>
                        </Link>

                        {/* ── DESKTOP NAV ─────────────────────────────────── */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${isActive(link.href)
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* ── DESKTOP CTA ─────────────────────────────────── */}
                        <div className="hidden lg:block">
                            <a
                                href="tel:+919096769473"
                                aria-label="Call Raja Buffing Works"
                                className="flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:from-slate-800 hover:to-black transition-all shadow-md shadow-slate-300/50"
                            >
                                <PhoneCall size={16} />
                                <span>Call Unit</span>
                            </a>
                        </div>

                        {/* ── MOBILE TOGGLE ───────────────────────────────── */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── MOBILE OVERLAY ──────────────────────────────────────────── */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* ── MOBILE SIDEBAR ──────────────────────────────────────────── */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[51] lg:hidden
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col h-full p-8">

                    {/* Sidebar header */}
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <span className="font-black text-xl tracking-tighter text-slate-900 leading-none block">
                                RAJA BUFFING
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                Matte Specialists
                            </span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                            className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav className="space-y-2 grow">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-black tracking-tight transition-all ${isActive(link.href)
                                    ? "bg-slate-900 text-white shadow-lg"
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                            >
                                {link.label}
                                <ChevronRight
                                    size={18}
                                    className={isActive(link.href) ? "text-slate-400" : "text-slate-300"}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile CTA -- absent in original */}
                    <div className="mt-8 space-y-3 border-t border-slate-100 pt-8">
                        <a
                            href="tel:+919096769473"
                            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-5 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-black transition-all"
                        >
                            <PhoneCall size={18} />
                            +91 9096769473
                        </a>
                        <a
                            href="https://wa.me/919096769473?text=I'm%20interested%20in%20a%20bulk%20buffing%20job-work%20quote%20from%20Raja%20Buffing%20Works"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-slate-50 border border-slate-200 text-slate-900 px-5 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-100 transition-all text-sm"
                        >
                            WhatsApp Quick Inquiry
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}