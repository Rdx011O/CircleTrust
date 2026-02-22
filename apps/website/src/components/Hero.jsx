export default function Hero() {
    return (
        <section className="hero section" id="hero">
            {/* Background orbs */}
            <div className="orb orb-blue" style={{ width: 600, height: 600, top: -200, left: -150 }} />
            <div className="orb orb-violet" style={{ width: 500, height: 500, bottom: -200, right: -100 }} />

            <div className="container hero-inner">
                {/* Left — Copy */}
                <div className="hero-copy">
                    <div className="hero-eyebrow">
                        <span className="section-badge">
                            <span className="dot" /> Blockchain-Powered Lending Circles
                        </span>
                    </div>

                    <h1 className="hero-title">
                        Trust the Circle.<br />
                        <span className="gradient-text">Automate the Rest.</span>
                    </h1>

                    <p className="hero-desc">
                        CircleTrust digitizes traditional chit funds into a secure, transparent,
                        blockchain-backed peer-to-peer lending platform — where rules are enforced,
                        funds are protected, and every member can trust the process.
                    </p>

                    <div className="hero-cta">
                        <a href="/register" className="btn btn-primary">Get Early Access →</a>
                        <a href="#how" className="btn btn-outline">How It Works</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-num">100%</div>
                            <div className="stat-label">Tamper-proof</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">0</div>
                            <div className="stat-label">Manual errors</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">∞</div>
                            <div className="stat-label">Scalability</div>
                        </div>
                    </div>
                </div>

                {/* Right — App Mockup */}
                <div className="hero-visual">
                    {/* Floating badges */}
                    <div className="float-badge fb-1">✅ Payout sent — ₹25,000</div>
                    <div className="float-badge fb-2">🔒 Smart contract locked</div>

                    <div className="app-mockup">
                        {/* Header */}
                        <div className="mockup-header">
                            <div className="mockup-avatar">🔮</div>
                            <div className="mockup-user">
                                Savings Circle<br />
                                <strong>₹3,00,000 Pool</strong>
                            </div>
                        </div>

                        {/* Circle ring */}
                        <div className="circle-ring-wrap">
                            <div className="ring-label">Cycle Progress</div>
                            <svg viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#7c3aed" />
                                    </linearGradient>
                                </defs>
                                <circle className="ring-track" cx="50" cy="50" r="45" />
                                <circle
                                    className="ring-fill"
                                    cx="50" cy="50" r="45"
                                    stroke="url(#ringGrad)"
                                    transform="rotate(-90 50 50)"
                                />
                                <text x="50" y="50" textAnchor="middle" dominantBaseline="middle"
                                    fill="#f1f5f9" fontSize="14" fontWeight="700" fontFamily="Space Grotesk, sans-serif">
                                    75%
                                </text>
                            </svg>
                            <div className="ring-label">Month 9 of 12</div>
                        </div>

                        {/* Members */}
                        <div className="mockup-members">
                            <div className="member-stack">
                                <div className="m-dot m-1">AK</div>
                                <div className="m-dot m-2">PR</div>
                                <div className="m-dot m-3">SM</div>
                                <div className="m-dot m-4">+9</div>
                            </div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                                12 Members<br />
                                <strong style={{ color: 'var(--text-primary)', fontSize: '0.8rem' }}>All Verified ✓</strong>
                            </div>
                        </div>

                        {/* Next payout */}
                        <div className="mockup-payout">
                            <span className="payout-label">🗓 Next Payout</span>
                            <span className="payout-amount">₹25,000 → Ravi M.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
