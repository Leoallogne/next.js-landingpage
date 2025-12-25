"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-950 text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        // The aurora gradient mesh
                        "filter blur-[60px] opacity-40 will-change-transform pointer-events-none",
                        "absolute -inset-[10%] [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",

                        // Animation configuration
                        "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--aurora)]",
                        "after:[background-size:200%_150%] after:animate-aurora after:bg-blend-difference",

                        // Inverted blend for depth
                        "before:content-[''] before:absolute before:inset-0 before:[background-image:var(--aurora)]",
                        "before:[background-size:200%_150%] before:animate-aurora before:bg-blend-difference before:invert",

                        // The Aurora Gradient definition - Dark Premium Colors
                        "[--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#8b5cf6_15%,#06b6d4_20%,#a855f7_25%,#3b82f6_30%)]"
                    )}
                />
            </div>
            {showRadialGradient && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_100%)] pointer-events-none" />
            )}
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};
