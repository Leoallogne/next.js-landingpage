"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Layers, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

export function About() {
    const benefits = [
        "Enterprise-Grade Security",
        "Scalable Cloud Architecture",
        "24/7 Dedicated Support",
        "AI-Powered Analytics",
    ];

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-purple-500/5 blur-[120px] -z-10 rounded-full" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Abstract Composition */}
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 group shadow-2xl">
                            {/* Animated Gradients */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 opacity-50" />

                            {/* Floating Elements (Abstract) */}
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20 mask-image-b-0" />

                            {/* Central Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <div className="w-32 h-32 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1" />
                                    <div className="w-2 h-2 bg-purple-400 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1" />
                                </div>
                                <Globe className="absolute w-12 h-12 text-blue-200" />
                            </div>

                            {/* Floating Stats Cards */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="absolute bottom-8 left-8 right-auto p-5 glass-card-premium rounded-2xl border border-white/10 z-20 min-w-[160px] shadow-xl"
                            >
                                <div className="flex flex-col">
                                    <div className="text-4xl font-bold text-white font-heading flex items-baseline">
                                        <Counter value={10} />+
                                    </div>
                                    <div className="text-xs text-blue-200/70 uppercase tracking-wider mt-1">Years of <br />Innovation</div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="absolute top-8 right-8 left-auto p-4 glass-card-premium rounded-2xl border border-white/10 z-20 shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">99.9%</div>
                                    <div className="text-[10px] text-muted-foreground">Uptime</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-white/5 rounded-[2.5rem]" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-[1px] bg-blue-500"></span>
                            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">Who We Are</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-[1.1]">
                            Driving Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transformation</span>
                        </h3>

                        <p className="text-blue-100/60 mb-10 text-lg leading-relaxed font-light">
                            At NexCorp, we believe that technology is the catalyst for modern business evolution. We partner with forward-thinking companies to build robust digital ecosystems that scale.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
                            {benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 hover:border-blue-500/30 text-white gap-2 group">
                            Our Vision
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
