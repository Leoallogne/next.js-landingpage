"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Globe, Layers, Lock, ShieldCheck, Smartphone } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "Digital Strategy",
        description: "Comprehensive roadmaps to guide your digital transformation journey from concept to execution."
    },
    {
        icon: <Code2 className="w-8 h-8 text-purple-400" />,
        title: "Custom Software",
        description: "Tailor-made applications built with modern architectures for high performance and scalability."
    },
    {
        icon: <Cloud className="w-8 h-8 text-cyan-400" />,
        title: "Cloud Infrastructure",
        description: "Secure, scalable, and cost-effective cloud solutions on AWS, Azure, and Google Cloud."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
        title: "Cybersecurity",
        description: "Enterprise-grade security audits and implementation to protect your most valuable assets."
    },
    {
        icon: <Database className="w-8 h-8 text-orange-400" />,
        title: "Big Data & AI",
        description: "Unlock actionable insights from your data with advanced analytics and machine learning models."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-pink-400" />,
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps delivering seamless user experiences on iOS and Android."
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wide uppercase text-sm mb-2"
                    >
                        Our Solutions
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4"
                    >
                        Comprehensive services for every business need
                    </motion.h3>
                    <p className="text-muted-foreground text-lg">
                        We provide end-to-end technology services designed to accelerate your business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-white/10"
                        >
                            <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
