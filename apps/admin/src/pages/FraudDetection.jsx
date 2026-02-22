// Module 7 — Fraud & Risk Detection Center
import { AlertTriangle, Brain, TrendingUp, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import AlertFeed from '../components/AlertFeed'
import EmptyState from '../components/EmptyState'
import ChartContainer from '../components/ChartContainer'

const riskCategories = [
    { label: 'Multiple Account Detection', icon: '👥', desc: 'Users operating multiple profiles on the same device or IP' },
    { label: 'Suspicious Payment Patterns', icon: '💸', desc: 'Irregular payment timing and amount anomalies' },
    { label: 'Collusion Behavior', icon: '🤝', desc: 'Coordinated group activity to inflate trust scores' },
    { label: 'Rapid Default Risk', icon: '⚡', desc: 'Users trending toward imminent payment default' },
    { label: 'Abnormal Activity Spikes', icon: '📈', desc: 'Sudden unusual increases in circle creation or transactions' },
]

export default function FraudDetection() {
    return (
        <div>
            <PageHeader
                title="Fraud & Risk Detection Center"
                subtitle="AI-assisted fraud monitoring, risk scoring, and suspicious behavior analysis"
                breadcrumb="Fraud & Risk"
                actions={
                    <div className="flex gap-2">
                        <span className="badge badge-amber"><span className="badge-dot" /> AI Engine: Awaiting Connection</span>
                    </div>
                }
            />

            {/* Risk Score Summary */}
            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginBottom: 24 }}>
                {['Active Alerts', 'High-Risk Users', 'Flagged Circles', 'Resolved (7d)'].map(label => (
                    <div key={label} className="skel-stat-card" style={{ gap: 6, padding: 16 }}>
                        <div className="skeleton skeleton-h skeleton-half" />
                        <div className="skeleton skeleton-h-lg skeleton-3q" />
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
                    </div>
                ))}
            </div>

            <div className="grid-2-1" style={{ marginBottom: 20 }}>
                {/* Left: Risk Alert Feed + AI Widget */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><AlertTriangle size={15} /> Live Risk Alert Feed</span>
                            <span className="badge badge-gray">Awaiting stream</span>
                        </div>
                        <AlertFeed alerts={[]} loading={true} />
                    </div>

                    <div className="glass-card" style={{ border: '1px solid rgba(124,58,237,0.2)' }}>
                        <div className="card-header">
                            <span className="card-title"><Brain size={15} /> AI Risk Scoring Engine</span>
                            <span className="badge badge-violet">AI-Ready</span>
                        </div>
                        <div className="card-body">
                            <div className="awaiting-block">
                                <div className="connecting-icon">🤖</div>
                                <p>AI analytics engine is not yet connected.</p>
                                <span style={{ fontSize: '0.72rem' }}>
                                    Once the ML model endpoint is configured, real-time risk scores will stream here automatically.
                                    The system supports custom model weights and explainability outputs.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Suspicious Behavior Panel */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title">🔍 Detection Categories</span>
                        </div>
                        <div className="card-body" style={{ padding: '12px 16px' }}>
                            {riskCategories.map(cat => (
                                <div key={cat.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: 2 }}>{cat.icon}</span>
                                    <div>
                                        <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 2 }}>{cat.label}</div>
                                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{cat.desc}</div>
                                        <div className="skeleton skeleton-h skeleton-half" style={{ marginTop: 6, borderRadius: 4 }} />
                                    </div>
                                    <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                                        <span className="badge badge-gray">No data</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid-2">
                <ChartContainer title="Risk Score Distribution" height={220} loading={true} connected={false} />
                <ChartContainer title="Fraud Alert Volume (30d)" height={220} loading={true} connected={false} />
            </div>
        </div>
    )
}
