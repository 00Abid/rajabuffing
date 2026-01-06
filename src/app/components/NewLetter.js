"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Technical B2B Prefill Logic
        const adminEmail = "rajabuffingworks02@gmail.com";
        const subject = encodeURIComponent("Newsletter Subscription - Raja Buffing Works");
        const body = encodeURIComponent(
            `Hello Raja Buffing Team,\n\nI would like to subscribe to your technical updates and metal trends newsletter.\n\nMy Email: ${email}\n\nPlease keep me updated on SS buffing HSN codes and export standards.\n\nRegards.`
        );

        // This triggers the user's mail app
        window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-4 italic tracking-tighter uppercase leading-none text-white">
                Stay Updated on <br /><span className="text-slate-400 font-medium">Metal Trends</span>
            </h3>

            <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                Click below to send your subscription request directly to our desk.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    required
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800 border-none rounded-2xl px-6 py-5 w-full md:w-72 text-white placeholder:text-slate-500 font-bold focus:ring-2 focus:ring-white transition-all"
                />
                <button
                    type="submit"
                    aria-label="Send subscription email"
                    className="bg-white text-slate-900 px-8 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-slate-200 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                    Subscribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </div>
    );
}