import React, { useState } from "react";
import { Search, Plus, Globe, Building2, Shield, X, ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Tabs } from "../components/ui/Tabs";
import { ZeroState } from "../components/ui/ZeroState";
import { Button } from "../components/ui/Button";

const Discover = () => {
    const [showCreateFlow, setShowCreateFlow] = useState(false);
    const [privacyType, setPrivacyType] = useState("public");

    const discoverTabs = [
        {
            id: "bigger",
            label: "Bigger Circles",
            content: (
                <ZeroState
                    icon={Globe}
                    title="No public circles yet"
                    message="Large public communities will appear here once they join the platform."
                />
            ),
        },
        {
            id: "ngos",
            label: "NGOs",
            content: (
                <ZeroState
                    icon={Building2}
                    title="No NGOs listed yet"
                    message="Verified NGO groups will appear here once they join."
                />
            ),
        },
    ];

    return (
        <div className="space-y-7 animate-fade-in">
            {/* Header */}
            <header className="pt-2">
                <h1 className="text-largetitle font-bold text-black/90 dark:text-white/90 tracking-tight">
                    Discover
                </h1>
                <p className="text-callout text-black/45 dark:text-white/45 mt-0.5">
                    Find communities to join or start your own circle.
                </p>
            </header>

            {/* Search */}
            <div className="relative group">
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px]
                               text-black/30 dark:text-white/30 group-focus-within:text-apple-blue transition-colors duration-150"
                    strokeWidth={1.7}
                />
                <Input
                    className="pl-11 h-12 text-callout !rounded-apple-md"
                    placeholder="Search circles, NGOs, or communities…"
                />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

                {/* Tabs Panel */}
                <div className="lg:col-span-2">
                    <Card className="p-0 overflow-hidden">
                        <div className="px-5 pt-5 pb-4">
                            <Tabs tabs={discoverTabs} defaultValue="bigger" />
                        </div>
                    </Card>
                </div>

                {/* Right Panel */}
                <div className="space-y-5">
                    {/* Create CTA */}
                    <Card className="text-center">
                        <div className="w-14 h-14 bg-apple-blue/10 rounded-apple-lg flex items-center justify-center mx-auto mb-4">
                            <Plus className="w-7 h-7 text-apple-blue" strokeWidth={1.8} />
                        </div>
                        <h3 className="text-headline font-semibold text-black/85 dark:text-white/85 mb-1.5">
                            Create a Circle
                        </h3>
                        <p className="text-footnote text-black/45 dark:text-white/45 mb-5 leading-relaxed">
                            Start a private circle for friends or a public one for your community.
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full"
                            onClick={() => setShowCreateFlow(true)}
                        >
                            Get Started
                        </Button>
                    </Card>

                    {/* Create Flow */}
                    {showCreateFlow && (
                        <Card className="animate-slide-up overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-headline font-semibold text-black/85 dark:text-white/85">
                                    New Circle
                                </h3>
                                <button
                                    onClick={() => setShowCreateFlow(false)}
                                    className="w-7 h-7 rounded-full bg-black/[0.07] dark:bg-white/[0.10] flex items-center justify-center
                                               hover:bg-black/[0.12] dark:hover:bg-white/[0.15] transition-colors"
                                >
                                    <X className="w-4 h-4 text-black/50 dark:text-white/50" strokeWidth={2} />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label className="text-caption1 font-semibold text-black/40 dark:text-white/40 uppercase tracking-widest">
                                        Circle Name
                                    </label>
                                    <Input placeholder="E.g. Engineering Peers" />
                                </div>

                                {/* Category */}
                                <div className="space-y-1.5">
                                    <label className="text-caption1 font-semibold text-black/40 dark:text-white/40 uppercase tracking-widest">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select className={`
                                            w-full appearance-none
                                            bg-black/[0.06] dark:bg-white/[0.08] text-black dark:text-white
                                            border border-transparent rounded-apple
                                            px-4 py-2.5 text-body
                                            outline-none focus:ring-2 focus:ring-apple-blue/20
                                            focus:bg-white dark:focus:bg-white/[0.12] transition-all
                                            pr-9
                                        `}>
                                            <option value="peers">Peers</option>
                                            <option value="family">Family</option>
                                            <option value="ngo">NGO</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/35 dark:text-white/35 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Privacy */}
                                <div className="space-y-1.5">
                                    <label className="text-caption1 font-semibold text-black/40 dark:text-white/40 uppercase tracking-widest">
                                        Privacy
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { id: "public",  label: "Public",  Icon: Globe },
                                            { id: "private", label: "Private", Icon: Shield },
                                        ].map(({ id, label, Icon }) => (
                                            <button
                                                key={id}
                                                onClick={() => setPrivacyType(id)}
                                                className={`
                                                    flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-apple
                                                    border-2 transition-all duration-150
                                                    ${privacyType === id
                                                        ? "border-apple-blue bg-apple-blue/8 text-apple-blue"
                                                        : "border-black/[0.08] dark:border-white/[0.10] text-black/45 dark:text-white/45 hover:border-black/[0.14] dark:hover:border-white/[0.18]"
                                                    }
                                                `}
                                            >
                                                <Icon className="w-5 h-5" strokeWidth={1.7} />
                                                <span className="text-caption1 font-semibold">{label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <Button variant="primary" size="lg" className="w-full mt-2">
                                    Create Circle
                                </Button>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Discover;
