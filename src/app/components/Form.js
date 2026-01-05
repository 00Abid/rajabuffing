"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [finishType, setFinishType] = useState("Mirror Polishing"); // Added for Niche SEO
    const [message, setMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // High-level lead generation logic
        const mailtoLink = `mailto:rajabuffingworks02@gmail.com?subject=Industrial Inquiry: ${finishType} - ${name}&body=
            --- New Lead from RajaBuffing.shop ---%0D%0A
            Name: ${name}%0D%0A
            Email: ${email}%0D%0A
            Requested Finish: ${finishType}%0D%0A
            Message:%0D%0A
            ${message}`;

        window.location.href = mailtoLink;

        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            {/* Design Element: Metallic Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 z-0" />

            <div className="relative z-10">
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase">
                    Request a <span className="text-slate-400 italic">Quote</span>
                </h2>
                <p className="text-slate-500 text-sm mb-8 font-bold uppercase tracking-widest">
                    Bulk Job-Work & Specialized Finishing
                </p>

                {isSubmitted ? (
                    <div className="py-20 text-center animate-in fade-in zoom-in duration-300">
                        <CheckCircle2 className="mx-auto text-green-500 mb-4" size={60} />
                        <h3 className="text-xl font-bold">Email App Opened!</h3>
                        <p className="text-slate-500">We will respond within 4 hours.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-900 focus:ring-0 transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-900 focus:ring-0 transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Finish Type Selection: Vital for AEO Service Association */}
                        <div>
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                                Required Finish Type
                            </label>
                            <select
                                value={finishType}
                                onChange={(e) => setFinishType(e.target.value)}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-900 focus:ring-0 transition-all text-slate-900 font-bold"
                            >
                                <option>Mirror Polishing (High Luster)</option>
                                <option>Matte Specialist Finish (Satin)</option>
                                <option>Industrial Buffing (Bulk)</option>
                                <option>Silverware Restoration</option>
                                <option>Laser Engraving Only</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                                Project Details (Qty / Item Type)
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Example: 500 Milk Pots for Mirror Finishing..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-slate-900 focus:ring-0 transition-all text-slate-900 font-medium placeholder:text-slate-300"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-8 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-tighter hover:bg-black transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
                        >
                            <Send className="mr-3" size={20} />
                            Send Industrial Inquiry
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}