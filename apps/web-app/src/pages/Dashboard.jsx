import React from "react";
import {
    Users, Sparkles, Bell, Lock, ShieldCheck, ChevronRight, TrendingUp
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/Card";
import { ZeroState } from "../components/ui/ZeroState";
import { Button } from "../components/ui/Button";
import { ProgressCircle } from "../components/ui/ProgressCircle";

const StatBadge = ({ label, value, color = "text-black/90 dark:text-white/90" }) => (
    <div className="flex-1 bg-black/[0.04] dark:bg-white/[0.06] rounded-apple p-3.5 text-center">
        <p className="text-caption2 text-black/40 dark:text-white/40 uppercase tracking-widest font-medium mb-1">
            {label}
        </p>
        <p className={`text-title3 font-bold ${color}`}>{value}</p>
    </div>
);

const Dashboard = () => {
    const isTxHistoryLocked = true;
    const profile = null;

    return (
        <div className="space-y-7 animate-fade-in">
            {/* ── Header ── */}
            <header className="flex items-start justify-between pt-2">
                <div>
                    <p className="text-footnote text-black/40 dark:text-white/40 font-medium uppercase tracking-widest mb-0.5">
                        {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                    </p>
                    <h1 className="text-largetitle font-bold text-black/90 dark:text-white/90 tracking-tight">
                        {profile?.full_name
                            ? `Hello, ${profile.full_name.split(" ")[0]} 👋`
                            : "Dashboard"}
                    </h1>
                    <p className="text-callout text-black/45 dark:text-white/45 mt-0.5">
                        Welcome back to your control center.
                    </p>
                </div>
                <button className={`
                    relative w-10 h-10 rounded-apple flex items-center justify-center
                    bg-black/[0.06] dark:bg-white/[0.08]
                    hover:bg-black/[0.10] dark:hover:bg-white/[0.12]
                    transition-all duration-150 active:scale-95
                    text-black/60 dark:text-white/60
                `}>
                    <Bell className="w-[18px] h-[18px]" strokeWidth={1.7} />
                    {/* Notification dot */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-apple-red rounded-full ring-2 ring-white dark:ring-black" />
                </button>
            </header>

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left column */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Circle Overview */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between mb-3">
                            <div>
                                <CardTitle>Circle Overview</CardTitle>
                                <CardDescription>Your connected circles</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-largetitle font-bold text-black/80 dark:text-white/80 leading-none">0</span>
                                <Button variant="ghost" size="sm" className="text-apple-blue -mr-1">
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <div className="border-t border-black/[0.05] dark:border-white/[0.06] -mx-5 px-5 pt-4">
                            <ZeroState
                                icon={Users}
                                title="No Circles Yet"
                                message="You aren't connected to any circles. Explore to find your community."
                                action={
                                    <Button variant="primary" size="md">
                                        Explore Circles
                                    </Button>
                                }
                            />
                        </div>
                    </Card>

                    {/* Suggested Circles */}
                    <section className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-title3 font-semibold text-black/85 dark:text-white/85 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-apple-yellow" strokeWidth={1.8} />
                                Suggested Circles
                            </h2>
                            <Button variant="ghost" size="sm" className="text-apple-blue text-subhead font-medium">
                                View All
                            </Button>
                        </div>
                        <Card className="border-dashed">
                            <ZeroState
                                title="No suggestions yet"
                                message="Join circles to start receiving personalised recommendations."
                            />
                        </Card>
                    </section>

                    {/* Transaction History (Locked) */}
                    <Card className="relative overflow-hidden">
                        <CardHeader className="mb-3">
                            <CardTitle>Transaction History</CardTitle>
                            <CardDescription>Your recent circle transactions</CardDescription>
                        </CardHeader>
                        <div className="h-40 relative border-t border-black/[0.05] dark:border-white/[0.06] -mx-5 px-5 pt-4">
                            {isTxHistoryLocked ? (
                                <div className="absolute inset-0 z-10 backdrop-blur-[10px] bg-white/60 dark:bg-black/50
                                                flex flex-col items-center justify-center p-6 text-center rounded-b-apple-lg">
                                    <div className="w-11 h-11 rounded-apple bg-apple-blue/10 flex items-center justify-center mb-3">
                                        <Lock className="w-5 h-5 text-apple-blue" strokeWidth={1.8} />
                                    </div>
                                    <h3 className="text-headline font-semibold text-black/85 dark:text-white/85 mb-1">
                                        Transaction History Locked
                                    </h3>
                                    <p className="text-footnote text-black/45 dark:text-white/45 max-w-xs mb-4">
                                        Set a password in Settings to unlock your financial history.
                                    </p>
                                    <Button size="sm" onClick={() => alert("Go to Settings to set password")}>
                                        Unlock Now
                                    </Button>
                                </div>
                            ) : (
                                <ZeroState title="No transactions" message="Your transaction history will appear here." />
                            )}
                        </div>
                    </Card>
                </div>

                {/* Right column */}
                <div className="space-y-6">

                    {/* Trust Score */}
                    <Card>
                        <CardHeader className="mb-2">
                            <CardTitle className="flex items-center gap-1.5">
                                <ShieldCheck className="w-[17px] h-[17px] text-apple-blue" strokeWidth={1.8} />
                                Trust Score
                            </CardTitle>
                        </CardHeader>
                        <div className="flex flex-col items-center py-3">
                            <ProgressCircle
                                value={0}
                                label="0"
                                sublabel="Score"
                                size={148}
                                strokeWidth={10}
                            />
                            <div className="mt-6 flex gap-3 w-full">
                                <StatBadge label="Streak" value="0 Days" />
                                <StatBadge label="Status" value="Seed" color="text-apple-blue" />
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                            <button className="w-full flex items-center justify-between text-subhead font-medium text-black/60 dark:text-white/60 hover:text-apple-blue transition-colors">
                                <span>View score breakdown</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </Card>

                    {/* Notifications */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between mb-0 pb-3 border-b border-black/[0.05] dark:border-white/[0.06]">
                            <CardTitle className="text-headline">Notifications</CardTitle>
                            <span className="w-2 h-2 rounded-full bg-apple-blue animate-pulse-blue" />
                        </CardHeader>
                        <div className="max-h-[260px] overflow-y-auto">
                            <ZeroState
                                title="All caught up"
                                message="We'll notify you about circle updates and member activity."
                                className="py-10"
                            />
                        </div>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                        <CardHeader className="mb-3">
                            <CardTitle className="flex items-center gap-1.5">
                                <TrendingUp className="w-[17px] h-[17px] text-apple-green" strokeWidth={1.8} />
                                Quick Stats
                            </CardTitle>
                        </CardHeader>
                        <div className="space-y-0">
                            {[
                                { label: "Circles Joined",   value: "0" },
                                { label: "Members in Circles", value: "0" },
                                { label: "Trust Events",      value: "0" },
                            ].map((row, i, arr) => (
                                <div
                                    key={i}
                                    className={`flex items-center justify-between py-2.5
                                        ${i < arr.length - 1 ? "border-b border-black/[0.05] dark:border-white/[0.05]" : ""}`}
                                >
                                    <span className="text-subhead text-black/55 dark:text-white/55">{row.label}</span>
                                    <span className="text-subhead font-semibold text-black/85 dark:text-white/85">{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
