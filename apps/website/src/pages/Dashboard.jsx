import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
    };

    if (!user) {
        return null; // The ProtectedRoute component will handle redirecting unauthenticated users
    }

    const { full_name, address } = user.user_metadata || {};

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <div className="nav-brand">
                    <div className="brand-logo">C</div>
                    <span>CircleTrust</span>
                </div>
                <button onClick={handleSignOut} className="sign-out-btn">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </nav>

            <main className="dashboard-main">
                <header className="main-header">
                    <h1>Welcome, {full_name || 'User'}!</h1>
                    <p>You have successfully logged into your account.</p>
                </header>

                <section className="profile-section">
                    <h2>Profile Information</h2>
                    <div className="profile-card">

                        <div className="profile-group">
                            <div className="profile-icon-wrapper">
                                <UserIcon size={24} />
                            </div>
                            <div className="profile-details">
                                <h3>Account Details</h3>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Name:</strong> {full_name || 'Not provided'}</p>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="profile-group">
                            <div className="profile-details">
                                <h3>Address Details</h3>
                                {address ? (
                                    <>
                                        <p><strong>Country:</strong> {address.country}</p>
                                        <p><strong>State:</strong> {address.state}</p>
                                        <p><strong>City:</strong> {address.city}</p>
                                        <p><strong>Pincode:</strong> {address.pincode}</p>
                                    </>
                                ) : (
                                    <p>No address details provided.</p>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}
