// AlertFeed — scrollable real-time alert list container
import { AlertTriangle, Info, AlertCircle } from 'lucide-react'
import EmptyState from './EmptyState'

const iconMap = {
    critical: AlertCircle,
    warning: AlertTriangle,
    info: Info
}

export default function AlertFeed({ alerts = [], loading = true }) {
    if (loading) {
        return (
            <div className="alert-feed">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="alert-item info" style={{ gap: 10 }}>
                        <div className="skeleton skeleton-circle" style={{ width: 32, height: 32, minWidth: 32 }} />
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <div className="skeleton skeleton-h skeleton-3q" />
                            <div className="skeleton skeleton-h skeleton-half" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (!alerts.length) {
        return (
            <EmptyState
                title="No alerts"
                description="No suspicious activity has been flagged. Feed will update when the platform data stream connects."
            />
        )
    }

    return (
        <div className="alert-feed">
            {alerts.map((alert, i) => {
                const Icon = iconMap[alert.severity] || Info
                return (
                    <div key={i} className={`alert-item ${alert.severity}`}>
                        <div className="alert-icon"><Icon size={15} /></div>
                        <div className="alert-body">
                            <div className="alert-title">{alert.title}</div>
                            <div className="alert-desc">{alert.description}</div>
                        </div>
                        <div className="alert-time">{alert.time}</div>
                    </div>
                )
            })}
        </div>
    )
}
