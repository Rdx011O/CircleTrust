// SkeletonLoader — reusable shimmer block components

export function SkeletonText({ width = 'full', height = 'h' }) {
    return (
        <div className={`skeleton skeleton-${height} skeleton-${width}`} />
    )
}

export function SkeletonStatCard() {
    return (
        <div className="skel-stat-card">
            <div className="flex justify-between items-center mb-4">
                <div className="skeleton skeleton-circle" style={{ width: 40, height: 40 }} />
                <div className="skeleton skeleton-h skeleton-qtr" style={{ height: 20, width: 48, borderRadius: 99 }} />
            </div>
            <div className="skeleton skeleton-h-xl skeleton-half" style={{ marginBottom: 8 }} />
            <div className="skeleton skeleton-h skeleton-3q" />
        </div>
    )
}

export function SkeletonTableRows({ rows = 5, cols = 5 }) {
    return Array.from({ length: rows }).map((_, ri) => (
        <tr key={ri}>
            {Array.from({ length: cols }).map((_, ci) => (
                <td key={ci} style={{ padding: '13px 16px' }}>
                    <div className={`skeleton skeleton-h ${ci === 0 ? 'skeleton-3q' : ci % 2 === 0 ? 'skeleton-half' : 'skeleton-full'}`} />
                </td>
            ))}
        </tr>
    ))
}

export function SkeletonCard({ height = 200 }) {
    return (
        <div className="glass-card" style={{ height }}>
            <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
                <div className="skeleton skeleton-h skeleton-half" />
                <div className="skeleton skeleton-h skeleton-3q" />
                <div className="skeleton" style={{ flex: 1, borderRadius: 8 }} />
            </div>
        </div>
    )
}
