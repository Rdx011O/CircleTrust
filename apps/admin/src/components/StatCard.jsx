// StatCard — shows metric with skeleton loading and empty awaiting state

export default function StatCard({
    label,
    value,
    subtext,
    icon: Icon,
    color = 'blue',
    trend,
    trendDir = 'flat',
    loading = true
}) {
    if (loading) {
        return (
            <div className={`stat-card ${color}`}>
                <div className="stat-card-header">
                    <div className="skeleton skeleton-circle" style={{ width: 40, height: 40 }} />
                    <div className="skeleton skeleton-h" style={{ width: 56, height: 22, borderRadius: 99 }} />
                </div>
                <div className="skeleton skeleton-h-xl skeleton-half" style={{ marginBottom: 8 }} />
                <div className="skeleton skeleton-h skeleton-3q" />
                {subtext && <div className="skeleton skeleton-h skeleton-half" style={{ marginTop: 8 }} />}
            </div>
        )
    }

    return (
        <div className={`stat-card ${color}`}>
            <div className="stat-card-header">
                <div className={`stat-card-icon ${color}`}>
                    {Icon && <Icon size={18} strokeWidth={1.8} />}
                </div>
                {trend !== undefined && (
                    <span className={`stat-trend ${trendDir}`}>{trendDir === 'up' ? '↑' : trendDir === 'down' ? '↓' : '—'} {trend}</span>
                )}
            </div>
            <div className="stat-value">{value ?? '—'}</div>
            <div className="stat-label">{label}</div>
            {subtext && <div className="stat-sub">{subtext}</div>}
        </div>
    )
}
