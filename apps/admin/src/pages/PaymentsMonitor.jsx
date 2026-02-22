// Module 8 — Payments & Integrations Monitor (Read-Only)
import { CreditCard, CheckCircle, XCircle, Clock, Activity } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'

const integrations = [
    { name: 'UPI Gateway', provider: 'NPCI / Razorpay', icon: '🏦' },
    { name: 'Wallet Integration', provider: 'CircleTrust Wallet Contract', icon: '👛' },
    { name: 'Settlement Engine', provider: 'Automated Payout Service', icon: '⚡' },
    { name: 'KYC Provider', provider: 'DigiLocker / UIDAI', icon: '🆔' },
    { name: 'SMS / OTP Gateway', provider: 'Twilio / MSG91', icon: '📱' },
    { name: 'Blockchain Node RPC', provider: 'Polygon / Ethereum', icon: '🔗' },
]

export default function PaymentsMonitor() {
    return (
        <div>
            <PageHeader
                title="Payments & Integrations Monitor"
                subtitle="Read-only view of payment gateways, settlement status, and API health"
                breadcrumb="Payments"
            />

            {/* Integration Health Cards */}
            <div className="grid-3 mb-6">
                {integrations.map(intg => (
                    <div key={intg.name} className="glass-card">
                        <div className="card-body" style={{ padding: 18 }}>
                            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
                                <span style={{ fontSize: '1.5rem' }}>{intg.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{intg.name}</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{intg.provider}</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="badge badge-gray">Status unknown</span>
                                <div className="skeleton skeleton-h skeleton-qtr" style={{ borderRadius: 99 }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid-2" style={{ marginBottom: 20 }}>
                {/* Payment Processing Logs */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><Activity size={14} /> Payment Processing Logs</span>
                        <span className="badge badge-gray">Read-only</span>
                    </div>
                    <div className="card-body">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="flex gap-3 items-center" style={{ padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                                    <div className="skeleton skeleton-circle" style={{ width: 28, height: 28, minWidth: 28 }} />
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                                        <div className="skeleton skeleton-h skeleton-3q" />
                                        <div className="skeleton skeleton-h skeleton-half" />
                                    </div>
                                    <div className="skeleton skeleton-h skeleton-qtr" style={{ borderRadius: 99, width: 60 }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Settlement Status */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><CreditCard size={14} /> Settlement Status</span>
                    </div>
                    <div className="card-body">
                        <EmptyState
                            title="No settlements loaded"
                            description="Settlement records will appear here once the payment gateway API is connected."
                            icon={CreditCard}
                        />
                    </div>
                </div>
            </div>

            {/* API Health Monitor */}
            <div className="glass-card">
                <div className="card-header">
                    <span className="card-title">🌐 API Health Monitor</span>
                    <span className="badge badge-gray">Awaiting checks</span>
                </div>
                <div className="card-body">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        {['POST /api/payments/initiate', 'GET /api/payments/status', 'POST /api/payouts/trigger', 'GET /api/settlements/list', 'POST /api/kyc/verify'].map(endpoint => (
                            <div key={endpoint} className="flex justify-between items-center" style={{ padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                                <code style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>{endpoint}</code>
                                <div className="flex gap-3 items-center">
                                    <div className="skeleton skeleton-h skeleton-qtr" style={{ width: 48 }} />
                                    <div className="skeleton skeleton-h" style={{ width: 60, borderRadius: 99 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
