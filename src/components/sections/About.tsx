"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function About() {
    const benefits = [
        "Enterprise-Grade Security",
        "Scalable Cloud Architecture",
        "24/7 Dedicated Support",
        "AI-Powered Analytics",
    ];

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-overlay z-10" />
                            {/* Dummy Image Replaced with Gradient/Pattern to ensure visuals without external assets */}
                            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl border border-white/10 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-bold text-white">10+</div>
                                    <div className="text-sm text-muted-foreground">Years of <br />Innovation</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                            Driving Digital Transformation for Global Enterprises
                        </h3>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            At NexCorp, we believe that technology is the catalyst for modern business evolution. We partner with forward-thinking companies to build robust digital ecosystems that scale.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="gap-2">
                            Our Vision
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
