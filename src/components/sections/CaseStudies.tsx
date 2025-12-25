"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        category: "FinTech",
        title: "Global Payments Platform",
        description: "Re-engineering the core transaction processing system for a Fortune 500 financial institution.",
        stats: "Processed $2B+",
        color: "from-blue-500 to-cyan-500"
    },
    {
        category: "Healthcare AI",
        title: "Predictive Diagnosis System",
        description: "Developing an AI-driven platform to assist radiologists in early cancer detection.",
        stats: "99.8% Accuracy",
        color: "from-purple-500 to-pink-500"
    },
    {
        category: "Logistics",
        title: "Smart Supply Chain",
        description: "IoT integration for real-time fleet tracking and automated warehouse management.",
        stats: "30% Efficiency Boost",
        color: "from-orange-500 to-yellow-500"
    }
];

export function CaseStudies() {
    return (
        <section id="case-studies" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Work</h2>
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                            Selected Case Studies
                        </h3>
                    </div>
                    <Button variant="outline" className="gap-2">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-muted/30"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
                                <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} blur-[100px] opacity-10`} />

                                    <div className="relative z-10">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border border-white/10 bg-white/5 mb-6 text-white`}>
                                            {project.category}
                                        </span>
                                        <h4 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Impact</div>
                                                <div className="text-xl font-bold text-white">{project.stats}</div>
                                            </div>
                                            <div className="w-px h-10 bg-white/10" />
                                            <Button variant="link" className="p-0 text-white hover:text-primary">
                                                Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 min-h-[300px] relative order-1 md:order-2 bg-muted/50 group-hover:bg-muted/70 transition-colors overflow-hidden">
                                    {/* Abstract visualization of the project */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-overlay`} />
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover opacity-30" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="glass w-3/4 h-3/4 rounded-xl border border-white/10 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 flex items-center justify-center">
                                            <span className="text-4xl opacity-50 font-heading font-bold text-white/20">Project Preview</span>
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
