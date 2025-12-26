"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "NexCorp transformed our legacy infrastructure into a cloud-native powerhouse. The ROI has been incredible.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc.",
        image: "S",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        quote: "Their team's expertise in AI and data analytics helped us uncover revenue streams we didn't know existed.",
        author: "Michael Chen",
        role: "Director of Innovation, DataSphere",
        image: "M",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        quote: "Professional, reliable, and incredibly talented. They delivered our complex project three weeks ahead of schedule.",
        author: "Elena Rodriguez",
        role: "VP of Engineering, BuildSmart",
        image: "E",
        gradient: "from-orange-500 to-red-500"
    },
    {
        quote: "The security audit and implementation they provided gave us the peace of mind to scale globally.",
        author: "David Kim",
        role: "CISO, SecureNet",
        image: "D",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        quote: "A true partner in digital transformation. They didn't just write code; they understood our business goals.",
        author: "Amanda Smith",
        role: "CEO, FutureVision",
        image: "A",
        gradient: "from-indigo-500 to-violet-500"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-[150px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 mb-20 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3"
                >
                    Testimonials
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                >
                    Trusted by Industry Leaders
                </motion.h3>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* Vignette Gradients for smooth fade */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                {/* Marquee Effect */}
                <div className="group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)] flex-row w-full">
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row min-w-full group-hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="group/card relative w-[400px] md:w-[500px] p-10 rounded-[2rem] flex-shrink-0 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors"
                            >
                                {/* Glowing Border Gradient on Hover */}
                                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />

                                <Quote className="w-10 h-10 text-white/20 mb-8" />

                                <p className="text-xl md:text-2xl text-neutral-300 mb-8 leading-relaxed font-light">"{item.quote}"</p>

                                <div className="flex items-center gap-5">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                        {item.image}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-lg">{item.author}</div>
                                        <div className="text-sm text-neutral-500">{item.role}</div>
                                    </div>
                                    <div className="ml-auto flex gap-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% - var(--gap))); }
                }
                .animate-marquee {
                animation: marquee 50s linear infinite;
                }
            `}</style>
        </section>
    );
}
