// Module 9 — Analytics & Reporting
import { useState } from 'react'
import { BarChart3, Download, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ChartContainer from '../components/ChartContainer'
import EmptyState from '../components/EmptyState'

const reportTypes = [
    { id: 'circle-success', label: 'Circle Success Rate', desc: 'Completion rates per circle type and region', icon: '⭕' },
    { id: 'user-retention', label: 'User Retention', desc: 'Monthly and cohort retention analysis', icon: '👥' },
    { id: 'default-trends', label: 'Default Trends', desc: 'Payment default patterns over time', icon: '📉' },
    { id: 'trust-growth', label: 'Trust Score Growth', desc: 'Platform-wide trust score distribution', icon: '⬆️' },
    { id: 'regional-adoption', label: 'Regional Adoption', desc: 'Geographic spread of users and circles', icon: '🗺️' },
    { id: 'financial-inclusion', label: 'Financial Inclusion Stats', desc: 'First-time borrowers and underbanked metrics', icon: '🌱' },
]

export default function Analytics() {
    const [activeReport, setActiveReport] = useState(null)
    const [exportFormat, setExportFormat] = useState('csv')

    return (
        <div>
            <PageHeader
                title="Analytics & Reporting"
                subtitle="Platform-wide metrics, growth analysis, and exportable reports"
                breadcrumb="Analytics"
                actions={
                    <div className="flex gap-2">
                        <select className="form-input" value={exportFormat} onChange={e => setExportFormat(e.target.value)} style={{ minWidth: 80 }}>
                            <option value="csv">CSV</option>
                            <option value="pdf">PDF</option>
                            <option value="json">JSON</option>
                        </select>
                        <button className="btn btn-outline btn-sm"><Download size={14} /> Export {exportFormat.toUpperCase()}</button>
                    </div>
                }
            />

            {/* Chart Overview */}
            <div className="grid-2 mb-6">
                <ChartContainer title="Platform Growth (Monthly)" height={240} loading={true} connected={false} />
                <ChartContainer title="Trust Score Trend" height={240} loading={true} connected={false} />
            </div>
            <div className="grid-3 mb-6">
                <ChartContainer title="Default Rate Trend" height={200} loading={true} connected={false} />
                <ChartContainer title="Regional Adoption Map" height={200} loading={true} connected={false} />
                <ChartContainer title="Financial Inclusion Index" height={200} loading={true} connected={false} />
            </div>

            {/* Report Generator */}
            <div className="grid-1-2">
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><FileText size={14} /> Report Types</span>
                    </div>
                    <div style={{ padding: '8px 0' }}>
                        {reportTypes.map(r => (
                            <button
                                key={r.id}
                                onClick={() => setActiveReport(r.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    width: '100%',
                                    padding: '12px 18px',
                                    background: activeReport === r.id ? 'rgba(59,130,246,0.08)' : 'transparent',
                                    border: 'none',
                                    borderLeft: `3px solid ${activeReport === r.id ? 'var(--accent-blue)' : 'transparent'}`,
                                    color: 'var(--text-primary)',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                            >
                                <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>{r.icon}</span>
                                <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{r.label}</div>
                                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><BarChart3 size={14} />
                            {activeReport ? reportTypes.find(r => r.id === activeReport)?.label : 'Report Preview'}
                        </span>
                        {activeReport && (
                            <button className="btn btn-outline btn-sm"><Download size={13} /> Export</button>
                        )}
                    </div>
                    <div className="card-body">
                        {activeReport ? (
                            <div className="awaiting-block">
                                <div className="connecting-icon">📊</div>
                                <p>Report data awaiting API connection</p>
                                <span style={{ fontSize: '0.72rem' }}>
                                    Connect the analytics API to generate {reportTypes.find(r => r.id === activeReport)?.label} report.
                                    Export will be available in {exportFormat.toUpperCase()} format.
                                </span>
                            </div>
                        ) : (
                            <EmptyState
                                title="Select a report type"
                                description="Choose a report from the list to preview and export data."
                                icon={BarChart3}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
