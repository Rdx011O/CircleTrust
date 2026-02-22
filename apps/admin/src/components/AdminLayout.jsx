import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="admin-layout">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
            <div className={`admin-main${collapsed ? ' collapsed' : ''}`}>
                <TopBar collapsed={collapsed} />
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
