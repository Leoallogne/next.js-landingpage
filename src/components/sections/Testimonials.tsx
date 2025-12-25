"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "NexCorp transformed our legacy infrastructure into a cloud-native powerhouse. The ROI has been incredible.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc.",
        image: "S"
    },
    {
        quote: "Their team's expertise in AI and data analytics helped us uncover revenue streams we didn't know existed.",
        author: "Michael Chen",
        role: "Director of Innovation, DataSphere",
        image: "M"
    },
    {
        quote: "Professional, reliable, and incredibly talented. They delivered our complex project three weeks ahead of schedule.",
        author: "Elena Rodriguez",
        role: "VP of Engineering, BuildSmart",
        image: "E"
    },
    {
        quote: "The security audit and implementation they provided gave us the peace of mind to scale globally.",
        author: "David Kim",
        role: "CISO, SecureNet",
        image: "D"
    },
    {
        quote: "A true partner in digital transformation. They didn't just write code; they understood our business goals.",
        author: "Amanda Smith",
        role: "CEO, FutureVision",
        image: "A"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                    Trusted by Industry Leaders
                </h3>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* Marquee Effect */}
                <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row w-full">
                    <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row min-w-full group-hover:[animation-play-state:paused]">
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="glass-card w-[350px] md:w-[450px] p-8 rounded-2xl flex-shrink-0 border border-white/5 mx-4"
                            >
                                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">"{item.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                        {item.image}
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground">{item.author}</div>
                                        <div className="text-sm text-muted-foreground">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>

            <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
