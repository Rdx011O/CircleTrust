// PageHeader — consistent page title with breadcrumbs and action slot
import { Home, ChevronRight } from 'lucide-react'

export default function PageHeader({ title, subtitle, breadcrumb, actions }) {
    return (
        <div className="page-header">
            <div className="page-breadcrumb">
                <Home size={11} />
                <ChevronRight size={11} />
                <span>{breadcrumb || title}</span>
            </div>
            <div className="page-title-row">
                <div>
                    <h1 className="page-title">{title}</h1>
                    {subtitle && <p className="page-subtitle">{subtitle}</p>}
                </div>
                {actions && <div className="page-actions">{actions}</div>}
            </div>
        </div>
    )
}
