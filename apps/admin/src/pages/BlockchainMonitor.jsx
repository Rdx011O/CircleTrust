// Module 6 — Blockchain Monitor View
import { Link2, Activity, Wifi } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'

export default function BlockchainMonitor() {
    return (
        <div>
            <PageHeader
                title="Blockchain Monitor"
                subtitle="Smart contract event feed, transaction status, and network health"
                breadcrumb="Blockchain"
                actions={
                    <div className="flex gap-2">
                        <span className="badge badge-gray"><span className="badge-dot" /> Disconnected</span>
                    </div>
                }
            />

            {/* Network Status Strip */}
            <div className="glass-card mb-6" style={{ border: '1px solid rgba(6,182,212,0.2)' }}>
                <div className="card-body">
                    <div className="flex gap-4 items-center" style={{ flexWrap: 'wrap' }}>
                        <div className="stat-card-icon cyan"><Wifi size={18} strokeWidth={1.8} /></div>
                        <div>
                            <div style={{ fontWeight: 600, marginBottom: 2 }}>Network Connectivity</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                Waiting for blockchain connection. Network status will appear once the node RPC endpoint is configured.
                            </div>
                        </div>
                        <div className="flex gap-3 items-center" style={{ marginLeft: 'auto' }}>
                            {['Block Height', 'Avg Gas', 'Validator Count', 'Latency'].map(m => (
                                <div key={m} style={{ textAlign: 'center', padding: '0 12px' }}>
                                    <div className="skeleton skeleton-h-lg" style={{ width: 64, marginBottom: 4 }} />
                                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{m}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-2-1">
                {/* Smart Contract Event Feed */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title">⛓️ Smart Contract Event Feed</span>
                            <span className="badge badge-gray">Listening…</span>
                        </div>
                        <div className="card-body">
                            <div className="awaiting-block">
                                <div className="connecting-icon">📡</div>
                                <p>Listening for smart contract events…</p>
                                <span style={{ fontSize: '0.72rem' }}>
                                    Events from CircleTrust contracts (CircleFactory, TrustToken, DisputeArbitrator) will stream here.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Activity size={14} /> Transaction Status List</span>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="flex gap-3 items-center" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                                        <div className="skeleton skeleton-circle" style={{ width: 28, height: 28, minWidth: 28 }} />
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                                            <div className="skeleton skeleton-h skeleton-3q" />
                                            <div className="skeleton skeleton-h skeleton-half" />
                                        </div>
                                        <div className="skeleton skeleton-h skeleton-qtr" style={{ borderRadius: 99 }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right panels */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title">🔒 Contract Addresses</span>
                        </div>
                        <div className="card-body">
                            {['CircleFactory', 'TrustToken', 'DisputeArbitrator', 'PayoutController'].map(name => (
                                <div key={name} style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 4 }}>{name}</div>
                                    <div className="skeleton skeleton-h skeleton-full" style={{ borderRadius: 4 }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Link2 size={14} /> Bridge Status</span>
                        </div>
                        <div className="card-body">
                            <EmptyState
                                title="No bridge data"
                                description="Cross-chain bridge status will display here once configured."
                                icon={Link2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
