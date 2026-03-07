import React from "react";
import { cn } from "../../utils/cn";

export const Card = ({ children, className, onClick }) => (
    <div
        onClick={onClick}
        className={cn(
            "glass rounded-apple-lg shadow-apple border border-black/[0.06]",
            "p-5 transition-all duration-200",
            onClick && "cursor-pointer hover:shadow-apple-md hover:scale-[1.005] active:scale-[0.998]",
            "dark:border-white/[0.08]",
            className
        )}
    >
        {children}
    </div>
);

export const CardHeader = ({ children, className }) => (
    <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
    <h3 className={cn("text-headline font-semibold text-black/90 dark:text-white/90 tracking-tight", className)}>
        {children}
    </h3>
);

export const CardDescription = ({ children, className }) => (
    <p className={cn("text-footnote text-black/50 dark:text-white/45 mt-0.5", className)}>
        {children}
    </p>
);

export const CardContent = ({ children, className }) => (
    <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
    <div className={cn("mt-4 pt-4 border-t border-black/5 dark:border-white/8", className)}>
        {children}
    </div>
);
