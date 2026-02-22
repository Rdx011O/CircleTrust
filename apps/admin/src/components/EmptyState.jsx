import { PackageOpen } from 'lucide-react'

export default function EmptyState({
    title = 'No data available',
    description = 'This section is awaiting a live data connection.',
    icon: Icon = PackageOpen,
    action
}) {
    return (
        <div className="empty-state">
            <div className="empty-icon">
                <Icon size={24} strokeWidth={1.5} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {action && action}
        </div>
    )
}
