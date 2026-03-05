import React from "react";
import {
    Users,
    Sparkles,
    Bell,
    Lock,
    ShieldCheck
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/Card";
import { ZeroState } from "../components/ui/ZeroState";
import { Button } from "../components/ui/Button";
import { ProgressCircle } from "../components/ui/ProgressCircle";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
    const isTxHistoryLocked = true;
    const { profile } = useAuth();

    return (
        <div className="space-y-6">
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        {profile?.full_name ? `Welcome back, ${profile.full_name.split(' ')[0]}` : "Dashboard"}
                    </h1>
                    <p className="text-gray-400">Welcome back to your control center.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="relative">
                        <Bell className="w-5 h-5" />
                        {/* Notification Dot could go here */}
                    </Button>
                </div>
            </header>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Circle Overview Card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle>Circle Overview</CardTitle>
                                <CardDescription>Total circles you are connected with</CardDescription>
                            </div>
                            <div className="text-3xl font-bold">0</div>
                        </CardHeader>
                        <CardContent>
                            <ZeroState
                                icon={Users}
                                title="No Circles Yet"
                                message="You are not connected to any circles yet."
                                action={<Button variant="primary">Explore Circles</Button>}
                            />
                        </CardContent>
                    </Card>

                    {/* Suggested Circles Section */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                Suggested Circles
                            </h2>
                            <Button variant="ghost" className="text-xs">View All</Button>
                        </div>
                        <Card className="bg-transparent border-dashed border-2">
                            <ZeroState
                                title="No suggestions yet"
                                message="Join circles to get recommendations."
                            />
                        </Card>
                    </section>

                    {/* Transaction History Card (Locked) */}
                    <Card className="relative overflow-hidden group">
                        <CardHeader>
                            <CardTitle>Transaction History</CardTitle>
                            <CardDescription>View your recent circle transactions</CardDescription>
                        </CardHeader>
                        <CardContent className="h-48 flex items-center justify-center">
                            {isTxHistoryLocked ? (
                                <div className="absolute inset-0 z-10 bg-background/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center mb-4">
                                        <Lock className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Transaction History Locked</h3>
                                    <p className="text-sm text-gray-400 max-w-xs mb-6">
                                        Set a password in Settings to unlock your financial history.
                                    </p>
                                    <Button onClick={() => alert("Go to Settings to set password")}>
                                        Unlock Transaction History
                                    </Button>
                                </div>
                            ) : (
                                <ZeroState title="No transactions" message="Your transaction history will appear here." />
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Trust Score Section */}
                    <Card className="bg-gradient-to-br from-primary/10 to-transparent">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                Trust Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center py-4">
                            <ProgressCircle
                                value={0}
                                label="0"
                                sublabel="Score"
                                size={160}
                                strokeWidth={12}
                            />
                            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                                <div className="bg-accent/30 rounded-xl p-4 text-center">
                                    <p className="text-xs text-gray-400 uppercase">Streak</p>
                                    <p className="text-xl font-bold">0 Days</p>
                                </div>
                                <div className="bg-accent/30 rounded-xl p-4 text-center">
                                    <p className="text-xs text-gray-400 uppercase">Status</p>
                                    <p className="text-lg font-semibold text-primary">Seed</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notifications Panel */}
                    <Card>
                        <CardHeader className="border-b border-accent/30 pb-4">
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-md">Notifications</CardTitle>
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="max-h-[300px] overflow-y-auto">
                                <ZeroState
                                    title="No notifications yet"
                                    message="We'll notify you about circle updates and member activity."
                                    className="py-12"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
