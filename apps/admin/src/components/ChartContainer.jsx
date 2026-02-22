// ChartContainer — WebSocket-ready chart wrapper with awaiting-data state
import { Wifi } from 'lucide-react'

export default function ChartContainer({ title, children, height = 280, loading = true, connected = false }) {
    return (
        <div className="chart-container">
            <div className="card-header">
                <span className="card-title">{title}</span>
                <span className={`badge ${connected ? 'badge-green' : 'badge-gray'}`}>
                    <span className="badge-dot" />
                    {connected ? 'Live' : 'Awaiting stream'}
                </span>
            </div>
            <div style={{ padding: '0 8px 8px' }}>
                {loading || !connected ? (
                    <div className="chart-placeholder" style={{ height }}>
                        <div className="pulse-ring">
                            <Wifi size={22} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'var(--accent-blue)', opacity: 0.5 }} />
                        </div>
                        <p>Waiting for real-time data stream…</p>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            Chart will render once WebSocket connection is established
                        </span>
                    </div>
                ) : (
                    <div style={{ height }}>{children}</div>
                )}
            </div>
        </div>
    )
}
