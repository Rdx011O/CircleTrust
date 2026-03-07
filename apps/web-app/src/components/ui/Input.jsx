import React from "react";
import { cn } from "../../utils/cn";

export const Input = ({ className, ...props }) => (
    <input
        className={cn(
            // Base surface
            "w-full bg-black/[0.06] dark:bg-white/[0.08]",
            "border border-transparent",
            // Text
            "text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30",
            "text-body",
            // Layout
            "px-4 py-2.5 rounded-apple",
            // Interaction
            "outline-none transition-all duration-200",
            "focus:bg-white dark:focus:bg-white/[0.12]",
            "focus:border-apple-blue/30",
            "focus:ring-3 focus:ring-apple-blue/15 dark:focus:ring-apple-blue/25",
            "focus:shadow-[0_0_0_4px_rgba(0,122,255,0.12)]",
            className
        )}
        {...props}
    />
);
