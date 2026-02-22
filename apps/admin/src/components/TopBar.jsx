import { Search, Bell, Moon, RefreshCw } from 'lucide-react'

export default function TopBar({ collapsed }) {
    return (
        <header className={`topbar${collapsed ? ' collapsed' : ''}`}>
            <div className="topbar-left">
                <div className="topbar-search">
                    <Search size={15} color="var(--text-muted)" />
                    <input type="text" placeholder="Search users, circles, disputes…" />
                </div>

                <div className="status-indicator">
                    <span className="status-dot online" />
                    System Operational
                </div>
            </div>

            <div className="topbar-right">
                <button className="topbar-icon-btn btn-icon btn-outline" title="Refresh data">
                    <RefreshCw size={15} />
                </button>

                <button className="topbar-icon-btn btn-icon btn-outline" title="Notifications">
                    <Bell size={15} />
                    <span className="notif-dot" />
                </button>

                <div className="topbar-avatar">
                    <div className="avatar-circle">SA</div>
                    <div className="avatar-info">
                        <span className="avatar-name">Super Admin</span>
                        <span className="avatar-role">Platform Operator</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
