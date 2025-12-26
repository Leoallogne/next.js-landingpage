"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Globe, Layers, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";

const services = [
    {
        icon: <Globe className="w-10 h-10 text-blue-400" />,
        title: "Digital Strategy",
        description: "Comprehensive roadmaps to guide your digital transformation journey from concept to execution.",
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
        icon: <Code2 className="w-10 h-10 text-purple-400" />,
        title: "Custom Software",
        description: "Tailor-made applications built with modern architectures for high performance.",
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: <Cloud className="w-10 h-10 text-cyan-400" />,
        title: "Cloud Infrastructure",
        description: "Secure, scalable, and cost-effective cloud solutions on AWS, Azure, and Google Cloud.",
        className: "md:col-span-1",
        gradient: "from-cyan-500/20 to-teal-500/20"
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
        title: "Cybersecurity",
        description: "Enterprise-grade security audits and implementation to protect your most valuable assets.",
        className: "md:col-span-2",
        gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
        icon: <Database className="w-10 h-10 text-orange-400" />,
        title: "Big Data & AI",
        description: "Unlock actionable insights from your data with advanced analytics and machine learning models.",
        className: "md:col-span-1",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        icon: <Smartphone className="w-10 h-10 text-pink-400" />,
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps delivering seamless user experiences.",
        className: "md:col-span-1",
        gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
        icon: <Zap className="w-10 h-10 text-yellow-400" />,
        title: "Rapid Prototyping",
        description: "Validate ideas quickly with functional MVPs and interactive prototypes.",
        className: "md:col-span-1",
        gradient: "from-yellow-500/20 to-amber-500/20"
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3"
                    >
                        Our Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
                    >
                        Engineering the Future
                    </motion.h3>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                        We provide end-to-end technology services designed to accelerate your business growth and digital capability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 hover:border-white/20 transition-colors ${service.className}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            {/* Spotlight effect placeholder - ideally integrated if Spotlight supports being a child, 
                                 or we use simple radial gradient on hover */}
                            <Spotlight className="-top-40 -left-40 md:-left-32 md:-top-20 h-[200%] w-[200%]" fill="white" />


                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h4>
                                    <p className="text-neutral-400 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
