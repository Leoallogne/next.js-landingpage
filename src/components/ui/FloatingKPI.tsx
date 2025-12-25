"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface FloatingKPIProps {
    label: string;
    value: string;
    trend?: string;
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
}

export function FloatingKPI({ label, value, trend, delay = 0, className, style }: FloatingKPIProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: delay, duration: 0.8, ease: "easeOut" }}
            // Float animation
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`absolute glass-card px-5 py-3 rounded-xl border border-white/10 shadow-xl backdrop-blur-md bg-white/5 flex items-center gap-4 select-none pointer-events-auto ${className}`}
            style={style}
        >
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</span>
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white font-heading">{value}</span>
                    {trend && (
                        <span className="flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">
                            <TrendingUp className="w-3 h-3 mr-1" /> {trend}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
