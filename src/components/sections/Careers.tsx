"use client";

import { motion } from "framer-motion";
import { ChevronDown, Zap, Globe, Shield, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import React, { useState } from "react";

// --- Data ---
const values = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Relentless Precision",
        description: "We obsess over the milliseconds and the pixels."
    },
    {
        icon: <Globe className="w-6 h-6 text-blue-400" />,
        title: "Global Impact",
        description: "Your code will run in data centers across 30+ countries."
    },
    {
        icon: <Shield className="w-6 h-6 text-emerald-400" />,
        title: "Radical Transparency",
        description: "Open source, open books, open minds."
    },
    {
        icon: <Cpu className="w-6 h-6 text-purple-400" />,
        title: "Innovation First",
        description: "We use the latest stable tech stack, no legacy code."
    }
];

const jobs = [
    {
        id: 1,
        title: "Senior Backend Engineer (Go/Rust)",
        department: "Core Infrastructure",
        location: "Remote (US/EU)",
        type: "Full-time"
    },
    {
        id: 2,
        title: "Principal Frontend Engineer",
        department: "Product Experience",
        location: "San Francisco",
        type: "Full-time"
    },
    {
        id: 3,
        title: "DevOps Architect",
        department: "Platform Engineering",
        location: "London / Remote",
        type: "Full-time"
    },
];

// --- Components ---

function JobAccordion({ job, isOpen, onClick }: { job: typeof jobs[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group hover:bg-white/5 px-4 transition-colors rounded-lg"
            >
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-neutral-400 font-mono">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                        <span>{job.location}</span>
                    </div>
                </div>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 rotate-180' : 'bg-transparent group-hover:border-white/30'}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-neutral-400'}`} />
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="overflow-hidden"
            >
                <div className="pb-8 px-4 pt-2">
                    <p className="text-neutral-300 leading-relaxed mb-6 max-w-3xl">
                        We are looking for an experienced engineer to help us scale our high-throughput distributed systems. You will work directly with our CTO to design resilient architectures.
                    </p>
                    <div className="flex gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-500 text-white">Apply Now</Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function Careers() {
    const [openJobId, setOpenJobId] = useState<number | null>(null);

    return (
        <section id="careers" className="py-32 bg-neutral-900/30 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Content & Values */}
                    <div className="lg:w-1/2">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono mb-8 backdrop-blur-md">
                                CAREERS
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                                Build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Impossible.</span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-xl text-neutral-400 max-w-xl font-light leading-relaxed mb-12">
                                We're a team of obsessively detailed engineers building the infrastructure for the next generation.
                            </p>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.15), duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                                    whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors shadow-lg hover:shadow-purple-900/10"
                                >
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{val.icon}</div>
                                    <h3 className="font-bold text-white mb-2">{val.title}</h3>
                                    <p className="text-sm text-neutral-400">{val.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Jobs */}
                    <div className="lg:w-1/2">
                        <Reveal delay={0.4}>
                            <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-2 md:p-8 backdrop-blur-sm shadow-2xl">
                                <div className="px-4 py-4 mb-4 border-b border-white/10 flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-white">Open Roles</h3>
                                    <Button variant="ghost" className="text-xs text-neutral-400 hover:text-white">View All</Button>
                                </div>
                                {jobs.map((job) => (
                                    <JobAccordion
                                        key={job.id}
                                        job={job}
                                        isOpen={openJobId === job.id}
                                        onClick={() => setOpenJobId(openJobId === job.id ? null : job.id)}
                                    />
                                ))}
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
