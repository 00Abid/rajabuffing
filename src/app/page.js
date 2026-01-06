import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle, Download, Award, MapPin, Factory,
  History, ShieldCheck, Zap, ArrowRight, Settings
} from "lucide-react";

export const metadata = {
  title: "Raja Buffing Works | #1 Matte Finish & Utensil Polishing in Vasai East",
  description: "Experience-led industrial metal finishing. 30+ years as a Matte Specialist and Mirror Polishing authority for SS utensils in Vasai, Maharashtra.",
  keywords: "utensil buffing Vasai, matte finish specialists Maharashtra, stainless steel buffing Vasai East, mirror finish utensils, industrial polishing Maharashtra",
  alternates: { canonical: 'https://rajabuffing.shop' },
  openGraph: {
    type: 'website',
    title: 'Raja Buffing Works: The Matte Finishing Specialists of Vasai',
    description: 'Expert industrial polishing and utensil buffing services with 30+ years of verifiable expertise.',
    publishedTime: '2026-01-01T04:30:00.000Z',
    authors: ['Raja Buffing Works'],
    images: [{ url: '/og.webp' }],
  },
};

export default function Home() {
  // Advanced Service & LocalBusiness Schema for AEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Raja Buffing Works",
    "areaServed": ["Vasai", "Palghar", "Mumbai", "Maharashtra", "Pune", "Nashik", "Gujrat"],
    "founder": "Expert Team",
    "foundingDate": "1994",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vasai East",
      "addressRegion": "Maharashtra",
      "postalCode": "401208",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Metal Finishing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Matte Finishing Specialist" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Utensil Mirror Polishing" } }
      ]
    }
  };

  return (
    <div className="pt-16 font-sans antialiased text-slate-900 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION: GEO-LOCATION & NICHE AUTHORITY */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/home.mp4"
            className="w-full h-full object-cover brightness-[0.35]"
            autoPlay
            muted
            loop
            playsInline
            title="Industrial buffing process showcase"
            poster="/home.webp"
          >
            Your browser does not support the video tag.
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
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-medium">
              Precision Polishing and Buffing of Utensils.
              Engineering premium mirror and satin textures for over 30 years.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/Contact" aria-label="Get a bulk quote for buffing services" className="bg-slate-100 text-slate-900 px-10 py-5 font-black rounded-2xl hover:bg-white transition-all shadow-2xl flex items-center gap-2 uppercase tracking-tight">
                Get Bulk Quote <ArrowRight size={20} />
              </Link>
              <Link href="/Products" aria-label="View our buffing capabilities" className="bg-transparent border-2 border-slate-500/50 text-slate-100 px-10 py-5 font-black rounded-2xl hover:bg-slate-100/10 transition-all uppercase tracking-tight">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T TRUST SIGNALS: VERIFIABLE EXPERIENCE */}
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

      {/* CORE EXPERTISE: THE MATTE SPECIALIST PHILOSOPHY */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-200 rounded-[3rem] -rotate-2 transition-transform group-hover:rotate-0" />
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/about.webp"
                  alt="Industrial Matte Finishing Specialist in Vasai"
                  title="Raja Buffing Works Industrial Process"
                  aria-label="Industrial metal buffing video"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover "
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

      {/* PROCESS TRANSPARENCY: TECHNICAL AUTHORITY (AEO) */}
      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 mb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Precision <br /> Workflow
            </h2>
            <p className="text-slate-400 max-w-sm text-lg font-medium">
              Transparent, scalable industrial protocols that guarantee 100% surface uniformity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {[
              { title: "Surface Grading", desc: "Digital analysis of metal thickness and alloy composition (SS/Brass/Alu)." },
              { title: "Buffing Cycles", desc: "Variable RPM cycles using custom-grade abrasive buffing wheels." },
              { title: "Lustre Audit", desc: "Final manual inspection for depth of shine and texture consistency." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-slate-800/70 absolute -top-12 left-0 transition-colors group-hover:text-slate-700">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-slate-400 relative z-10 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION: ANSWER ENGINE OPTIMIZATION (AEO) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tight mb-4">Technical Intelligence</h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.3em]">Direct answers for industrial clients</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-4rem shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">What is the difference between buffing and polishing?</h3>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                Polishing is an aggressive process that uses abrasives to remove surface defects. Buffing is the final, refined stage that uses a specialized wheel and compound to reveal the mirror or matte lustre.
              </p>
            </div>
            <div className="bg-white p-8 rounded-4rem shadow-sm border border-slate-200">
              <h3 className="font-black text-xl mb-4 text-slate-800">Why are you known as the Matte Specialist in Vasai?</h3>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                Raja Buffing Works developed a proprietary low-heat buffing cycle that creates a uniform, fingerprint-resistant satin finish specifically for premium stainless steel export cookware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION: THE FINAL TRUST SIGNAL */}
      <section className="py-40 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter text-slate-900 leading-none">
            Ready to bring the <br /> <span className="text-slate-400">Shine back?</span>
          </h2>
          <p className="text-2xl text-slate-500 mb-16 font-bold uppercase tracking-widest italic">
            Vasai&apos;s leading unit for Bulk Job Work
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a href="/catalogue.pdf" download className="bg-slate-900 text-white px-14 py-6 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-2xl uppercase tracking-tighter">
              <Download size={24} /> Get Technical Catalogue
            </a>
            <Link href="/Contact" className="bg-white text-slate-900 border-2 border-slate-900 px-14 py-6 rounded-2xl font-black hover:bg-slate-50 transition-all uppercase tracking-tighter shadow-lg flex items-center justify-center">
              Visit Vasai Facility
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-100 rounded-full blur-[100px] opacity-50" />
      </section>
    </div>
  );
}