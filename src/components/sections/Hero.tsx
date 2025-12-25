"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingKPI } from "@/components/ui/FloatingKPI";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export function Hero() {
    return (
        <AuroraBackground>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 pt-20 text-center">

                {/* Floating KPIs - Strategically placed for depth (Desktop only) */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none max-w-7xl mx-auto">
                    {/* Top Right - Efficiency */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] right-[3%]"
                    >
                        <FloatingKPI label="Efficiency Gain" value="+45%" trend="Q3 Growth" delay={0.5} />
                    </motion.div>

                    {/* Bottom Left - Cost Reduction - Moved further left/down to avoid centerline overlap */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[25%] left-[2%]"
                    >
                        <FloatingKPI label="OpEx Reduction" value="30%" trend="Verified" delay={0.7} />
                    </motion.div>

                    {/* Middle Right (Lower) - Speed - Moved further right */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[20%] right-[5%]"
                    >
                        <FloatingKPI label="Deployment Speed" value="3x Faster" delay={0.9} />
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative z-20">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs md:text-sm font-medium mb-8 backdrop-blur-sm cursor-pointer hover:bg-blue-500/20 transition-colors">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Enterprise Grade Solutions
                            <ChevronRight className="w-3 h-3 ml-1" />
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Accelerate Growth. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
                                Data-Driven Precision.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2} width="100%">
                        <div className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-blue-100/80 leading-relaxed font-light">
                            <TextGenerateEffect
                                words="Reduce operational costs up to 30% and accelerate product deployment with our AI-driven enterprise infrastructure."
                                className="font-normal"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                            <Button size="xl" className="group shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-shadow bg-blue-600 hover:bg-blue-700 text-white min-w-[200px]">
                                Request Enterprise Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="xl" className="group backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 text-white min-w-[200px]">
                                <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                                View Success Stories
                            </Button>
                        </div>
                    </Reveal>

                    <Reveal delay={0.4} width="100%">
                        <div className="flex flex-col items-center gap-6">
                            <p className="text-[10px] text-blue-200/40 uppercase tracking-[0.2em] font-medium">
                                Trusted by 500+ Industry Leaders
                            </p>
                            <div className="w-full max-w-2xl mx-auto opacity-70 hover:opacity-100 transition-opacity duration-500">
                                <LogoMarquee />
                            </div>
                        </div>
                    </Reveal>

                    {/* Mobile Stats Bar (Visible < lg) */}
                    <div className="lg:hidden mt-12 grid grid-cols-3 gap-4 w-full max-w-md mx-auto border-t border-white/10 pt-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white font-heading">+45%</span>
                            <span className="text-[10px] text-blue-200 uppercase tracking-wider">Efficiency</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-4">
                            <span className="text-2xl font-bold text-white font-heading">30%</span>
                            <span className="text-[10px] text-blue-200 uppercase tracking-wider">Cost Cut</span>
                        </div>
                        <div className="flex flex-col border-l border-white/10 pl-4">
                            <span className="text-2xl font-bold text-white font-heading">3x</span>
                            <span className="text-[10px] text-blue-200 uppercase tracking-wider">Faster</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-[10px] text-blue-200/50 uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full overflow-hidden">
                        <motion.div
                            animate={{ y: [-20, 0, 20] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="w-full h-1/2 bg-white blur-[1px]"
                        />
                    </div>
                </motion.div>
            </div>
        </AuroraBackground>
    );
}
