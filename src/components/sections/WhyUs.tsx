"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { BarChart, Clock, Users, Award, Zap, ChevronRight } from "lucide-react";
import React, { useRef } from "react";

const features = [
    {
        icon: <BarChart className="w-8 h-8 text-blue-300" />,
        title: "Data-Driven Results",
        description: "Our strategies are backed by deep data analytics to ensure maximum ROI.",
        className: "md:col-span-2 bg-gradient-to-br from-blue-900/40 to-blue-800/10"
    },
    {
        icon: <Clock className="w-8 h-8 text-purple-300" />,
        title: "Rapid Deployment",
        description: "Launch faster with our agile development methodologies.",
        className: "md:col-span-1 bg-gradient-to-br from-purple-900/40 to-purple-800/10"
    },
    {
        icon: <Users className="w-8 h-8 text-cyan-300" />,
        title: "Expert Team",
        description: "Access a diverse team of senior engineers and domain experts.",
        className: "md:col-span-1 bg-gradient-to-br from-cyan-900/40 to-cyan-800/10"
    },
    {
        icon: <Award className="w-8 h-8 text-amber-300" />,
        title: "Award Winning",
        description: "Recognized by industry leaders for excellence in innovation.",
        className: "md:col-span-2 bg-gradient-to-br from-indigo-900/40 to-indigo-800/10"
    }
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * 32.5;
        const mouseY = (e.clientY - rect.top) * 32.5;

        const rX = (mouseY / height - 32.5 / 2) * -1;
        const rY = (mouseX / width - 32.5 / 2) * 1;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}


export function WhyUs() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] translate-x-1/3" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">

                    {/* Sticky Content */}
                    <div className="w-full md:w-1/3 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <Zap className="w-3 h-3" /> Why Choose Us
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
                        >
                            We define the <br /> standard of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">excellence.</span>
                        </motion.h3>

                        <p className="text-blue-100/70 text-lg mb-10 leading-relaxed font-light">
                            Partnering with NexCorp means choosing reliability, innovation, and a commitment to your long-term success.
                        </p>

                        <div className="flex flex-col gap-6 border-l-2 border-white/5 pl-8">
                            <div>
                                <div className="text-white font-bold text-3xl mb-1">400%</div>
                                <div className="text-blue-200/50 text-sm uppercase tracking-wider">Average ROI</div>
                            </div>

                            <div>
                                <div className="text-white font-bold text-3xl mb-1">24h</div>
                                <div className="text-blue-200/50 text-sm uppercase tracking-wider">Response Time</div>
                            </div>
                        </div>
                    </div>

                    {/* Grid Content */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 perspective-[1000px]">
                        {features.map((feature, index) => (
                            <TiltCard
                                key={index}
                                className={`p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent ${feature.className} transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] group`}
                            >
                                <div className="bg-black/80 backdrop-blur-xl h-full rounded-[1.8rem] p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden">
                                    {/* Inner Highlight on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h4>
                                        <p className="text-blue-100/60 text-base leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
