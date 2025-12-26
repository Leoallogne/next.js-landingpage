"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import React, { useRef } from "react";
import Image from "next/image";

// --- Data ---
const articles = [
    {
        id: 1,
        title: "The Future of Cloud Native Infrastructure",
        excerpt: "Why traditional virtualization is fading and how WASM is poised to take over the edge computing landscape.",
        category: "Infrastructure",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-2",
        featured: true
    },
    {
        id: 2,
        title: "AI-Driven Security Protocols",
        excerpt: "Implementing autonomous threat detection systems in banking sectors.",
        category: "Security",
        date: "Oct 08, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
        className: "md:col-span-1"
    },
    {
        id: 3,
        title: "Scaling Beyond 10M Users",
        excerpt: "Lessons learned from scaling our largest fintech client's database sharding strategy.",
        category: "Scalability",
        date: "Sep 28, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        className: "md:col-span-1"
    }
];

// --- Components ---

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 backdrop-blur-md ${article.className} shadow-2xl transition-all duration-500 hover:shadow-blue-900/20`}
        >
            {/* Image Background */}
            <div className="absolute inset-0 z-0 bg-neutral-900">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-end items-start min-h-[300px] md:min-h-[400px]">

                {/* Top Badges */}
                <div className="absolute top-8 left-8 flex gap-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600/80 backdrop-blur-md rounded-full border border-blue-400/20 shadow-lg">
                        {article.category}
                    </span>
                    {article.featured && (
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neutral-950 bg-amber-400/90 backdrop-blur-md rounded-full flex items-center gap-1 shadow-lg shadow-amber-900/20">
                            <Tag className="w-3 h-3" /> Featured
                        </span>
                    )}
                </div>

                <div className="space-y-4 max-w-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <div className="flex items-center gap-4 text-xs text-blue-200/60 font-mono mb-2">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>

                    <h3 className={`font-heading font-bold text-white leading-tight ${article.featured ? 'text-3xl md:text-5xl' : 'text-2xl'} group-hover:text-blue-100 transition-colors`}>
                        {article.title}
                    </h3>

                    <p className={`text-neutral-300 font-light leading-relaxed max-w-lg ${article.featured ? 'text-lg line-clamp-3' : 'text-sm line-clamp-2'} group-hover:text-white transition-colors`}>
                        {article.excerpt}
                    </p>

                    <div className="pt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <span className="text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors pointer-events-none" />
        </motion.div>
    );
}

export function Insights() {
    return (
        <section id="insights" className="py-32 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono mb-6 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                INTELLIGENCE
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                                Insights & Prespectives.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-xl text-blue-100/60 font-light leading-relaxed">
                                Deep dives into infrastructure, security, and scalability from the engineers building the future.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3}>
                        <Button variant="outline" className="border-white/10 hover:bg-white/5">
                            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Reveal>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {articles.map((article, i) => (
                        <ArticleCard key={article.id} article={article} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
