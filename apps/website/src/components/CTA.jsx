export default function CTA() {
    return (
        <section className="section cta-section" id="cta">
            {/* Orbs */}
            <div className="orb orb-blue" style={{ width: 500, height: 500, top: -100, left: '20%', opacity: 0.2 }} />
            <div className="orb orb-violet" style={{ width: 400, height: 400, bottom: -100, right: '15%', opacity: 0.18 }} />

            <div className="container">
                <div className="cta-inner">
                    <span className="section-badge" style={{ marginBottom: 24 }}>
                        <span className="dot" /> Limited Early Access
                    </span>

                    <h2>
                        Ready to <span className="gradient-text">Trust the Circle?</span>
                    </h2>

                    <p>
                        Join thousands of community members who are moving beyond WhatsApp groups
                        and Excel sheets into a secure, automated, blockchain-backed lending circle.
                        Early access is free — no credit card required.
                    </p>

                    <div className="cta-btns">
                        <a href="/register" className="btn btn-primary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
                            🚀 Get Early Access
                        </a>
                        <a href="#hero" className="btn btn-outline" style={{ fontSize: '1rem', padding: '15px 32px' }}>
                            Learn More
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div style={{
                        display: 'flex',
                        gap: 32,
                        justifyContent: 'center',
                        marginTop: 48,
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { icon: '🔒', label: 'Blockchain Secured' },
                            { icon: '✅', label: 'KYC Verified Members' },
                            { icon: '⚡', label: 'Instant Payouts' },
                            { icon: '🌐', label: 'Web3 Powered' },
                        ].map((badge) => (
                            <div
                                key={badge.label}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '8px 16px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 999,
                                    fontSize: '0.82rem',
                                    color: 'var(--text-secondary)',
                                }}
                            >
                                <span>{badge.icon}</span> {badge.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
