"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const Spotlight = ({
    className,
    fill = "white",
}: {
    className?: string;
    fill?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${fill}20,
              transparent 80%
            )
          `,
                }}
            />
        </div>
    );
};

export function SpotlightContainer({ children, className }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn("relative group/spotlight overflow-hidden", className)}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.1),
                        transparent 80%
                        )
                    `,
                }}
            />
            {children}
        </div>
    )
}
