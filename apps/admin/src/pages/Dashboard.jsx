// Module 1 — Platform Overview Dashboard
import { Users, Circle, ShieldCheck, AlertTriangle, Link2, Activity } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import ChartContainer from '../components/ChartContainer'
import AlertFeed from '../components/AlertFeed'

export default function Dashboard() {
    // All metrics intentionally show skeleton — awaiting real API connection
    const statsLoading = true

    return (
        <div>
            <PageHeader
                title="Platform Overview"
                subtitle="Real-time health monitoring for CircleTrust infrastructure"
                breadcrumb="Dashboard"
                actions={
                    <div className="flex gap-2">
                        <span className="badge badge-green"><span className="badge-dot" /> All Systems Operational</span>
                    </div>
                }
            />

            {/* System Status Cards */}
            <div className="stat-grid">
                <StatCard label="Registered Users" icon={Users} color="blue" loading={statsLoading} />
                <StatCard label="Active Lending Circles" icon={Circle} color="violet" loading={statsLoading} />
                <StatCard label="Total Funds Locked" icon={Activity} color="green" loading={statsLoading} />
                <StatCard label="Monthly Tx Volume" icon={Activity} color="cyan" loading={statsLoading} />
                <StatCard label="Default Rate" icon={AlertTriangle} color="amber" loading={statsLoading} />
                <StatCard label="Trust Health Score" icon={ShieldCheck} color="green" loading={statsLoading} />
            </div>

            {/* Blockchain + Risk Status Strip */}
            <div className="flex gap-3 mb-6" style={{ flexWrap: 'wrap' }}>
                <div className="glass-card" style={{ flex: 1, minWidth: 240 }}>
                    <div className="card-body flex items-center gap-3">
                        <div className="stat-card-icon blue"><Link2 size={17} strokeWidth={1.8} /></div>
                        <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Blockchain Status</div>
                            <div className="awaiting-block" style={{ padding: '4px 0', gap: 4 }}>
                                <p style={{ fontSize: '0.75rem' }}>Waiting for blockchain connection...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="glass-card" style={{ flex: 1, minWidth: 240 }}>
                    <div className="card-body flex items-center gap-3">
                        <div className="stat-card-icon red"><AlertTriangle size={17} strokeWidth={1.8} /></div>
                        <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Risk Monitor</div>
                            <div className="awaiting-block" style={{ padding: '4px 0', gap: 4 }}>
                                <p style={{ fontSize: '0.75rem' }}>Awaiting risk engine feed...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts + Alert Feed */}
            <div className="grid-2-1" style={{ marginBottom: 28 }}>
                <ChartContainer title="Transaction Volume (Real-time)" height={280} loading={true} connected={false} />
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><AlertTriangle size={15} /> Suspicious Activity Feed</span>
                        <span className="badge badge-gray">Awaiting stream</span>
                    </div>
                    <AlertFeed alerts={[]} loading={true} />
                </div>
            </div>

            <div className="grid-3">
                <ChartContainer title="User Growth" height={220} loading={true} connected={false} />
                <ChartContainer title="Default Rate Trend" height={220} loading={true} connected={false} />
                <ChartContainer title="Trust Score Distribution" height={220} loading={true} connected={false} />
            </div>
        </div>
    )
}
