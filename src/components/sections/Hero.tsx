"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightContainer } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <SpotlightContainer className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Dynamic Grid Background with Beams */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                {/* Moving Beams - keeping them subtle */}
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-50"
                />
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute left-[45%] w-[1px] h-48 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-30"
                />
                <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-[30%] h-[1px] w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-40"
                />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_100%)] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Defining the Future of Enterprise
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8">
                        Build Faster. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                            Scale Smarter.
                        </span>
                    </h1>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                    <div className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-muted-foreground">
                        <TextGenerateEffect words="We provide the digital infrastructure and strategic consultancy needed to transform ambitious enterprises into market leaders." className="font-normal" />
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow">
                            Start Transformation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="xl" className="group backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10">
                            <PlayCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform text-white" />
                            Watch Showreel
                        </Button>
                    </div>
                </Reveal>
            </div>
        </SpotlightContainer>
    );
}
