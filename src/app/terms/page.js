import { FileText, Hammer, Clock, ShieldCheck, Truck, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "B2B Terms of Service | Raja Buffing Works - Industrial Job Work",
    description: "Standard terms and conditions for industrial buffing, polishing, and restoration services at Raja Buffing Works, Vasai East.",
    alternates: {
        canonical: 'https://rajabuffing.shop/Terms',
    },
};

export default function TermsAndConditions() {
    return (
        <main className="pt-32 pb-24 bg-white font-sans text-slate-900">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header Section */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <FileText size={16} /> Commercial Agreement
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Service <br /> <span className="text-slate-400 italic font-medium">Terms</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        Effective as of January 2026. Governs all industrial job-work conducted at our Vasai unit.
                    </p>
                </header>

                {/* Terms Grid */}
                <div className="space-y-16">

                    {/* Section 1: Service Scope */}
                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Hammer size={24} className="text-slate-900" /> 1. Scope of Job-Work
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-medium">
                            <p>
                                Raja Buffing Works provides professional metal finishing services, including but not limited to, <strong><Link href="/Products/commercial-utensils-polishing" className="text-blue-600 hover:underline">Mirror Polishing</Link>, <Link href="/Products/specialty-matte-finishing" className="text-blue-600 hover:underline">Matte/Satin Finishing</Link>, and Restoration</strong>. All work is conducted under <strong><Link href="/blog/hsn-code-7323-job-work-compliance" className="text-blue-600 hover:underline">HSN Code 7323</Link> protocols</strong>. Client-provided materials must be free from structural defects that could compromise the buffing machinery.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Turnaround Time */}
                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Clock size={24} className="text-slate-900" /> 2. Delivery & Lead Times
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-medium">
                            <p>
                                Standard turnaround for batch orders in the <strong><Link href="/Contact" className="text-blue-600 hover:underline">Vasai Industrial Hub</Link></strong> is 24-48 hours. Large-scale industrial orders (5,000+ units) are subject to scheduled production timelines. Raja Buffing Works is not liable for delays caused by raw material discrepancies or power outages in the Maharashtra industrial grid.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Material Liability */}
                    <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <AlertTriangle size={24} className="text-amber-600" /> 3. Liability & Grade Variance
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-medium text-sm">
                            <p>
                                We specialize in <strong>SS 304, 316, and 202</strong>. Final luster and finish depth are inherently dependent on the quality and gauge of the base metal provided by the client. Raja Buffing Works is not responsible for thinning of metal in cases where pre-existing deep corrosion requires aggressive grinding.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: Pricing & Payment */}
                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <ShieldCheck size={24} className="text-slate-900" /> 4. B2B Commercials
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-medium">
                            <p>
                                All rates are quoted per unit or per batch based on technical complexity. Full GST-compliant invoices will be issued upon completion. Payments are strictly due upon delivery or as per the pre-agreed <strong>industrial credit cycle</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: Logistics */}
                    <section>
                        <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <Truck size={24} className="text-slate-900" /> 5. Logistics & Collection
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-medium">
                            <p>
                                Clients are responsible for the transport of materials to and from our unit in <strong>Naikpada, Vasai East</strong>. Pickup services may be arranged for bulk partners within the Palghar and Mumbai Metropolitan regions.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Legal Footer CTA */}
                <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center">
                    <h3 className="text-3xl font-bold mb-6 italic tracking-tighter uppercase">Dispute Resolution</h3>
                    <p className="text-slate-400 mb-10 font-medium max-w-xl mx-auto">
                        Any legal disputes are subject to the exclusive jurisdiction of the courts in **Palghar/Vasai, Maharashtra**.
                    </p>
                    <Link href="/Contact" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all shadow-2xl">
                        Contact Admin Office
                    </Link>
                </div>
            </div>
        </main>
    );
}