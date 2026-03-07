import React from "react";
import {
    Users, MessageSquare, Circle, Search
} from "lucide-react";
import { Tabs } from "../components/ui/Tabs";
import { ZeroState } from "../components/ui/ZeroState";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";

const Chat = () => {
    const chatTabs = [
        {
            id: "groups",
            label: "Groups",
            content: (
                <ZeroState
                    icon={Users}
                    title="No groups yet"
                    message="Join a circle to start group conversations with other members."
                />
            ),
        },
        {
            id: "personal",
            label: "Personal",
            content: (
                <ZeroState
                    icon={Circle}
                    title="No conversations"
                    message="Direct messages with people you know will appear here."
                />
            ),
        },
    ];

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <header className="pt-2 mb-6">
                <h1 className="text-largetitle font-bold text-black/90 dark:text-white/90 tracking-tight">
                    Chat
                </h1>
                <p className="text-callout text-black/45 dark:text-white/45 mt-0.5">
                    Secure circle communications.
                </p>
            </header>

            <div className="flex gap-5 h-[calc(100vh-220px)] min-h-[420px]">

                {/* ── Sidebar List ── */}
                <div className="w-full md:w-72 flex-shrink-0 flex flex-col gap-4">

                    {/* Search in chat */}
                    <div className="relative">
                        <Search
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 dark:text-white/30"
                            strokeWidth={1.7}
                        />
                        <Input
                            className="pl-10 h-10 text-subhead !rounded-apple-md"
                            placeholder="Search messages…"
                        />
                    </div>

                    {/* Tabs */}
                    <Card className="flex-1 p-0 overflow-hidden flex flex-col">
                        <div className="px-4 pt-4">
                            <Tabs tabs={chatTabs} defaultValue="groups" />
                        </div>
                    </Card>
                </div>

                {/* ── Chat Canvas (Desktop) ── */}
                <div className="hidden md:flex flex-1">
                    <Card className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-black/[0.07] dark:border-white/[0.08] bg-black/[0.015] dark:bg-white/[0.015] shadow-none backdrop-blur-none">
                        <div className="text-center p-8">
                            <div className="w-20 h-20 bg-black/[0.05] dark:bg-white/[0.08] rounded-apple-xl flex items-center justify-center mx-auto mb-5">
                                <MessageSquare
                                    className="w-9 h-9 text-black/25 dark:text-white/25"
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h2 className="text-title3 font-semibold text-black/70 dark:text-white/70 mb-2 tracking-tight">
                                Your Conversations
                            </h2>
                            <p className="text-callout text-black/35 dark:text-white/35 max-w-xs mx-auto leading-relaxed">
                                Select a group or person from the list to start chatting.
                            </p>
                        </div>

                        {/* Mock composer bar */}
                        <div className="w-full px-6 pb-6 max-w-lg">
                            <div className="flex items-center gap-3 bg-black/[0.04] dark:bg-white/[0.06] rounded-apple-xl px-4 py-3">
                                <span className="flex-1 text-subhead text-black/25 dark:text-white/25 select-none">
                                    Message…
                                </span>
                                <div className="w-8 h-8 rounded-full bg-apple-blue/15 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-apple-blue" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Chat;
