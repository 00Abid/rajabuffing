import { ShieldCheck, FileText, Eye, Lock, Globe, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Raja Buffing Works - Industrial Data Protection",
    description: "Our commitment to protecting your industrial data and project specifications. Learn how Raja Buffing Works handles B2B information in Vasai, Maharashtra.",
    alternates: {
        canonical: 'https://rajabuffing.shop/Privacy',
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="pt-32 pb-24 bg-white font-sans text-slate-900">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header Section */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Legal & Compliance
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Privacy <br /> <span className="text-slate-400 italic font-medium">Privacy</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        Last Updated: January 2026. This policy outlines how Raja Buffing Works protects your industrial and personal data.
                    </p>
                </header>

                {/* Policy Content */}
                <div className="space-y-12">

                    {/* Section 1 */}
                    <section className="relative pl-8 border-l-2 border-slate-900">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                            <FileText size={20} className="text-slate-400" /> 1. Data Collection (B2B)
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            At Raja Buffing Works, we collect information necessary to provide professional industrial finishing services. This includes company names, contact details, and project specifications (metal grades, quantities, and technical drawings) required for <strong><Link href="/blog/hsn-code-7323-job-work-compliance" className="text-blue-600 hover:underline">HSN 7323 job-work compliance</Link></strong> in Vasai, Maharashtra.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="relative pl-8 border-l-2 border-slate-200">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                            <Eye size={20} className="text-slate-400" /> 2. Use of Information
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Your information is exclusively used for:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-bold text-slate-500 uppercase tracking-wide">
                            <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" /> Quotation Processing
                            </li>
                            <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" /> Technical Auditing
                            </li>
                            <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" /> GST Compliance
                            </li>
                            <li className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" /> Quality Control
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="relative pl-8 border-l-2 border-slate-200">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                            <Lock size={20} className="text-slate-400" /> 3. Data Security
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            We implement strict security measures to protect your commercial data. Access to technical project details is restricted to our core engineering team in the <strong>Vasai unit</strong>. We do not sell or trade your B2B information to third parties.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="relative pl-8 border-l-2 border-slate-200">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                            <Globe size={20} className="text-slate-400" /> 4. Cookies & Analytics
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our website (rajabuffing.shop) uses minimal cookies to enhance user experience and analyze site traffic via Google Analytics. This data is anonymized and used solely to improve our <strong><Link href="/blog" className="text-blue-600 hover:underline">technical insights</Link></strong> blog and <Link href="/Products" className="text-blue-600 hover:underline">product catalogs</Link>.
                        </p>
                    </section>
                </div>

                {/* Contact Footer */}
                <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white">
                    <h3 className="text-2xl font-bold mb-4 italic tracking-tighter">Privacy Inquiries</h3>
                    <p className="text-slate-400 mb-8 font-medium">
                        If you have questions regarding your data or our B2B privacy practices, please contact our administrative office in Vasai.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link href="mailto:rajabuffingworks02@gmail.com" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white hover:text-slate-400 transition-colors">
                            <Mail size={18} /> rajabuffingworks02@gmail.com
                        </Link>
                        <Link href="/Contact" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white hover:text-slate-400 transition-colors">
                            <Globe size={18} /> Data Request Form
                        </Link>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-xs font-black uppercase tracking-widest text-slate-300 hover:text-slate-900 transition-colors border-b border-slate-100 pb-1">
                        Return to Industrial Hub
                    </Link>
                </div>
            </div>
        </main>
    );
}