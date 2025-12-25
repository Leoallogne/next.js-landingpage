"use client";

import { motion } from "framer-motion";
import { BarChart, Clock, Users, Award } from "lucide-react";

const features = [
    {
        icon: <BarChart className="w-6 h-6 text-white" />,
        title: "Data-Driven Results",
        description: "Our strategies are backed by deep data analytics to ensure maximum ROI.",
        className: "md:col-span-2 bg-gradient-to-br from-blue-900/50 to-blue-800/20"
    },
    {
        icon: <Clock className="w-6 h-6 text-white" />,
        title: "Rapid Deployment",
        description: "Launch faster with our agile development methodologies.",
        className: "md:col-span-1 bg-gradient-to-br from-purple-900/50 to-purple-800/20"
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Expert Team",
        description: "Access a diverse team of senior engineers and domain experts.",
        className: "md:col-span-1 bg-gradient-to-br from-cyan-900/50 to-cyan-800/20"
    },
    {
        icon: <Award className="w-6 h-6 text-white" />,
        title: "Award Winning",
        description: "Recognized by industry leaders for excellence in innovation.",
        className: "md:col-span-2 bg-gradient-to-br from-indigo-900/50 to-indigo-800/20"
    }
];

export function WhyUs() {
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 sticky top-24">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wide uppercase text-sm mb-2"
                        >
                            Why Choose Us
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
                        >
                            We define the standard of excellence.
                        </motion.h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            Partnering with NexCorp means choosing reliability, innovation, and a commitment to your long-term success.
                        </p>
                        <div className="flex flex-col gap-4 border-l-2 border-white/5 pl-6">
                            <div className="text-white font-bold text-xl">400%</div>
                            <div className="text-muted-foreground text-sm">Average ROI for Clients</div>

                            <div className="text-white font-bold text-xl mt-4">24h</div>
                            <div className="text-muted-foreground text-sm">Average Response Time</div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-8 rounded-2xl border border-white/10 flex flex-col justify-between h-64 ${feature.className}`}
                            >
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
