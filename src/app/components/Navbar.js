"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/Products", label: "Products" },
        { href: "/Machinery", label: "Machinery" },
        { href: "/blog", label: "Blog" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/Contact", label: "Contact" },
    ];

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 text-xl font-bold text-black"
                    >
                        <div className="relative">
                            <Image
                                src="/logo.webp"
                                alt="RAJA BUFFING WORKS Logo"
                                className="object-contain"
                                width={55}
                                height={55}

                            />
                        </div>
                        <span>RAJA BUFFING WORKS</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex items-center space-x-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href
                                    ? "text-black"
                                    : "text-gray-600 hover:text-black"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="sm:hidden text-gray-600 hover:text-black"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-300 animate-slideDown">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href
                                ? "text-black"
                                : "text-gray-600 hover:text-black"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
