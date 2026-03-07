import React from "react";
import { cn } from "../../utils/cn";

export const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) => {
    const variants = {
        primary: [
            "bg-apple-blue text-white",
            "shadow-[0_1px_3px_rgba(0,122,255,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]",
            "hover:bg-blue-600 hover:shadow-[0_2px_8px_rgba(0,122,255,0.45)]",
            "active:scale-[0.97] active:bg-blue-700",
        ],
        secondary: [
            "bg-black/[0.06] dark:bg-white/[0.12] text-black dark:text-white",
            "hover:bg-black/[0.10] dark:hover:bg-white/[0.18]",
            "active:scale-[0.97]",
        ],
        outline: [
            "border border-apple-blue/50 text-apple-blue bg-transparent",
            "hover:bg-apple-blue/8",
            "active:scale-[0.97]",
        ],
        ghost: [
            "text-black/60 dark:text-white/60 bg-transparent",
            "hover:bg-black/[0.05] dark:hover:bg-white/[0.08] hover:text-black dark:hover:text-white",
            "active:scale-[0.97]",
        ],
        destructive: [
            "text-apple-red bg-transparent",
            "hover:bg-apple-red/8",
            "active:scale-[0.97]",
        ],
    };

    const sizes = {
        sm: "px-3 py-1.5 text-footnote rounded-apple-sm",
        md: "px-4 py-2 text-subhead rounded-apple",
        lg: "px-6 py-3 text-callout rounded-apple-md",
        xl: "px-7 py-3.5 text-body rounded-apple-lg",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-1.5",
                "font-semibold tracking-[-0.01em]",
                "transition-all duration-150 ease-apple",
                "disabled:opacity-40 disabled:pointer-events-none",
                "select-none focus-visible:outline-none",
                "focus-visible:ring-2 focus-visible:ring-apple-blue/50 focus-visible:ring-offset-1",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};
