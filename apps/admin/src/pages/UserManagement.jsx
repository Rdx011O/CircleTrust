// Module 2 — User Management
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter, Download, UserCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DataTable from '../components/DataTable'
import StatusBadge from '../components/StatusBadge'

const columns = [
    { key: 'userId', label: 'User ID', width: 110 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'kyc', label: 'KYC Status', sortable: false, render: (v) => <StatusBadge status={v} /> },
    {
        key: 'trust', label: 'Trust Score', render: (v) => v !== undefined
            ? <span style={{ fontWeight: 600, color: v > 70 ? 'var(--accent-green)' : v > 40 ? 'var(--accent-amber)' : 'var(--accent-red)' }}>{v}</span>
            : '—'
    },
    { key: 'circles', label: 'Circles' },
    { key: 'status', label: 'Status', sortable: false, render: (v) => <StatusBadge status={v} /> },
    { key: 'joined', label: 'Joined' },
]

export default function UserManagement() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    // loading=true → shows skeleton rows, awaiting real API
    return (
        <div>
            <PageHeader
                title="User Management"
                subtitle="View, verify, and manage platform users. No balance edits permitted."
                breadcrumb="Users"
                actions={
                    <div className="flex gap-2">
                        <button className="btn btn-outline btn-sm"><Download size={14} /> Export</button>
                    </div>
                }
            />

            {/* Filters Bar */}
            <div className="glass-card mb-6">
                <div className="card-body flex gap-3" style={{ flexWrap: 'wrap' }}>
                    <div className="topbar-search" style={{ minWidth: 280, flex: 1 }}>
                        <Search size={14} color="var(--text-muted)" />
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search by name, ID, or email…"
                        />
                    </div>
                    <select className="form-input" style={{ minWidth: 140 }}>
                        <option value="">All KYC Status</option>
                        <option>Verified</option>
                        <option>Unverified</option>
                        <option>Pending</option>
                    </select>
                    <select className="form-input" style={{ minWidth: 140 }}>
                        <option value="">All Statuses</option>
                        <option>Active</option>
                        <option>Suspended</option>
                        <option>Inactive</option>
                    </select>
                    <button className="btn btn-outline btn-sm"><Filter size={14} /> Filters</button>
                </div>
            </div>

            {/* Summary Stat Strip */}
            <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 24 }}>
                {['Total Users', 'Verified KYC', 'Suspended', 'New This Month'].map(label => (
                    <div key={label} className="skel-stat-card" style={{ gap: 6, padding: 16 }}>
                        <div className="skeleton skeleton-h skeleton-half" />
                        <div className="skeleton skeleton-h-lg skeleton-3q" />
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
                    </div>
                ))}
            </div>

            {/* User Table */}
            <div className="glass-card">
                <div className="card-header">
                    <span className="card-title"><UserCheck size={15} /> User Registry</span>
                    <span className="badge badge-gray">Awaiting API connection</span>
                </div>
                <DataTable
                    columns={columns}
                    data={[]}
                    loading={true}
                    emptyTitle="No users loaded"
                    emptyDesc="Connect the user management API to populate this table."
                    onRowClick={(row) => navigate(`/users/${row.userId}`)}
                />
            </div>
        </div>
    )
}
