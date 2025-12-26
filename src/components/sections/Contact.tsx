"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

// Floating Label Input Component
const InputField = ({ label, id, type = "text", placeholder, isTextArea = false }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className="relative group">
            <div className={`absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 ${isFocused ? 'opacity-30' : 'group-hover:opacity-10'}`} />

            <div className="relative bg-neutral-900 rounded-lg p-1">
                {isTextArea ? (
                    <textarea
                        id={id}
                        rows={5}
                        className="block w-full px-4 pt-6 pb-2 text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer resize-none"
                        placeholder=" "
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(false);
                            setHasValue(e.target.value.length > 0);
                        }}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        className="block w-full px-4 pt-6 pb-2 text-white bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 peer"
                        placeholder=" "
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            setIsFocused(false);
                            setHasValue(e.target.value.length > 0);
                        }}
                    />
                )}

                <label
                    htmlFor={id}
                    className="absolute text-sm text-neutral-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                >
                    {label}
                </label>
            </div>
        </div>
    );
}


export function Contact() {
    return (
        <section id="contact" className="py-32 relative bg-neutral-950 overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {/* Simplified World Map Dots or Network using radial gradients for abstract feel */}
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />

                {/* Animated connection lines (CSS only simulation) */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-blue-500 font-bold tracking-wide uppercase text-sm mb-3">Get in Touch</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8">
                            Ready to transform <br /> your business?
                        </h3>
                        <p className="text-lg text-neutral-400 mb-12 max-w-md leading-relaxed">
                            Contact us today to schedule a consultation with our senior strategy team. We're ready to solve your most complex challenges.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Email Us</h4>
                                    <p className="text-neutral-400">hello@nexcorp.business</p>
                                    <p className="text-neutral-400">support@nexcorp.business</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Call Us</h4>
                                    <p className="text-neutral-400">+1 (555) 123-4567</p>
                                    <p className="text-neutral-400">Mon-Fri, 9am-6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group cursor-pointer hover:bg-white/5 p-4 rounded-2xl transition-colors -ml-4">
                                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Visit Us</h4>
                                    <p className="text-neutral-400">100 Innovation Drive</p>
                                    <p className="text-neutral-400">San Francisco, CA 94105</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card-premium p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <InputField id="name" label="Name" />
                                <InputField id="email" label="Email" type="email" />
                            </div>

                            <InputField id="company" label="Company" />

                            <InputField id="message" label="Message" isTextArea={true} />

                            <Button size="lg" className="w-full text-lg h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border-0 shadow-[0_10px_40px_rgba(59,130,246,0.3)] hover:shadow-[0_10px_60px_rgba(59,130,246,0.5)] rounded-xl group relative overflow-hidden">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
