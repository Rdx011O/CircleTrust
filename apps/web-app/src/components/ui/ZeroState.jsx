import React from "react";
import { cn } from "../../utils/cn";

export const ZeroState = ({ icon: Icon, title, message, action, className }) => (
    <div className={cn("flex flex-col items-center justify-center py-10 text-center", className)}>
        {Icon && (
            <div className="w-16 h-16 rounded-apple-lg bg-black/[0.06] dark:bg-white/[0.08] flex items-center justify-center mb-4 shadow-inner">
                <Icon className="w-7 h-7 text-black/30 dark:text-white/30" strokeWidth={1.5} />
            </div>
        )}
        <h3 className="text-headline font-semibold text-black/80 dark:text-white/80 mb-1.5">
            {title}
        </h3>
        <p className="text-subhead text-black/40 dark:text-white/40 max-w-xs leading-relaxed mb-6">
            {message}
        </p>
        {action}
    </div>
);
