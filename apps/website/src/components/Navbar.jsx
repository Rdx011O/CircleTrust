import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { label: 'Problem', href: '#problem' },
        { label: 'How It Works', href: '#how' },
        { label: 'Features', href: '#features' },
        { label: 'Tech', href: '#tech' },
        { label: 'Impact', href: '#impact' },
    ]

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="container nav-inner">
                    {/* Logo */}
                    <a href="#" className="nav-logo">
                        <div className="nav-logo-icon">⬡</div>
                        Circle<span className="gradient-text">Trust</span>
                    </a>

                    {/* Desktop links */}
                    <ul className="nav-links">
                        {links.map(l => (
                            <li key={l.href}><a href={l.href}>{l.label}</a></li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="nav-actions">
                        <a href="/register" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
                            Join the Circle →
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : '' }} />
                        <span style={{ opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : '' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
                {links.map(l => (
                    <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
                ))}
                <a href="/register" onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{ marginTop: 8 }}>
                    Join the Circle →
                </a>
            </div>
        </>
    )
}
