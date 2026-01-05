"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Don't show on homepage
    if (pathname === "/") return null;

    const pathNodes = pathname.split("/").filter((v) => v);

    const breadcrumbList = pathNodes.map((node, index) => {
        const href = "/" + pathNodes.slice(0, index + 1).join("/");
        const label = node.charAt(0).toUpperCase() + node.slice(1).replace(/-/g, " ");
        const isLast = index === pathNodes.length - 1;

        return { label, href, isLast };
    });

    // JSON-LD for Google Search Console
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rajabuffing.shop"
            },
            ...breadcrumbList.map((item, i) => ({
                "@type": "ListItem",
                "position": i + 2,
                "name": item.label,
                "item": `https://rajabuffing.shop${item.href}`
            }))
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 -mb-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <ol className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                        <Home size={12} /> Home
                    </Link>
                </li>

                {breadcrumbList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <ChevronRight size={10} className="text-slate-300" />
                        {item.isLast ? (
                            <span className="text-slate-900 italic" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className="hover:text-slate-900 transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}