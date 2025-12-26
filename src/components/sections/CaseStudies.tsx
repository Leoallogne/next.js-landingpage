"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRef } from "react";

const projects = [
    {
        category: "FinTech",
        title: "Global Payments Platform",
        description: "Re-engineering the core transaction processing system for a Fortune 500 financial institution.",
        stats: "Processed $2B+",
        color: "from-blue-500 to-cyan-500",
        delay: 0
    },
    {
        category: "Healthcare AI",
        title: "Predictive Diagnosis System",
        description: "Developing an AI-driven platform to assist radiologists in early cancer detection.",
        stats: "99.8% Accuracy",
        color: "from-purple-500 to-pink-500",
        delay: 0.1
    },
    {
        category: "Logistics",
        title: "Smart Supply Chain",
        description: "IoT integration for real-time fleet tracking and automated warehouse management.",
        stats: "30% Efficiency Boost",
        color: "from-orange-500 to-yellow-500",
        delay: 0.2
    }
];

export function CaseStudies() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="case-studies" className="py-32 bg-background relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3"
                        >
                            Our Work
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading font-bold text-white"
                        >
                            Selected Case Studies
                        </motion.h3>
                    </div>
                    <Button variant="outline" className="gap-2 rounded-full border-white/10 hover:bg-white/5 hover:border-white/30 text-white group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                </div>

                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: project.delay }}
                            className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[500px]">
                                {/* Content Side */}
                                <div className="lg:col-span-3 p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                                    <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.color} blur-[120px] opacity-20 lg:opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                                    <div className="relative">
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 bg-white/5 text-white tracking-wider uppercase`}>
                                                {project.category}
                                            </span>
                                            <div className="h-px bg-white/10 w-12" />
                                        </div>

                                        <h4 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                            {project.title}
                                        </h4>
                                        <p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-8 border-t border-white/5 pt-8">
                                            <div>
                                                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Impact</div>
                                                <div className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{project.stats}</div>
                                            </div>
                                            <div className="hidden sm:block w-px h-12 bg-white/10" />
                                            <Button variant="link" className="p-0 text-white hover:text-blue-400 group/btn text-lg">
                                                Read Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Image/Visual Side */}
                                <div className="lg:col-span-2 relative order-1 lg:order-2 overflow-hidden bg-neutral-900">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-color-dodge`} />

                                    {/* Parallax Image Effect container */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <motion.div
                                            className="w-full h-[120%] bg-[url('/grid.svg')] bg-cover opacity-30 absolute top-0"
                                            style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }} // subtle parallax within the card
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                whileHover={{ scale: 1.05, rotate: -2 }}
                                                transition={{ duration: 0.5 }}
                                                className="glass-card w-4/5 aspect-[4/5] rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                                                <div className="text-center p-6">
                                                    <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center backdrop-blur-md border border-white/20">
                                                        <ArrowUpRight className="text-white w-8 h-8" />
                                                    </div>
                                                    <span className="text-white/50 text-sm font-mono">PROJECT_PREVIEW.jpg</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
