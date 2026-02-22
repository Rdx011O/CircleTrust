// Module 4 — Dispute Resolution Center
import { useState } from 'react'
import { Scale, Eye, FileText, Gavel, X, CheckCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DataTable from '../components/DataTable'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'

const disputeColumns = [
    { key: 'disputeId', label: 'ID', width: 100 },
    { key: 'type', label: 'Dispute Type' },
    { key: 'parties', label: 'Parties' },
    { key: 'circleId', label: 'Circle' },
    { key: 'filed', label: 'Filed On' },
    { key: 'status', label: 'Status', sortable: false, render: (v) => <StatusBadge status={v} /> },
    {
        key: 'actions', label: 'Actions', sortable: false, render: (_, row) => (
            <div className="flex gap-2">
                <button className="btn btn-outline btn-sm btn-icon" title="View"><Eye size={13} /></button>
            </div>
        )
    },
]

export default function DisputeCenter() {
    const [activeTab, setActiveTab] = useState('open')

    return (
        <div>
            <PageHeader
                title="Dispute Resolution Center"
                subtitle="Review evidence, inspect blockchain logs, and adjudicate disputes with full audit trail"
                breadcrumb="Disputes"
            />

            {/* Stat strip */}
            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginBottom: 24 }}>
                {['Open Disputes', 'Pending Arbitration', 'Resolved (30d)', 'Auto-Resolved'].map(label => (
                    <div key={label} className="skel-stat-card" style={{ gap: 6, padding: 16 }}>
                        <div className="skeleton skeleton-h skeleton-half" />
                        <div className="skeleton skeleton-h-lg skeleton-3q" />
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
                    </div>
                ))}
            </div>

            <div className="grid-2-1" style={{ gap: 20 }}>
                {/* Left — Dispute List */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="tab-bar">
                        {['open', 'pending', 'arbitration', 'closed'].map(t => (
                            <button key={t} className={`tab-btn${activeTab === t ? ' active' : ''}`} onClick={() => setActiveTab(t)}>
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Scale size={15} /> Active Disputes</span>
                            <span className="badge badge-gray">Awaiting data</span>
                        </div>
                        <DataTable
                            columns={disputeColumns}
                            data={[]}
                            loading={true}
                            emptyTitle="No disputes found"
                            emptyDesc="Dispute queue is empty or awaiting API connection."
                        />
                    </div>
                </div>

                {/* Right — Detail Panel */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><FileText size={14} /> Evidence Viewer</span>
                        </div>
                        <div className="card-body">
                            <EmptyState
                                title="Select a dispute"
                                description="Choose a dispute from the list to view submitted evidence, documents, and payment proofs."
                                icon={FileText}
                            />
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title">⛓️ Blockchain Log Viewer</span>
                            <span className="badge badge-gray">Immutable</span>
                        </div>
                        <div className="card-body">
                            <div className="awaiting-block">
                                <div className="connecting-icon">🔗</div>
                                <p>Listening for smart contract events…</p>
                                <span style={{ fontSize: '0.72rem' }}>Blockchain log will populate once a dispute is selected and the on-chain data stream connects.</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Gavel size={14} /> Decision Panel</span>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                    Admin actions — select a dispute to enable controls
                                </p>
                                <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                                    <button className="btn btn-success btn-sm" disabled><CheckCircle size={13} /> Validate</button>
                                    <button className="btn btn-danger btn-sm" disabled><X size={13} /> Penalize</button>
                                    <button className="btn btn-outline btn-sm" disabled><Gavel size={13} /> Arbitrate</button>
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                    All decisions are recorded on-chain as immutable audit entries.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
