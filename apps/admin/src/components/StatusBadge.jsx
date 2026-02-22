// StatusBadge — colored semantic pill badges

const variantMap = {
    active: 'badge-green',
    verified: 'badge-green',
    completed: 'badge-green',
    healthy: 'badge-green',
    open: 'badge-blue',
    pending: 'badge-amber',
    warning: 'badge-amber',
    suspended: 'badge-red',
    defaulted: 'badge-red',
    frozen: 'badge-red',
    closed: 'badge-gray',
    inactive: 'badge-gray',
    unverified: 'badge-amber',
    arbitration: 'badge-violet',
    processing: 'badge-cyan',
}

export default function StatusBadge({ status, label }) {
    const cls = variantMap[status?.toLowerCase()] || 'badge-gray'
    return (
        <span className={`badge ${cls}`}>
            <span className="badge-dot" />
            {label || status}
        </span>
    )
}
