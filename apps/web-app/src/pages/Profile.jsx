import React, { useState } from "react";
import {
    User as UserIcon,
    Settings as SettingsIcon,
    TrendingUp,
    DollarSign,
    ArrowDownLeft,
    ArrowUpRight,
    Shield,
    Bell,
    Moon,
    LogOut,
    History,
    ChevronRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

/* ── Reusable sub-components ── */

const FinancialStat = ({ label, value, icon: Icon, iconColor }) => (
    <Card className="flex-1">
        <div className="flex items-center gap-2 mb-2">
            {Icon && <Icon className={`w-4 h-4 ${iconColor}`} strokeWidth={1.7} />}
            <p className="text-caption1 text-black/45 dark:text-white/45">{label}</p>
        </div>
        <p className="text-title2 font-bold text-black/85 dark:text-white/85 tracking-tight">{value}</p>
    </Card>
);

const SettingsRow = ({ icon: Icon, label, sub, destructive = false }) => (
    <button className={`
        w-full flex items-center justify-between px-3 py-3 rounded-apple
        transition-all duration-150
        ${destructive
            ? "text-apple-red hover:bg-apple-red/6"
            : "text-black/80 dark:text-white/80 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]"
        }
        group
    `}>
        <div className="flex items-center gap-3">
            <div className={`
                w-[30px] h-[30px] rounded-apple-sm flex items-center justify-center flex-shrink-0
                ${destructive
                    ? "bg-apple-red/10"
                    : "bg-black/[0.06] dark:bg-white/[0.09] group-hover:bg-apple-blue/10 group-hover:text-apple-blue"
                }
            `}>
                <Icon className="w-4 h-4" strokeWidth={1.7} />
            </div>
            <div className="text-left">
                <p className="text-subhead font-medium">{label}</p>
                {sub && <p className="text-caption2 text-black/35 dark:text-white/35">{sub}</p>}
            </div>
        </div>
        <ChevronRight className="w-4 h-4 text-black/25 dark:text-white/25 group-hover:text-black/50 dark:group-hover:text-white/50 transition-colors" />
    </button>
);

const ToggleRow = ({ label, defaultOn = true }) => {
    const [on, setOn] = useState(defaultOn);
    return (
        <div className="flex items-center justify-between px-3 py-2.5">
            <span className="text-subhead font-medium text-black/80 dark:text-white/80">{label}</span>
            <button
                onClick={() => setOn(!on)}
                className={`apple-toggle ${on ? "on" : ""}`}
                aria-label={label}
            />
        </div>
    );
};

/* ── Main Profile Component ── */
const Profile = () => {
    const user = null;
    const profile = null;

    const getInitials = (name) => {
        if (!name) return "U";
        return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    };

    const avatarGradients = [
        'from-blue-400 to-blue-600',
        'from-purple-400 to-pink-600',
        'from-emerald-400 to-teal-600',
        'from-orange-400 to-red-500',
        'from-cyan-400 to-blue-500'
    ];
    const getGradient = (name) => {
        if (!name) return avatarGradients[0];
        return avatarGradients[name.length % avatarGradients.length];
    };

    const capabilities = [
        { title: "Trust Circles",    desc: "Create and join community-based lending circles.", icon: "🤝" },
        { title: "P2P Lending",      desc: "Lend funds securely within your trusted network.", icon: "💸" },
        { title: "Smart Borrowing",  desc: "Access instant liquidity based on your trust score.", icon: "🚀" },
        { title: "Trust Analytics",  desc: "Monitor and grow your financial reputation.", icon: "📈" },
    ];

    return (
        <div className="space-y-7 pb-12 animate-fade-in">

            {/* ── Profile Header ── */}
            <header className="pt-2 flex flex-col md:flex-row items-center md:items-start gap-5
                               glass rounded-apple-xl shadow-apple border border-black/[0.06] dark:border-white/[0.08] p-6">
                {/* Avatar */}
                <div className={`
                    w-24 h-24 md:w-20 md:h-20 flex-shrink-0 rounded-apple-xl
                    bg-gradient-to-br ${getGradient(profile?.full_name)}
                    flex items-center justify-center
                    text-white text-3xl font-bold
                    shadow-apple-elevated ring-4 ring-white dark:ring-black/30
                    animate-scale-in
                `}>
                    {getInitials(profile?.full_name || user?.email)}
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-title1 font-bold text-black/90 dark:text-white/90 tracking-tight">
                        {profile?.full_name || "New Explorer"}
                    </h1>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-2">
                        <span className="flex items-center gap-1.5 text-caption1 text-black/45 dark:text-white/45 bg-black/[0.05] dark:bg-white/[0.08] px-2.5 py-1 rounded-apple-sm font-medium">
                            <UserIcon className="w-3.5 h-3.5" strokeWidth={1.7} />
                            {user?.email || "user@circletrust.app"}
                        </span>
                        <span className="flex items-center gap-1 text-caption1 text-apple-blue bg-apple-blue/10 px-2.5 py-1 rounded-apple-sm font-semibold">
                            <Shield className="w-3.5 h-3.5" strokeWidth={2} />
                            Verified
                        </span>
                    </div>
                </div>

                {/* Account ID */}
                <div className="hidden md:flex flex-col items-end gap-1">
                    <span className="text-caption2 text-black/30 dark:text-white/30 uppercase tracking-widest font-medium">Account ID</span>
                    <code className="text-caption2 bg-black/[0.05] dark:bg-white/[0.07] px-2 py-1 rounded font-mono text-black/50 dark:text-white/50">
                        {user?.id?.substring(0, 16) || "—"}
                    </code>
                </div>
            </header>

            {/* ── Main Grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

                {/* Left — Stats & Capabilities */}
                <div className="lg:col-span-2 space-y-7">

                    {/* Financial Overview */}
                    <section className="space-y-3">
                        <h2 className="text-title3 font-semibold text-black/85 dark:text-white/85 flex items-center gap-2 px-1">
                            <DollarSign className="w-[18px] h-[18px] text-apple-green" strokeWidth={1.8} />
                            Financial Overview
                        </h2>
                        <div className="flex gap-4">
                            <FinancialStat label="Total Flow"  value="$0.00" />
                            <FinancialStat label="Incoming"    value="$0.00" icon={ArrowDownLeft}  iconColor="text-apple-green" />
                            <FinancialStat label="Outgoing"    value="$0.00" icon={ArrowUpRight}   iconColor="text-apple-red"   />
                        </div>
                    </section>

                    {/* Trust Analytics */}
                    <section className="space-y-3">
                        <h2 className="text-title3 font-semibold text-black/85 dark:text-white/85 flex items-center gap-2 px-1">
                            <TrendingUp className="w-[18px] h-[18px] text-apple-blue" strokeWidth={1.8} />
                            Trust Analytics
                        </h2>
                        <Card className="h-56 flex items-center justify-center">
                            <div className="text-center">
                                <TrendingUp className="w-10 h-10 text-black/15 dark:text-white/15 mx-auto mb-3" strokeWidth={1.2} />
                                <p className="text-subhead text-black/35 dark:text-white/35">
                                    Trust history will appear once you join circles.
                                </p>
                            </div>
                        </Card>
                    </section>

                    {/* Platform Capabilities */}
                    <section className="space-y-3">
                        <h2 className="text-title3 font-semibold text-black/85 dark:text-white/85 flex items-center gap-2 px-1">
                            <Shield className="w-[18px] h-[18px] text-apple-blue" strokeWidth={1.8} />
                            Platform Capabilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {capabilities.map((cap, i) => (
                                <Card
                                    key={i}
                                    className="group hover:border-apple-blue/20 hover:shadow-apple-md cursor-default"
                                >
                                    <div className="flex gap-3.5 items-start">
                                        <span className="text-2xl flex-shrink-0 mt-0.5">{cap.icon}</span>
                                        <div>
                                            <h3 className="text-headline font-semibold text-black/85 dark:text-white/85 group-hover:text-apple-blue transition-colors tracking-tight">
                                                {cap.title}
                                            </h3>
                                            <p className="text-footnote text-black/40 dark:text-white/40 mt-0.5 leading-relaxed">
                                                {cap.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right — Settings */}
                <div className="space-y-5">
                    <Card className="p-2">
                        <div className="px-3 pb-2 pt-1">
                            <h3 className="text-caption1 font-semibold text-black/35 dark:text-white/35 uppercase tracking-widest">
                                Settings
                            </h3>
                        </div>
                        <div className="space-y-0.5">
                            <SettingsRow icon={Moon}    label="Appearance"     sub="Light" />
                            <SettingsRow icon={Bell}    label="Notifications"  sub="Enabled" />
                            <SettingsRow icon={History} label="History Cost"   sub="$0.00" />
                        </div>

                        {/* Privacy Section */}
                        <div className="mt-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                            <div className="px-3 pb-2">
                                <h3 className="text-caption1 font-semibold text-black/35 dark:text-white/35 uppercase tracking-widest">
                                    Privacy
                                </h3>
                            </div>
                            <div className="space-y-0">
                                {["Public Profile", "Show Trust Score", "Transaction Visibility"].map((opt, i) => (
                                    <ToggleRow key={i} label={opt} defaultOn={true} />
                                ))}
                            </div>
                        </div>

                        {/* Logout */}
                        <div className="mt-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] space-y-0.5">
                            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-apple text-apple-red hover:bg-apple-red/6 transition-colors group">
                                <div className="w-[30px] h-[30px] rounded-apple-sm bg-apple-red/10 flex items-center justify-center flex-shrink-0">
                                    <LogOut className="w-4 h-4" strokeWidth={1.7} />
                                </div>
                                <span className="text-subhead font-medium">Sign Out</span>
                            </button>
                        </div>
                    </Card>

                    {/* App Info */}
                    <div className="px-2 text-center space-y-1">
                        <p className="text-caption2 text-black/25 dark:text-white/25 font-medium">CircleTrust</p>
                        <p className="text-caption2 text-black/20 dark:text-white/20">Version 1.0.0 Beta</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
