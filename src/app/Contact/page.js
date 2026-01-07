import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import Form from "../components/Form";

export const metadata = {
    title: "Contact Raja Buffing Works | Get a Quote for Vasai Buffing Services",
    description: "Connect with Vasai's leading Matte Specialist. Get bulk job-work quotes for utensil polishing. Located in Naikpada, Vasai East. Phone: +91 9096769473.",
    keywords: "contact Raja Buffing Works, buffing services Vasai quote, metal polishing Maharashtra, Vasai East industrial area, bulk utensil buffing",
    alternates: {
        canonical: 'https://rajabuffing.shop/Contact',
    },
};

export default function Contact() {
    // Top 0.1% Schema: Combining Breadcrumbs with LocalBusiness Entity
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rajabuffing.shop" },
                    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://rajabuffing.shop/Contact" }
                ]
            },
            {
                "@type": "LocalBusiness",
                "name": "Raja Buffing Works",
                "image": "https://rajabuffing.shop/logo.webp",
                "telephone": "+91-9096769473",
                "email": "rajabuffingworks02@gmail.com",
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
                    "latitude": "19.4184",
                    "longitude": "72.8790"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "20:00"
                }
            }
        ]
    };

    return (
        <main className="pt-32 pb-24 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto px-6">

                {/* Header: Industrial Authority Tone */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Get a Quote in 120 mins
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Get a  <br /> <span className="text-slate-400 italic font-medium">Quote</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        Ready to scale your production? Contact our Vasai unit for
                        high-volume job-work, <Link href="/Products/specialty-matte-finishing" className="text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors">matte finishing</Link>, and <Link href="/Products/commercial-utensils-polishing" className="text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors">mirror polishing</Link> inquiries.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side: Conversion Form */}
                    <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-2">Service Request Form</h2>
                            <p className="text-slate-500 text-sm font-medium">Expected response time: Under 4 hours (B2B Priority)</p>
                        </div>
                        <Form />
                    </section>

                    {/* Right Side: Local SEO & Trust Info */}
                    <div className="space-y-10">

                        {/* Interactive Map Anchor */}
                        <div className="relative h-80 bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5106.402928887385!2d72.86814623904395!3d19.418030104819678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a5e9d0774d%3A0xa0dfd7a9f517ca9f!2sRaja%20Buffing%20Works!5e0!3m2!1sen!2sin!4v1767616160642!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"

                            ></iframe>

                            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                                <MapPin size={14} className="text-slate-400" /> Vasai Industrial Hub
                            </div>
                        </div>

                        {/* Metallic Style Contact Cards */}
                        <div className="grid gap-6">
                            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-start gap-6">
                                <div className="p-4 bg-slate-50 rounded-2xl text-slate-600"><Phone size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Direct Lines</h3>
                                    <p className="text-lg font-black text-slate-900 tracking-tight">+91 9096769473</p>
                                    <p className="text-lg font-black text-slate-900 tracking-tight">+91 9323269821</p>
                                </div>
                            </div>

                            <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-start gap-6">
                                <div className="p-4 bg-slate-50 rounded-2xl text-slate-600"><Mail size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-slate-400 uppercase text-[10px] tracking-widest mb-1">Official Inquiry</h3>
                                    <p className="text-lg font-black text-slate-900 tracking-tight break-all">rajabuffingworks02@gmail.com</p>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-900 rounded-3xl text-white flex items-start gap-6 shadow-2xl">
                                <div className="p-4 bg-slate-800 rounded-2xl text-slate-400"><Clock size={24} /></div>
                                <div>
                                    <h3 className="font-bold text-slate-500 uppercase text-[10px] tracking-widest mb-1">Unit Operations</h3>
                                    <p className="text-lg font-bold">Mon — Sat: 9:00 AM - 8:00 PM</p>
                                    <p className="text-slate-400 text-sm mt-1">Closed on Sundays & Public Holidays</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Local E-E-A-T Footer Block */}
                <footer className="mt-24 pt-16 border-t border-slate-100">
                    <div className="flex flex-col md:flex-row justify-between gap-12 text-slate-500 font-medium">
                        <div className="max-w-xs">
                            <h4 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">Location Details</h4>
                            <p className="text-sm leading-relaxed">
                                Behind Bengali Chawl, Naikpada, Vasai East, Palghar, Maharashtra - 401208
                            </p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em] mb-4">AEO Signals</h4>
                            <p className="text-sm leading-relaxed">
                                Authorized Job-Work Unit for Utensils <br />
                                Region: MMR (Mumbai Metropolitan Region)
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/919096769473?text=I'm%20interested%20in%20Raja%20Buffing%20Services"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contact Raja Buffing on WhatsApp"
                                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-sm hover:bg-slate-900 hover:text-white transition-all"
                            >
                                <MessageSquare size={20} className="text-black hover:text-white" />
                            </a>

                            {/* IndiaMart Integration: B2B Authority Signal */}
                            <a
                                href="https://www.indiamart.com/raja-buffing-works/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Raja Buffing Works on IndiaMart"
                                className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                            >
                                <span className="text-[9px] font-black leading-none text-center uppercase">India<br />Mart</span>
                            </a>

                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}