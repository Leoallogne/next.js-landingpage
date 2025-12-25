"use client";

import { motion } from "framer-motion";

export const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Primary Orb - Top Left */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-600/10 rounded-full blur-[100px] will-change-transform"
            />

            {/* Secondary Orb - Bottom Right */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -40, 0],
                    y: [0, -50, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[120px] will-change-transform"
            />

            {/* Accent Orb - Middle Center */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-cyan-500/5 rounded-full blur-[80px] will-change-transform"
            />
        </div>
    );
};
