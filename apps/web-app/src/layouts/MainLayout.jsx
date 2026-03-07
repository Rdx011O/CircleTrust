import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Compass, MessageSquare, User } from "lucide-react";
import { cn } from "../utils/cn";

const navigation = [
    { name: "Dashboard", href: "/",         icon: LayoutDashboard },
    { name: "Discover",  href: "/discover", icon: Compass },
    { name: "Chat",      href: "/chat",     icon: MessageSquare },
    { name: "Profile",   href: "/profile",  icon: User },
];

const MainLayout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col md:flex-row"
             style={{ background: "rgb(var(--bg-secondary))" }}>

            {/* ── Desktop Sidebar ── */}
            <aside
                className={cn(
                    "hidden md:flex flex-col w-64 fixed h-full z-30",
                    "glass border-r border-black/[0.06] dark:border-white/[0.07]",
                    "px-4 py-6"
                )}
            >
                {/* Wordmark */}
                <div className="flex items-center gap-3 mb-8 px-2">
                    <div className={cn(
                        "w-9 h-9 rounded-apple-sm flex items-center justify-center",
                        "bg-apple-blue shadow-[0_2px_8px_rgba(0,122,255,0.45)]",
                        "text-white font-bold text-base select-none"
                    )}>
                        CT
                    </div>
                    <span className="text-title3 font-bold text-black/90 dark:text-white/90 tracking-tight">
                        CircleTrust
                    </span>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 space-y-0.5">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-apple",
                                    "transition-all duration-150 ease-apple group",
                                    isActive
                                        ? "bg-apple-blue text-white shadow-[0_2px_8px_rgba(0,122,255,0.30)]"
                                        : "text-black/50 dark:text-white/50 hover:bg-black/[0.05] dark:hover:bg-white/[0.07] hover:text-black/90 dark:hover:text-white/90"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "w-[18px] h-[18px] flex-shrink-0 transition-transform duration-150",
                                        isActive
                                            ? "stroke-white"
                                            : "group-hover:scale-110"
                                    )}
                                    strokeWidth={isActive ? 2.2 : 1.7}
                                />
                                <span className={cn(
                                    "text-subhead font-medium tracking-tight",
                                    isActive ? "font-semibold" : ""
                                )}>
                                    {item.name}
                                </span>
                                {isActive && (
                                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.07]">
                    <p className="text-caption2 text-black/30 dark:text-white/30 px-2 font-medium uppercase tracking-widest">
                        v1.0 Beta
                    </p>
                </div>
            </aside>

            {/* ── Main Content ── */}
            <main className="flex-1 md:ml-64 px-4 py-6 md:px-8 pb-28 md:pb-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>

            {/* ── Mobile Bottom Tab Bar ── */}
            <nav className={cn(
                "md:hidden fixed bottom-4 left-4 right-4 z-50",
                "glass rounded-apple-xl shadow-apple-float",
                "border border-black/[0.07] dark:border-white/[0.10]",
                "flex items-center justify-around px-2 py-2"
            )}>
                {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-0.5",
                                "px-4 py-1.5 rounded-apple transition-all duration-150 ease-apple",
                                isActive
                                    ? "text-apple-blue"
                                    : "text-black/35 dark:text-white/35 hover:text-black/60 dark:hover:text-white/60"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-6 h-6 transition-transform duration-150",
                                    isActive && "scale-110"
                                )}
                                strokeWidth={isActive ? 2.2 : 1.7}
                            />
                            <span className={cn(
                                "text-caption2 font-medium tracking-tight",
                                isActive ? "font-semibold" : ""
                            )}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default MainLayout;
