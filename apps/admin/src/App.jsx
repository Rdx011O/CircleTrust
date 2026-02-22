import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'

// Pages
import Dashboard from './pages/Dashboard'
import UserManagement from './pages/UserManagement'
import UserProfile from './pages/UserProfile'
import CircleMonitor from './pages/CircleMonitor'
import DisputeCenter from './pages/DisputeCenter'
import TrustAlgorithm from './pages/TrustAlgorithm'
import BlockchainMonitor from './pages/BlockchainMonitor'
import FraudDetection from './pages/FraudDetection'
import PaymentsMonitor from './pages/PaymentsMonitor'
import Analytics from './pages/Analytics'
import SystemSettings from './pages/SystemSettings'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="users/:id" element={<UserProfile />} />
                    <Route path="circles" element={<CircleMonitor />} />
                    <Route path="disputes" element={<DisputeCenter />} />
                    <Route path="trust" element={<TrustAlgorithm />} />
                    <Route path="fraud" element={<FraudDetection />} />
                    <Route path="blockchain" element={<BlockchainMonitor />} />
                    <Route path="payments" element={<PaymentsMonitor />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="settings" element={<SystemSettings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
