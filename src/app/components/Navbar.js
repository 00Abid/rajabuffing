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

    const links = [
        { href: "/", label: "Home" },
        { href: "/Products", label: "Buffing Services" },
        { href: "/Machinery", label: "Machinery" },
        { href: "/blog", label: "Technical Insights" },
        { href: "/testimonials", label: "Client Trust" },
        { href: "/Contact", label: "Get a Quote" },
    ];

    return (
        <nav
            className={`fixed w-full z-100 transition-all duration-500 ${scrolled
                ? "bg-white/90 "
                : "bg-white py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo & Entity Branding */}
                    <Link
                        href="/"
                        className="flex items-center space-x-3 group"
                        aria-label="Raja Buffing Works - Home"
                    >
                        <div className="relative w-12 h-12">
                            <Image
                                src="/logo.webp"
                                alt="RAJA BUFFING WORKS LOGO"
                                fill
                                sizes="(max-width: 768px) 50px, 100px"
                                priority
                                className="object-contain transition-transform group-hover:scale-110 w"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                                RAJA BUFFING <span className="text-slate-900">WORKS</span>
                            </span>
                            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mt-1">
                                Matte Specialists
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation: Silver & Slate Shades */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${pathname === link.href
                                    ? "bg-slate-800 text-white shadow-lg scale-105"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA: Metallic Gradient Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="tel:+919096769473"
                            aria-label="Call Raja Buffing Unit"
                            className="flex items-center gap-2 bg-linear-to-r from-slate-400 via-slate-500 to-slate-600 text-white px-5 py-2.5 rounded-xl font-bold hover:from-slate-500 hover:to-slate-700 transition shadow-lg shadow-slate-200"
                        >
                            <PhoneCall size={18} />
                            <span>Call Unit</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-900"
                        aria-label="Open Navigation"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar (Slide-in) */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-101 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-black text-2xl tracking-tighter text-slate-800">MENU</span>
                        <button onClick={() => setIsOpen(false)} aria-label="Close Navigation" className="p-2 bg-slate-100 rounded-full"><X size={24} /></button>
                    </div>

                    <div className="space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-black tracking-tight transition-all ${pathname === link.href
                                    ? "bg-slate-800 text-white shadow-xl shadow-slate-300"
                                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                    }`}
                            >
                                {link.label}
                                <ChevronRight size={20} className={pathname === link.href ? "text-slate-400" : "text-slate-300"} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Backdrop for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-100"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}