// Module 2b — User Profile Inspection Page
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Clock, Circle, CreditCard, AlertTriangle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatusBadge from '../components/StatusBadge'
import ChartContainer from '../components/ChartContainer'
import EmptyState from '../components/EmptyState'

export default function UserProfile() {
    const { id } = useParams()
    const navigate = useNavigate()
    // loading=true → skeleton, no user data populated
    const loading = true

    return (
        <div>
            <PageHeader
                title={loading ? 'Loading Profile…' : `User: ${id}`}
                subtitle="User profile inspection — read-only view"
                breadcrumb="Users / Profile"
                actions={
                    <div className="flex gap-2">
                        <button className="btn btn-outline btn-sm" onClick={() => navigate('/users')}>
                            <ArrowLeft size={14} /> Back to Users
                        </button>
                        <button className="btn btn-danger btn-sm"><AlertTriangle size={14} /> Suspend</button>
                    </div>
                }
            />

            <div className="grid-1-2" style={{ marginBottom: 20 }}>
                {/* Sidebar info card */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <div className="glass-card">
                        <div className="card-body">
                            {loading ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div className="flex items-center gap-3">
                                        <div className="skeleton skeleton-circle" style={{ width: 56, height: 56 }} />
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                            <div className="skeleton skeleton-h skeleton-3q" />
                                            <div className="skeleton skeleton-h skeleton-half" />
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    {['User ID', 'Email', 'Phone', 'Wallet Address', 'Joined', 'KYC Status'].map(f => (
                                        <div key={f} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{f}</span>
                                            <div className="skeleton skeleton-h skeleton-half" style={{ width: 100 }} />
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><ShieldCheck size={14} /> Trust Score</span>
                        </div>
                        <div className="card-body">
                            <div className="awaiting-block">
                                <div className="connecting-icon">📊</div>
                                <p>Trust score history awaiting data connection</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content panels */}
                <div className="flex-col" style={{ gap: 16 }}>
                    <ChartContainer title="Trust Score History" height={200} loading={true} connected={false} />

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Circle size={14} /> Circle Participation</span>
                            <span className="badge badge-gray">Awaiting data</span>
                        </div>
                        <div className="card-body">
                            <EmptyState
                                title="No circle data"
                                description="User's circle participation history will appear here once the API is connected."
                                icon={Circle}
                            />
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><CreditCard size={14} /> Payment & Dispute History</span>
                        </div>
                        <div className="card-body">
                            <EmptyState
                                title="No payment records"
                                description="Payment and dispute history will load from the transactions API."
                                icon={CreditCard}
                            />
                        </div>
                    </div>

                    <div className="glass-card">
                        <div className="card-header">
                            <span className="card-title"><Clock size={14} /> Activity Timeline</span>
                        </div>
                        <div className="card-body">
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="skeleton skeleton-circle" style={{ width: 28, height: 28, minWidth: 28 }} />
                                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
                                            <div className="skeleton skeleton-h skeleton-3q" />
                                            <div className="skeleton skeleton-h skeleton-half" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
