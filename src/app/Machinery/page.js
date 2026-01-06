import Link from "next/link";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
    title: "Industrial Buffing Machinery | High-Capacity Polishing Systems | Raja Buffing",
    description: "Explore our fleet of 20+ Industrial Buffing Motors, Matte Finish systems, and Laser Engravers. High-precision machinery for bulk utensil job-work in Vasai.",
    keywords: "buffing machine price, industrial buffing motors, hydraulic press for utensils, laser engraving machine, SS polishing machinery",
    alternates: {
        canonical: 'https://rajabuffing.shop/Machinery',
    },
};

const machines = [
    {
        id: "buffing-system",
        name: "Industrial Buffing System",
        subName: "Heavy-Duty Utensil Finisher",
        description: <span>Our primary high-capacity system designed for <Link href="/Products/commercial-utensils-polishing" className="text-blue-600 hover:underline">bulk utensil finishing</Link>. Capable of handling 500+ pieces per hour with consistent mirror luster.</span>,
        video: "/buff.mp4",
        poster: "/buff.webp",
        specs: [
            "Processing speed: 500 pieces/hour",
            "Advanced 20-Motor Buffing Array",
            "Variable RPM for SS 202/304/316",
            "Industrial Heat Dissipation System"
        ],
    },
    {
        id: "matte-polisher",
        name: "Matte Precision Polisher",
        subName: "Satin Finish Specialist",
        description: <span>Specialized equipment for intricate and high-end matte textures. The core machinery behind our <Link href="/Products/specialty-matte-finishing" className="text-blue-600 hover:underline">Matte Specialist</Link> reputation.</span>,
        video: "/matte.mp4",
        poster: "/matte.webp",
        specs: [
            "8-Unit Dedicated Matte Array",
            "Precision Pressure Regulators",
            "Custom Pattern Programming",
            "Fingerprint-Resistant Finish Logic"
        ],
    },
    {
        id: "hydraulic-press",
        name: "Industrial Hydraulic Press",
        subName: "Heavy Metal Forming",
        description: <span>Advanced forming machinery for <Link href="/Products/commercial-utensils-polishing" className="text-blue-600 hover:underline">premium utensil shaping</Link> and press treatment. Ensures structural integrity before the buffing stage.</span>,
        video: "/press.mp4",
        poster: "/press.webp",
        specs: [
            "Dual-Stage 100T Hydraulic Units",
            "Precision Environmental Control",
            "Zero-Tolerance forming accuracy",
            "Auto-Lubrication System"
        ],
    },
    {
        id: "lathe-machine",
        name: "Bidding Lathe Machine",
        subName: "Edge Perfection System",
        description: <span>Precision lathe units for Bidding and edge smoothing. Essential for luxury <Link href="/Products/silverware-restoration" className="text-blue-600 hover:underline">silverware restoration</Link> and aesthetics.</span>,
        video: "/lathe.mp4",
        poster: "/lathe.webp",
        specs: [
            "High-Torque Bidding Motors",
            "Automated Edge Guidance",
            "Vibration Dampening Base",
            "Multi-Utensil Diameter Support"
        ],
    },
    {
        id: "laser-engraver",
        name: "Fiber Laser Engraving System",
        subName: "Permanent Brand Identity",
        description: <span>High-precision fiber laser for branding and hallmarking. Permanent, high-contrast marks on any <Link href="/Products/sauce-pot-buffing" className="text-blue-600 hover:underline">metal grade</Link>.</span>,
        video: "/laser.mp4",
        poster: "/laser.webp",
        specs: [
            "50W Fiber Laser Power",
            "Ultra-Fine Hallmarking Accuracy",
            "High-Speed Batch Processing",
            "Supports LOGO & Batch Coding"
        ],
    },
];

export default function Machinery() {
    return (
        <main className="pt-32 pb-24 bg-white font-sans antialiased text-slate-900">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header with E-E-A-T Signal */}
                <header className="mb-20 max-w-3xl border-l-8 border-slate-900 pl-8">
                    <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        <ShieldCheck size={16} className="text-slate-800" /> Top of the line Industrial Machinery
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900 mb-8">
                        Industrial <br /> <span className="text-slate-400 italic font-medium">Assets</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
                        Raja Buffing Works operates a Tier-1 facility in Vasai East. Our machinery is
                        optimized for bulk job-work and export-grade metal finishing.
                    </p>
                </header>

                {/* Machine Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {machines.map((machine) => (
                        <article
                            key={machine.id}
                            className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Video with priority metadata */}
                            <div className="relative aspect-4/3 bg-slate-200">
                                <video src={machine.video}
                                    className="w-full h-full object-cover"
                                    autoPlay loop muted playsInline
                                    title={machine.name + " Machinery"}
                                    aria-label={machine.name + " Machinery"}
                                    poster={machine.poster}>
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                    Live Ops
                                </div>
                            </div>

                            {/* Content Structure */}
                            < div className="p-8" >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-black tracking-tight">{machine.name}</h2>
                                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{machine.subName}</p>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                                    {machine.description}
                                </p>

                                {/* Specifications: The Expertise Factor */}
                                < div className="space-y-4" >
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <Cpu size={16} />
                                        <h3 className="text-xs font-black uppercase tracking-widest">Technical Specs:</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {machine.specs.map((spec, i) => (
                                            <li
                                                key={i}
                                                className="text-xs text-slate-500 flex items-center gap-2 font-bold"
                                            >
                                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))
                    }
                </div >

                {/* Trust Footer for Machinery Page */}
                < footer className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8" >
                    <div className="max-w-xl">
                        <h4 className="text-3xl font-bold mb-4 italic tracking-tighter">Scalable Batch Processing</h4>
                        <p className="text-slate-400 font-medium">
                            Our fleet of 20+ Buffing Motors ensures that your production line never stops.
                            We handle batches from 100 to 10,000+ units with consistent quality audits.
                        </p>
                    </div>
                    <Link href="/Contact" className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all flex items-center gap-3 shadow-xl">
                        Request Machine Spec Sheet <Zap size={20} />
                    </Link>
                </footer >

            </div >
        </main >
    );
}