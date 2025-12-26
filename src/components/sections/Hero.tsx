"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, PlayCircle, TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingKPI } from "@/components/ui/FloatingKPI";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export function Hero() {
    return (
        <AuroraBackground>
            <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-8 pt-20 selection:bg-blue-500/30 overflow-hidden">

                {/* Precision Grid Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-[length:40px_40px] opacity-10 pointer-events-none" />

                <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-20">

                    {/* LEFT COLUMN: Content - Precision Aligned */}
                    <div className="flex flex-col items-start text-left pt-10 lg:pt-0">
                        <Reveal>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono mb-8 backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                V2.0 SYSTEM ONLINE
                            </motion.div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-heading font-bold tracking-tight text-white mb-8 leading-[0.95] drop-shadow-2xl">
                                Accelerate <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
                                    Precision Growth.
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2} width="100%">
                            <div className="max-w-xl text-lg md:text-xl text-blue-100/70 leading-relaxed font-light mb-10">
                                <TextGenerateEffect
                                    words="Deploy enterprise-grade infrastructure with mathematical precision. Reduce OpEx by 30% and scale your data architecture instantly."
                                    className="font-normal"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row items-start gap-5 mb-16">
                                <Button size="xl" className="relative overflow-hidden group bg-blue-600 hover:bg-blue-500 text-white min-w-[200px] h-14 text-lg rounded-none border-l-2 border-blue-300">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                                    <span className="relative z-10 flex items-center justify-center gap-2 font-mono tracking-tight">
                                        START DEPLOYMENT
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>

                                <Button variant="ghost" size="xl" className="group text-blue-200 hover:text-white hover:bg-white/5 h-14 text-lg font-mono">
                                    <PlayCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform text-blue-400" />
                                    SYS.DEMO
                                </Button>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4} width="100%">
                            <div className="w-full border-t border-white/10 pt-8">
                                <p className="text-[10px] text-blue-200/30 uppercase tracking-[0.2em] font-mono mb-4">
                                    TRUSTED_BY_LEADERS
                                </p>
                                <div className="w-full max-w-md opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                                    <LogoMarquee />
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT COLUMN: HUD Visuals - Structurally Aligned */}
                    <div className="relative h-[600px] w-full hidden lg:block perspective-[2000px]">
                        {/* HUD Elements Container */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: 10, rotateX: 5 }}
                            animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="relative w-full h-full transform-style-3d"
                        >
                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#60A5FA" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                                <motion.path
                                    d="M100,150 L350,300 L200,500"
                                    fill="none"
                                    stroke="url(#lineGrad)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                                <circle cx="100" cy="150" r="3" fill="#60A5FA" className="animate-pulse" />
                                <circle cx="350" cy="300" r="3" fill="#60A5FA" className="animate-pulse" />
                                <circle cx="200" cy="500" r="3" fill="#60A5FA" className="animate-pulse" />
                            </svg>

                            {/* Main Card (Center-Right) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-[35%] right-[10%] z-20"
                            >
                                <div className="glass-card-premium p-6 rounded-2xl border-l-4 border-l-blue-500 border-white/5 bg-neutral-900/40 backdrop-blur-xl w-[280px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-blue-200/60 font-mono">NET_REVENUE</div>
                                            <div className="text-xl font-bold text-white">+245.8%</div>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "75%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-blue-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Secondary Card (Top-Left) */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-[15%] left-[10%] z-10"
                            >
                                <FloatingKPI
                                    label="SYS_LATENCY"
                                    value="12ms"
                                    trend="-40%"
                                    className="glass-card-premium border-emerald-500/30 font-mono scale-[0.85] origin-top-left"
                                />
                            </motion.div>

                            {/* Tertiary Card (Bottom) */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-[20%] left-[20%] z-30"
                            >
                                <FloatingKPI
                                    label="ACTIVE_NODES"
                                    value="8,402"
                                    trend=" Stable"
                                    className="glass-card-premium border-purple-500/30 font-mono"
                                />
                            </motion.div>

                            {/* Abstract decorative rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                        </motion.div>
                    </div>

                </div>

                {/* Mobile Stats (Visible < lg) */}
                <div className="lg:hidden w-full px-4 mb-20 relative z-20">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4 backdrop-blur-sm">
                            <div className="text-xs text-blue-200/50 font-mono mb-1">EFFICIENCY</div>
                            <div className="text-2xl font-bold text-white">+45%</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-4 backdrop-blur-sm">
                            <div className="text-xs text-blue-200/50 font-mono mb-1">LATENCY</div>
                            <div className="text-2xl font-bold text-white">12ms</div>
                        </div>
                    </div>
                </div>

                {/* Scroller */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-8 flex items-center gap-4 pointer-events-none z-20 hidden md:flex"
                >
                    <div className="h-[1px] w-12 bg-blue-500/30" />
                    <span className="text-[10px] text-blue-500/50 uppercase tracking-[0.2em] font-mono">Scroll_To_Explore</span>
                </motion.div>

                {/* Global Styles for Shine/Animations */}
                <style jsx global>{`
                    @keyframes shine {
                        100% {
                            transform: translateX(100%);
                        }
                    }
                    .animate-shine {
                        animation: shine 1.5s infinite;
                    }
                `}</style>
            </div>
        </AuroraBackground>
    );
}
