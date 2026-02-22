// Module 3 — Circle (Group) Monitor Panel
import { useState } from 'react'
import { Circle, Activity, Snowflake, Users, CreditCard } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'
import DataTable from '../components/DataTable'

const circleColumns = [
    { key: 'circleId', label: 'Circle ID', width: 110 },
    { key: 'name', label: 'Circle Name' },
    { key: 'members', label: 'Members', width: 90 },
    { key: 'health', label: 'Health', sortable: false, render: (v) => <StatusBadge status={v} /> },
    {
        key: 'avgTrust', label: 'Avg Trust', render: (v) => v !== undefined
            ? <span style={{ fontWeight: 600, color: v > 70 ? 'var(--accent-green)' : 'var(--accent-amber)' }}>{v}</span>
            : '—'
    },
    { key: 'compliance', label: 'Compliance %' },
    {
        key: 'defaultProb', label: 'Default Risk', render: (v) => v !== undefined
            ? <span className={`badge ${v < 20 ? 'badge-green' : v < 50 ? 'badge-amber' : 'badge-red'}`}>{v}%</span>
            : '—'
    },
    { key: 'nextPayout', label: 'Next Payout' },
    { key: 'status', label: 'Status', sortable: false, render: (v) => <StatusBadge status={v} /> },
]

export default function CircleMonitor() {
    const [activeTab, setActiveTab] = useState('all')

    return (
        <div>
            <PageHeader
                title="Circle Monitor"
                subtitle="Health monitoring for all active lending circles on the platform"
                breadcrumb="Circles"
                actions={
                    <div className="flex gap-2">
                        <button className="btn btn-danger btn-sm"><Snowflake size={14} /> Emergency Freeze</button>
                    </div>
                }
            />

            {/* Summary stats */}
            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginBottom: 24 }}>
                {['Active Circles', 'Frozen Circles', 'Avg Compliance Rate', 'High Default Risk'].map(label => (
                    <div key={label} className="skel-stat-card" style={{ gap: 6, padding: 16 }}>
                        <div className="skeleton skeleton-h skeleton-half" />
                        <div className="skeleton skeleton-h-lg skeleton-3q" />
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="tab-bar">
                {['all', 'active', 'frozen', 'high-risk'].map(t => (
                    <button key={t} className={`tab-btn${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
                        {t.charAt(0).toUpperCase() + t.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </div>

            {/* Circle Table */}
            <div className="glass-card mb-6">
                <div className="card-header">
                    <span className="card-title"><Circle size={15} /> Circle Registry</span>
                    <span className="badge badge-gray">Awaiting API connection</span>
                </div>
                <DataTable
                    columns={circleColumns}
                    data={[]}
                    loading={true}
                    emptyTitle="No circles loaded"
                    emptyDesc="Circle data will populate once the platform API is connected."
                />
            </div>

            {/* Payout Schedule Monitor */}
            <div className="grid-2">
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><CreditCard size={14} /> Payout Schedule Monitor</span>
                    </div>
                    <div className="card-body">
                        <EmptyState
                            title="No scheduled payouts"
                            description="Upcoming payout schedule will appear here from the circle payment API."
                            icon={CreditCard}
                        />
                    </div>
                </div>
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><Activity size={14} /> Payment Rotation Timeline</span>
                    </div>
                    <div className="card-body">
                        <EmptyState
                            title="No rotation data"
                            description="Circle rotation timeline will load once connected to the blockchain ledger."
                            icon={Activity}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
