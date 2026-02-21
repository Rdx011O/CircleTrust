import { useState } from 'react'
import './Dashboard.css'

/* ─── Static data ─── */
const CONTINUE_CIRCLES = [
    {
        id: 'c1',
        name: 'Family Savings Ring',
        emoji: '👨‍👩‍👧‍👦',
        members: 8,
        totalMembers: 10,
        contributed: 6400,
        target: 8000,
        myTurn: 3,
        nextPayout: 'Mar 15',
        gradient: 'var(--gradient-accent)',
        glowColor: 'rgba(124, 58, 237, 0.35)',
    },
    {
        id: 'c2',
        name: 'Tech Co-workers Pool',
        emoji: '💻',
        members: 6,
        totalMembers: 6,
        contributed: 12000,
        target: 12000,
        myTurn: 1,
        nextPayout: 'Feb 28',
        gradient: 'var(--gradient-cyan)',
        glowColor: 'rgba(6, 182, 212, 0.35)',
    },
]

const UPCOMING_CIRCLES = [
    {
        id: 'u1',
        name: 'Neighborhood Welfare',
        emoji: '🏘️',
        slots: 12,
        filled: 7,
        contribution: 500,
        frequency: 'Monthly',
        startDate: 'Apr 1',
        gradient: 'var(--gradient-green)',
        glowColor: 'rgba(16, 185, 129, 0.35)',
    },
    {
        id: 'u2',
        name: 'Startup Founders Fund',
        emoji: '🚀',
        slots: 5,
        filled: 3,
        contribution: 2000,
        frequency: 'Bi-monthly',
        startDate: 'May 10',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        glowColor: 'rgba(245, 158, 11, 0.35)',
    },
    {
        id: 'u3',
        name: 'Women Entrepreneurs',
        emoji: '👩‍💼',
        slots: 10,
        filled: 10,
        contribution: 1000,
        frequency: 'Monthly',
        startDate: 'Mar 20',
        gradient: 'linear-gradient(135deg, #ec4899, #7c3aed)',
        glowColor: 'rgba(236, 72, 153, 0.35)',
        full: true,
    },
]

const TRADING_CIRCLES = [
    /* NGOs */
    {
        id: 't1',
        name: 'GreenEarth NGO',
        type: 'NGO',
        emoji: '🌿',
        cause: 'Environmental Relief',
        members: 45,
        pooled: 90000,
        roi: '+12.4%',
        roiPositive: true,
        gradient: 'var(--gradient-green)',
        glowColor: 'rgba(16, 185, 129, 0.35)',
    },
    {
        id: 't2',
        name: 'EduReach Foundation',
        type: 'NGO',
        emoji: '📚',
        cause: 'Education for All',
        members: 30,
        pooled: 60000,
        roi: '+8.1%',
        roiPositive: true,
        gradient: 'var(--gradient-cyan)',
        glowColor: 'rgba(6, 182, 212, 0.35)',
    },
    /* Other Orgs */
    {
        id: 't3',
        name: 'Alpha Traders Club',
        type: 'Org',
        emoji: '📈',
        cause: 'Equity & Crypto',
        members: 20,
        pooled: 250000,
        roi: '+22.7%',
        roiPositive: true,
        gradient: 'var(--gradient-accent)',
        glowColor: 'rgba(124, 58, 237, 0.35)',
    },
    {
        id: 't4',
        name: 'SafeHaven Co-op',
        type: 'Org',
        emoji: '🏦',
        cause: 'Fixed Income & Bonds',
        members: 15,
        pooled: 150000,
        roi: '-2.3%',
        roiPositive: false,
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        glowColor: 'rgba(245, 158, 11, 0.35)',
    },
]

/* ─── Reusable progress ring ─── */
function ProgressRing({ pct, gradient, size = 72 }) {
    const r = (size - 10) / 2
    const circ = 2 * Math.PI * r
    const offset = circ * (1 - pct / 100)
    const id = `gr-${Math.random().toString(36).slice(2, 7)}`
    return (
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <defs>
                <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={8} />
            <circle
                cx={size / 2} cy={size / 2} r={r}
                fill="none"
                stroke={`url(#${id})`}
                strokeWidth={8}
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
        </svg>
    )
}

/* ─── Continue Circle Card ─── */
function ContinueCard({ c }) {
    const pct = Math.round((c.contributed / c.target) * 100)
    return (
        <div className="db-card db-card--continue">
            <div className="db-card__accent" style={{ background: c.gradient }} />
            <div className="db-card__top">
                <span className="db-circle-emoji">{c.emoji}</span>
                <div style={{ flex: 1 }}>
                    <p className="db-card__name">{c.name}</p>
                    <p className="db-card__sub">{c.members}/{c.totalMembers} members</p>
                </div>
                <div className="db-ring-wrap">
                    <ProgressRing pct={pct} />
                    <span className="db-ring-pct">{pct}%</span>
                </div>
            </div>

            <div className="db-card__stats">
                <div className="db-stat">
                    <span className="db-stat__label">Contributed</span>
                    <span className="db-stat__val">₹{c.contributed.toLocaleString()}</span>
                </div>
                <div className="db-stat">
                    <span className="db-stat__label">Target</span>
                    <span className="db-stat__val">₹{c.target.toLocaleString()}</span>
                </div>
                <div className="db-stat">
                    <span className="db-stat__label">My Payout #</span>
                    <span className="db-stat__val" style={{ color: 'var(--accent-cyan)' }}>{c.myTurn}</span>
                </div>
            </div>

            <div className="db-card__footer">
                <span className="db-payout-badge">
                    📅 Next payout: <strong>{c.nextPayout}</strong>
                </span>
                <button className="db-btn-sm">Contribute →</button>
            </div>
        </div>
    )
}

/* ─── Upcoming Circle Card ─── */
function UpcomingCard({ u }) {
    const pct = Math.round((u.filled / u.slots) * 100)
    return (
        <div className="db-card db-card--upcoming">
            <div className="db-card__accent" style={{ background: u.gradient }} />
            <div className="db-card__top">
                <span className="db-circle-emoji">{u.emoji}</span>
                <div style={{ flex: 1 }}>
                    <p className="db-card__name">{u.name}</p>
                    <p className="db-card__sub">{u.frequency} · Starts {u.startDate}</p>
                </div>
                {u.full && <span className="db-badge db-badge--full">Full</span>}
            </div>

            <div className="db-slots-bar">
                <div className="db-slots-bar__track">
                    <div
                        className="db-slots-bar__fill"
                        style={{ width: `${pct}%`, background: u.gradient }}
                    />
                </div>
                <span className="db-slots-text">{u.filled}/{u.slots} slots</span>
            </div>

            <div className="db-card__stats">
                <div className="db-stat">
                    <span className="db-stat__label">Contribution</span>
                    <span className="db-stat__val">₹{u.contribution.toLocaleString()}</span>
                </div>
                <div className="db-stat">
                    <span className="db-stat__label">Total Pool</span>
                    <span className="db-stat__val">₹{(u.contribution * u.slots).toLocaleString()}</span>
                </div>
            </div>

            <button
                className="db-btn-full"
                style={{ background: u.gradient, opacity: u.full ? 0.5 : 1, cursor: u.full ? 'not-allowed' : 'pointer' }}
                disabled={u.full}
            >
                {u.full ? '🔒 Circle Full' : '✋ Join Circle'}
            </button>
        </div>
    )
}

/* ─── Trading Circle Card ─── */
function TradingCard({ t }) {
    return (
        <div className="db-card db-card--trading">
            <div className="db-card__accent" style={{ background: t.gradient }} />
            <div className="db-card__top">
                <span className="db-circle-emoji">{t.emoji}</span>
                <div style={{ flex: 1 }}>
                    <p className="db-card__name">{t.name}</p>
                    <p className="db-card__sub">{t.cause}</p>
                </div>
                <span className={`db-badge ${t.type === 'NGO' ? 'db-badge--ngo' : 'db-badge--org'}`}>
                    {t.type === 'NGO' ? '🤝 NGO' : '🏢 Org'}
                </span>
            </div>

            <div className="db-card__stats">
                <div className="db-stat">
                    <span className="db-stat__label">Members</span>
                    <span className="db-stat__val">{t.members}</span>
                </div>
                <div className="db-stat">
                    <span className="db-stat__label">Pool Size</span>
                    <span className="db-stat__val">₹{t.pooled.toLocaleString()}</span>
                </div>
                <div className="db-stat">
                    <span className="db-stat__label">Returns</span>
                    <span
                        className="db-stat__val"
                        style={{ color: t.roiPositive ? 'var(--accent-green)' : 'var(--accent-red)' }}
                    >
                        {t.roi}
                    </span>
                </div>
            </div>

            <button className="db-btn-full" style={{ background: t.gradient }}>
                📊 View Details
            </button>
        </div>
    )
}

/* ─── Section Header ─── */
function SectionHeader({ badge, title, highlight, desc }) {
    return (
        <div className="section-header db-section-header">
            <span className="section-badge"><span className="dot" />{badge}</span>
            <h2>{title} <span className="gradient-text">{highlight}</span></h2>
            <p>{desc}</p>
        </div>
    )
}

/* ─── Dashboard Component ─── */
export default function Dashboard() {
    const [tradingFilter, setTradingFilter] = useState('All')
    const filters = ['All', 'NGO', 'Org']

    const filtered = tradingFilter === 'All'
        ? TRADING_CIRCLES
        : TRADING_CIRCLES.filter(t => t.type === tradingFilter)

    return (
        <section className="section dashboard-section" id="dashboard">
            {/* Background orbs */}
            <div className="orb orb-violet" style={{ width: 500, height: 500, top: -80, left: '5%', opacity: 0.12 }} />
            <div className="orb orb-cyan" style={{ width: 400, height: 400, bottom: 0, right: '8%', opacity: 0.1 }} />
            <div className="orb orb-blue" style={{ width: 350, height: 350, top: '40%', left: '50%', opacity: 0.08 }} />

            <div className="container">

                {/* ── CONTINUE ── */}
                <SectionHeader
                    badge="Active Circles"
                    title="Continue"
                    highlight="Your Circles"
                    desc="Pick up right where you left off. Track contributions, upcoming payouts, and your position in each active circle."
                />
                <div className="db-grid db-grid--2">
                    {CONTINUE_CIRCLES.map(c => <ContinueCard key={c.id} c={c} />)}
                </div>

                {/* ── UPCOMING ── */}
                <SectionHeader
                    badge="Join Soon"
                    title="Upcoming"
                    highlight="Circles"
                    desc="Browse circles that haven't started yet. Claim your slot before they fill up — blockchain-secured from day one."
                />
                <div className="db-grid db-grid--3">
                    {UPCOMING_CIRCLES.map(u => <UpcomingCard key={u.id} u={u} />)}
                </div>

                {/* ── TRADING ── */}
                <SectionHeader
                    badge="Investment Circles"
                    title="Trading"
                    highlight="Circles"
                    desc="Explore pooled investment circles run by NGOs and organizations. Transparent returns, verified participants."
                />

                {/* Filter tabs */}
                <div className="db-filter-tabs">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`db-filter-tab ${tradingFilter === f ? 'db-filter-tab--active' : ''}`}
                            onClick={() => setTradingFilter(f)}
                        >
                            {f === 'NGO' ? '🤝 NGOs' : f === 'Org' ? '🏢 Organizations' : '✨ All'}
                        </button>
                    ))}
                </div>

                <div className="db-grid db-grid--2">
                    {filtered.map(t => <TradingCard key={t.id} t={t} />)}
                </div>

            </div>
        </section>
    )
}
