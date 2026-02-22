import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard, Users, Circle, Scale, Shield,
    Link2, AlertTriangle, CreditCard, BarChart3,
    Settings, ChevronLeft, ChevronRight, Zap
} from 'lucide-react'

const navSections = [
    {
        label: 'Overview',
        items: [
            { to: '/', icon: LayoutDashboard, label: 'Dashboard', end: true },
        ]
    },
    {
        label: 'Platform',
        items: [
            { to: '/users', icon: Users, label: 'User Management' },
            { to: '/circles', icon: Circle, label: 'Circle Monitor' },
            { to: '/disputes', icon: Scale, label: 'Dispute Center' },
        ]
    },
    {
        label: 'Intelligence',
        items: [
            { to: '/trust', icon: Zap, label: 'Trust Algorithm' },
            { to: '/fraud', icon: AlertTriangle, label: 'Fraud & Risk', badge: null },
            { to: '/blockchain', icon: Link2, label: 'Blockchain Monitor' },
        ]
    },
    {
        label: 'Operations',
        items: [
            { to: '/payments', icon: CreditCard, label: 'Payments Monitor' },
            { to: '/analytics', icon: BarChart3, label: 'Analytics' },
            { to: '/settings', icon: Settings, label: 'System Settings' },
        ]
    }
]

export default function Sidebar({ collapsed, onToggle }) {
    return (
        <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
            <div className="sidebar-logo">
                <div className="sidebar-logo-icon">🔵</div>
                {!collapsed && (
                    <div className="sidebar-logo-text">
                        <strong>CircleTrust</strong>
                        <span>Admin Console</span>
                    </div>
                )}
            </div>

            <nav className="sidebar-nav">
                {navSections.map((section) => (
                    <div key={section.label}>
                        <div className="nav-section-label">{section.label}</div>
                        {section.items.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                                title={collapsed ? item.label : undefined}
                            >
                                <span className="nav-icon">
                                    <item.icon size={17} strokeWidth={1.8} />
                                </span>
                                {!collapsed && <span>{item.label}</span>}
                                {!collapsed && item.badge != null && (
                                    <span className="nav-badge">{item.badge}</span>
                                )}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="sidebar-collapse-btn" onClick={onToggle}>
                    {collapsed
                        ? <ChevronRight size={16} />
                        : (<><ChevronLeft size={16} /><span>Collapse</span></>)
                    }
                </button>
            </div>
        </aside>
    )
}
