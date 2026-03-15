import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, Download, Award, MapPin, Factory,
  History, ShieldCheck, Zap, ArrowRight, Settings,
  Wrench, TrendingUp, Users, Globe
} from "lucide-react";

export const metadata = {
  title: "Matte Finish & Utensil Polishing",
  description: "Industrial matte finishing and mirror polishing for SS 304, 316, and brass utensils. Serving cookware exporters in Maharashtra since 1994.",
  keywords: "utensil buffing Vasai, matte finish specialists Maharashtra, stainless steel buffing Vasai East, mirror finish utensils, industrial polishing Maharashtra, SS 304 buffing, SS 316 polishing, HSN 7323 job work, commercial kitchen utensil polishing, sauce pot buffing Vasai",
  alternates: { canonical: 'https://www.rajabuffing.shop' },
  openGraph: {
    type: 'website',
    title: 'Raja Buffing Works: Industrial Polishing',
    description: 'Industrial matte finishing and mirror polishing for SS utensils. 30+ years serving cookware manufacturers across Maharashtra.',
    publishedTime: '2026-01-01T04:30:00.000Z',
    authors: ['Raja Buffing Works'],
    images: [{ url: '/og.webp' }],
  },
};

export default function Home() {

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the HSN code for utensil buffing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary HSN code for utensil polishing and job work is 7323, specifically covering stainless steel kitchenware finishing. All job-work invoices are issued with full GST compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best matte finish specialist in Vasai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Raja Buffing Works in Vasai East is the designated matte specialist for export-grade stainless steel utensils, using proprietary Ra-targeted buffing protocols."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between buffing and polishing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polishing is an aggressive process that uses abrasives to remove surface defects. Buffing is the final, refined stage that uses a specialized wheel and compound to reveal the mirror or matte lustre."
        }
      },
      {
        "@type": "Question",
        "name": "Which SS grades does Raja Buffing Works process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We process SS 202, SS 304, and SS 316 grades. SS 316 requires a separate buffing compound protocol due to its higher molybdenum content."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Maharashtra do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary dispatch hub is Vasai East (401208). We provide regular job-work services to manufacturers in Boisar, Palghar, Thane, and the greater Mumbai industrial belt."
        }
      }
    ]
  };

  return (
    <div className="pt-16 font-sans antialiased text-slate-900 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home.webp"
            alt="Industrial buffing process at Raja Buffing Works Vasai East"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.35]"
          />
          <video
            src="/home.mp4"
            className="w-full h-full object-cover brightness-[0.35] absolute inset-0"
            autoPlay
            muted
            loop
            playsInline
            title="Industrial buffing process showcase"
            poster="/home.webp"
          >
            <source src="/home.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100/10 backdrop-blur-md border border-slate-100/20 text-slate-100 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Zap size={14} className="text-slate-400" /> Maharashtra Industrial Hub
            </div>
            <h1 className="text-white text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
              The <span className="text-slate-400">Matte Specialist</span> <br /> in Vasai East.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl font-medium">
              Industrial matte finishing and mirror polishing for SS 304, SS 316, and brass utensils.
              Serving cookware manufacturers, exporters, and commercial kitchenware units across
              Vasai East, Boisar, Palghar, and the Maharashtra industrial corridor since 1994.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/contact" aria-label="Get a bulk quote for buffing services" className="bg-slate-100 text-slate-900 px-10 py-5 font-black rounded-2xl hover:bg-white transition-all shadow-2xl flex items-center gap-2 uppercase tracking-tight">
                Get Bulk Quote <ArrowRight size={20} />
              </Link>
              <Link href="/products" aria-label="View our buffing capabilities" className="bg-transparent border-2 border-slate-500/50 text-slate-100 px-10 py-5 font-black rounded-2xl hover:bg-slate-100/10 transition-all uppercase tracking-tight">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Experience", val: "30+ Years", icon: <History className="text-slate-600" /> },
            { label: "Utensils Polished", val: "1M+ Units", icon: <CheckCircle className="text-slate-600" /> },
            { label: "Finishing Niche", val: "Matte/Mirror", icon: <Award className="text-slate-600" /> },
            { label: "Unit Location", val: "Vasai East", icon: <MapPin className="text-slate-600" /> }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">{stat.icon}</div>
              <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-200 rounded-[3rem] -rotate-2 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/about.webp"
                  alt="Industrial matte finishing and mirror polishing at Raja Buffing Works Vasai East facility"
                  title="Raja Buffing Works Industrial Process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter uppercase italic text-slate-900">
                Industrial <br /> Buffing Mastery
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Strategically headquartered in the Vasai East industrial corridor, Raja Buffing Works has served as the backbone for Maharashtra&apos;s cookware manufacturers since 1994.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our work covers{" "}
                <Link href="/products/sauce-pot-buffing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  mirror finishing on SS 304 and SS 316 grade utensils
                </Link>
                ,{" "}
                <Link href="/products/specialty-matte-finishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  matte satin texturing for export-grade cookware
                </Link>
                , and{" "}
                <Link href="/products/commercial-utensils-polishing" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  bulk polishing for commercial kitchenware and hotelware
                </Link>
                . Every batch is processed through a structured workflow to ensure 100% surface uniformity before dispatch.
              </p>
              <div className="space-y-4">
                {[
                  "Specialized Mirror Finishes on SS 304/316 Grades",
                  "Modern Fingerprint-Resistant Matte Textures",
                  "Bulk Utensil Job Work (HSN Code 7323 Compliance)",
                  "Express 24-48 Hour Batch Dispatch Logs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors">
                    <ShieldCheck size={24} className="text-slate-700 shrink-0" />
                    <span className="font-bold text-slate-800 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE COVERAGE SECTION -- NEW */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase italic">What We Finish</h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.3em]">Six core job-work categories. Grade-matched protocols for every utensil type.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Sauce Pot Buffing",
                desc: "Food-grade SS 304 mirror finishing for commercial sauce pots. High-luster interior and exterior with seamless edge treatment.",
                href: "/products/sauce-pot-buffing",
                tag: "SS 304 / 316"
              },
              {
                title: "Milk Pot & Pateela Polishing",
                desc: "Dairy-grade compliance buffing that removes micro-scratches to prevent milk adhesion. Edge-to-edge mirror finish interiors.",
                href: "/products/milk-pot-polishing",
                tag: "Dairy Compliant"
              },
              {
                title: "Wok & Frying Pan Finishing",
                desc: "Heavy-duty buffing for high-heat utensils. SS 202/304 compatible with our external matte specialist finish.",
                href: "/products/wok-pan-finishing",
                tag: "SS 202 / 304"
              },
              {
                title: "Silverware Restoration",
                desc: "Low-heat buffing for antique and premium silverware. Oxidation removal with soft-cloth technique that preserves the metal.",
                href: "/products/silverware-restoration",
                tag: "Restoration"
              },
              {
                title: "Commercial Utensils Job Work",
                desc: "Bulk polishing for hotelware and catering equipment. Optimized for high-volume batches with 24-48 hour turnaround.",
                href: "/products/commercial-utensils-polishing",
                tag: "Bulk Batches"
              },
              {
                title: "Matte Specialist Finishing",
                desc: "Our signature fingerprint-resistant satin finish using Ra value-targeted protocols. Ideal for export-grade premium cookware.",
                href: "/products/specialty-matte-finishing",
                tag: "Export Grade"
              }
            ].map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{service.tag}</span>
                  <ArrowRight size={18} className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-slate-900">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl p-10 text-center">
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              For clients with mixed batches, we accommodate multiple SS grades in a single consignment.
              For technical questions on SS grade compatibility,{" "}
              <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                HSN 7323 compliance for job-work batches
              </Link>
              , or Ra value targets for matte finishes, visit our{" "}
              <Link href="/blog" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                Technical Insights section
              </Link>
              .
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-700 transition-colors">
                Request Bulk Pricing <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TRANSPARENCY */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-10 mb-10 mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Precision <br /> Workflow
            </h2>
            <p className="text-slate-400 max-w-sm text-lg font-medium">
              Transparent, scalable industrial protocols that guarantee 100% surface uniformity across every batch size.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative mb-20">
            {[
              { title: "Surface Grading", desc: "Digital analysis of metal thickness and alloy composition (SS 202, SS 304, SS 316, Brass, Aluminium) to assign the correct compound and RPM protocol." },
              { title: "Buffing Cycles", desc: "Variable RPM cycles using custom-grade abrasive buffing wheels. Compound selection is matched to the specific grade and target finish (mirror or matte)." },
              { title: "Lustre Audit", desc: "Final manual inspection for depth of shine and texture consistency. Every batch is cross-checked against our reference standards before dispatch." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-slate-800/70 absolute -top-12 left-0 transition-colors group-hover:text-slate-700">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-400 relative z-10 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-16">
            <p className="text-slate-400 text-center font-medium max-w-2xl mx-auto">
              Curious about the science behind the process?{" "}
              <Link href="/blog/ss-304-vs-316-buffing-guide" className="text-slate-200 font-bold underline underline-offset-2 hover:text-white transition-colors">
                Read our SS 304 vs 316 technical buffing guide
              </Link>{" "}
              or explore the{" "}
              <Link href="/blog/matte-specialist-finishing-process" className="text-slate-200 font-bold underline underline-offset-2 hover:text-white transition-colors">
                Ra value targets for matte specialist finishing
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* GEO SERVICE COVERAGE -- NEW */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-6">
                Serving the <br /> Maharashtra <br /> Industrial Belt
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">
                Our primary dispatch hub is Vasai East (401208), positioned centrally within the Mumbai-Palghar industrial corridor. We handle regular job-work consignments from manufacturers across the following districts:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { hub: "Vasai East", note: "Primary Unit (H.O)" },
                  { hub: "Boisar", note: "MIDC Manufacturers" },
                  { hub: "Palghar District", note: "Industrial Zone" },
                  { hub: "Thane District", note: "Manufacturing Belt" },
                  { hub: "Mumbai Belt", note: "Commercial Units" },
                  { hub: "Pune Belt", note: "Export Manufacturers" }
                ].map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <MapPin size={16} className="text-slate-500 shrink-0" />
                    <div>
                      <p className="font-black text-slate-900 text-sm">{loc.hub}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{loc.note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-700 transition-colors">
                Discuss Batch Logistics <ArrowRight size={18} />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-900 text-white p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Factory size={24} className="text-slate-400" />
                  <h3 className="text-xl font-black uppercase tracking-tight">Why Manufacturers Choose Us</h3>
                </div>
                <div className="space-y-5">
                  {[
                    { title: "Single-vendor simplicity", desc: "Matte, mirror, and restoration under one roof. No split consignments across multiple vendors." },
                    { title: "HSN 7323 invoicing", desc: "Full GST compliance. B2B partners claim input tax credit on all job-work orders." },
                    { title: "24-48 hour dispatch", desc: "Structured batch workflow means your production line is never held up by finishing delays." },
                    { title: "Grade-matched protocols", desc: "SS 202, 304, 316, Brass, and Aluminium each get a dedicated compound and RPM assignment." }
                  ].map((point, i) => (
                    <div key={i} className="border-b border-slate-800 pb-5 last:border-0 last:pb-0">
                      <p className="font-black text-white mb-1">{point.title}</p>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Compliance</p>
                <p className="font-black text-slate-900 text-lg mb-1">HSN 7323 Compliant Unit</p>
                <p className="text-slate-500 text-sm font-medium">
                  All bulk job-work is invoiced under HSN Code 7323.{" "}
                  <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                    Read our complete GST compliance guide
                  </Link>
                  {" "}for B2B manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION -- EXPANDED TO 5 */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-4">Technical Intelligence</h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.3em]">Direct answers for industrial clients</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">What is the difference between buffing and polishing?</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Polishing is an aggressive process that uses abrasives to remove surface defects. Buffing is the final, refined stage that uses a specialized wheel and compound to reveal the mirror or matte lustre. See our{" "}
                <Link href="/blog" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  Technical Insights
                </Link>{" "}
                for deep-dives on both processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">Why are you known as the Matte Specialist in Vasai?</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Raja Buffing Works developed a proprietary low-heat buffing cycle that creates a uniform, fingerprint-resistant satin finish specifically for premium stainless steel export cookware. The process targets specific Ra (Roughness Average) values.{" "}
                <Link href="/blog/matte-specialist-finishing-process" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  Read the full technical breakdown of our matte finishing process.
                </Link>
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">Which SS grades does Raja Buffing Works process?</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                We process SS 202, SS 304, and SS 316 grades. SS 316 requires a separate buffing compound protocol due to its higher molybdenum content and corrosion resistance properties. For a full technical breakdown,{" "}
                <Link href="/blog/ss-304-vs-316-buffing-guide" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  see our SS 304 vs 316 buffing guide.
                </Link>
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">Do you handle HSN 7323 job-work billing for B2B manufacturers?</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Yes. All job-work invoices are issued under HSN Code 7323 with full GST compliance. B2B partners can claim input tax credit on our services.{" "}
                <Link href="/blog/hsn-code-7323-job-work-compliance" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  Read our complete HSN 7323 compliance guide for manufacturers.
                </Link>
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">What areas in Maharashtra do you serve?</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Our primary dispatch hub is Vasai East (401208). We provide regular job-work services to manufacturers in Boisar, Palghar, Thane, and the greater Mumbai industrial belt.{" "}
                <Link href="/contact" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
                  Contact us to discuss batch logistics and dispatch timelines.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CROSS-LINK SECTION -- NEW */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase italic mb-4">Technical Insights</h2>
              <p className="text-slate-500 font-medium max-w-lg">
                Produced from 30+ years of active buffing operations. Technical knowledge for cookware manufacturers, exporters, and industrial buyers.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-tight hover:bg-slate-900 hover:text-white transition-all shrink-0">
              All Articles <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Technical",
                title: "SS 304 vs. 316: Technical Buffing & Mirror Finishing Requirements",
                desc: "Why SS 316 requires different buffing pressures and compounds than SS 304 to achieve a #8 Mirror Finish.",
                href: "/blog/ss-304-vs-316-buffing-guide",
                readTime: "9 min"
              },
              {
                category: "Industrial",
                title: "HSN Code 7323: A Guide to GST & Job Work for Utensils",
                desc: "Everything B2B partners need to know about GST compliance, input tax credits, and HSN 7323 for buffing job-work.",
                href: "/blog/hsn-code-7323-job-work-compliance",
                readTime: "7 min"
              },
              {
                category: "Specialization",
                title: "Matte Specialist: Achieving the Perfect Satin Texture (Ra Values)",
                desc: "How to measure and achieve the ideal Roughness Average for fingerprint-resistant matte utensils.",
                href: "/blog/matte-specialist-finishing-process",
                readTime: "8 min"
              },
              {
                category: "Maintenance",
                title: "B2B Care Protocols: Extending the Luster of Commercial Kitchenware",
                desc: "Pro-grade maintenance for restaurants and caterers to preserve mirror finishes in high-heat environments.",
                href: "/blog/commercial-kitchen-maintenance",
                readTime: "6 min"
              }
            ].map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="group bg-slate-50 border border-slate-200 hover:border-slate-900 rounded-3xl p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{post.readTime} read</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-slate-700 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{post.desc}</p>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mt-auto">
                  Read Technical Paper <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-slate-900 leading-none">
            Ready to bring the <br /> <span className="text-slate-400">Shine back?</span>
          </h2>
          <p className="text-2xl text-slate-500 mb-8 font-bold uppercase tracking-widest italic">
            Vasai&apos;s leading unit for Bulk Job Work
          </p>
          <p className="text-lg text-slate-500 font-medium mb-16 max-w-2xl mx-auto">
            Serving manufacturers across{" "}
            <Link href="/contact" className="text-slate-900 font-bold underline underline-offset-2 hover:text-slate-600 transition-colors">
              Vasai East, Boisar, Palghar, Thane, and the Mumbai industrial belt
            </Link>
            . HSN 7323 invoicing available for all B2B job-work orders.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="/catalogue.pdf" download className="bg-slate-900 text-white px-14 py-6 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl uppercase tracking-tighter">
              <Download size={24} /> Get Technical Catalogue
            </a>
            <Link href="/contact" className="bg-white text-slate-900 border-2 border-slate-900 px-14 py-6 rounded-2xl font-black hover:bg-slate-50 transition-all uppercase tracking-tighter shadow-lg flex items-center justify-center gap-2">
              Visit Vasai Facility <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-100 rounded-full blur-[100px] opacity-50" />
      </section>
    </div>
  );
}