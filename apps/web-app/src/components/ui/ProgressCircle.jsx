import React from "react";

export const ProgressCircle = ({ value, size = 120, strokeWidth = 10, label, sublabel }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg
                className="transform -rotate-90 drop-shadow-sm"
                width={size}
                height={size}
            >
                {/* Track */}
                <circle
                    strokeWidth={strokeWidth}
                    stroke="rgba(0,0,0,0.08)"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* Progress */}
                <circle
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="#007AFF"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{
                        transition: 'stroke-dashoffset 1.2s cubic-bezier(0.35, 0, 0.25, 1)',
                        filter: 'drop-shadow(0 0 4px rgba(0,122,255,0.4))',
                    }}
                />
            </svg>
            {/* Center Label */}
            <div className="absolute flex flex-col items-center">
                <span
                    className="font-bold text-black/90 dark:text-white/90 leading-none"
                    style={{ fontSize: size * 0.19 }}
                >
                    {label}
                </span>
                {sublabel && (
                    <span
                        className="text-black/40 dark:text-white/40 mt-1 uppercase tracking-widest font-medium"
                        style={{ fontSize: size * 0.08 }}
                    >
                        {sublabel}
                    </span>
                )}
            </div>
        </div>
    );
};
