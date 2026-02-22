// Module 10 — System Settings UI
import { useState } from 'react'
import { Settings, Shield, Bell, Zap, Save, UserCircle, Key, Cpu } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function SystemSettings() {
    const [activeTab, setActiveTab] = useState('roles')

    return (
        <div>
            <PageHeader
                title="System Settings"
                subtitle="Manage platform roles, permissions, feature flags, and notification rules"
                breadcrumb="Settings"
                actions={
                    <button className="btn btn-primary btn-sm"><Save size={14} /> Save Changes</button>
                }
            />

            <div className="grid-1-2">
                {/* Navigation */}
                <div className="glass-card" style={{ height: 'fit-content' }}>
                    <div style={{ padding: '8px 0' }}>
                        {[
                            { id: 'roles', label: 'Role Management', icon: Shield },
                            { id: 'features', label: 'Feature Switches', icon: Zap },
                            { id: 'notif', label: 'Notifications', icon: Bell },
                            { id: 'security', label: 'Security & Auth', icon: Key },
                            { id: 'profile', label: 'Admin Profile', icon: UserCircle },
                            { id: 'infra', label: 'Infrastructure', icon: Cpu },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    width: '100%',
                                    padding: '14px 20px',
                                    background: activeTab === tab.id ? 'rgba(59,130,246,0.08)' : 'transparent',
                                    border: 'none',
                                    borderLeft: `3px solid ${activeTab === tab.id ? 'var(--accent-blue)' : 'transparent'}`,
                                    color: activeTab === tab.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    transition: 'all 0.2s',
                                }}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-col" style={{ gap: 20 }}>
                    {activeTab === 'roles' && (
                        <div className="glass-card">
                            <div className="card-header">
                                <span className="card-title">Role Management & Permissions</span>
                            </div>
                            <div className="card-body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {['Platform Administrator', 'Risk Reviewer', 'Dispute Arbitrator', 'Support Agent'].map(role => (
                                        <div key={role} className="toggle-wrap">
                                            <div>
                                                <div className="toggle-label">{role}</div>
                                                <div className="toggle-desc">Define permissions and access levels for {role}</div>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Edit Role</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'features' && (
                        <div className="glass-card">
                            <div className="card-header">
                                <span className="card-title">Feature Switches (Live Ops)</span>
                            </div>
                            <div className="card-body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        { label: 'Blockchain Payouts', desc: 'Allow automated payouts via smart contract' },
                                        { label: 'AI Risk Engine', desc: 'Enable automated risk scoring for new circles' },
                                        { label: 'UPI Integration', desc: 'Enable real-time fiat-to-token bridge' },
                                        { label: 'Arbitration Flow', desc: 'Allow admins to resolve disputes on-chain' },
                                    ].map(feat => (
                                        <div key={feat.label} className="toggle-wrap">
                                            <div>
                                                <div className="toggle-label">{feat.label}</div>
                                                <div className="toggle-desc">{feat.desc}</div>
                                            </div>
                                            <label className="toggle-switch">
                                                <input type="checkbox" defaultChecked={feat.label !== 'Blockchain Payouts'} />
                                                <span className="toggle-slider" />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notif' && (
                        <div className="glass-card">
                            <div className="card-header">
                                <span className="card-title">Notification Configuration</span>
                            </div>
                            <div className="card-body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {[
                                        { label: 'Critical Fraud Alerts', desc: 'Email + Push notifications for high-risk activity' },
                                        { label: 'Dispute Filings', desc: 'Notify support when a new dispute is opened' },
                                        { label: 'System Health Drops', desc: 'Alert infrastructure team on RPC failures' },
                                        { label: 'High Volume Spikes', desc: 'Notify monitoring on unusual platform growth' },
                                    ].map(n => (
                                        <div key={n.label} className="toggle-wrap">
                                            <div>
                                                <div className="toggle-label">{n.label}</div>
                                                <div className="toggle-desc">{n.desc}</div>
                                            </div>
                                            <label className="toggle-switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="toggle-slider" />
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {(['security', 'profile', 'infra'].includes(activeTab)) && (
                        <div className="glass-card">
                            <div className="card-header">
                                <span className="card-title">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</span>
                            </div>
                            <div className="card-body">
                                <div className="awaiting-block" style={{ padding: '60px 0' }}>
                                    <div className="connecting-icon">⚙️</div>
                                    <p>Configuration panel awaiting backend connection</p>
                                    <span style={{ fontSize: '0.72rem' }}>
                                        Setting changes in this category require a live connection to the platform configuration API.
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
