import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";

export const Tabs = ({ tabs, defaultValue, className }) => {
    const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id);
    const [sliderStyle, setSliderStyle] = useState({});
    const containerRef = useRef(null);
    const pillRefs = useRef({});

    const updateSlider = (tabId) => {
        const pill = pillRefs.current[tabId];
        const container = containerRef.current;
        if (!pill || !container) return;
        const containerRect = container.getBoundingClientRect();
        const pillRect = pill.getBoundingClientRect();
        setSliderStyle({
            width: pillRect.width,
            left: pillRect.left - containerRect.left,
        });
    };

    useEffect(() => {
        // Small delay to allow refs to be set
        const timer = setTimeout(() => updateSlider(activeTab), 10);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        updateSlider(tabId);
    };

    return (
        <div className={cn("w-full", className)}>
            {/* iOS Segmented Control */}
            <div
                ref={containerRef}
                className="segmented-control mb-5"
            >
                {/* Sliding white pill */}
                <div className="segmented-slider" style={sliderStyle} />

                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => (pillRefs.current[tab.id] = el)}
                        onClick={() => handleTabClick(tab.id)}
                        className={cn(
                            "segmented-pill",
                            activeTab === tab.id && "active"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="animate-fade-in" key={activeTab}>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};
