/**
 * HomeBasePage.jsx
 * Source: Stitch screen "Home Base - Client Source of Truth Version"
 *         (5ba508dad5eb492f9ededea130a69f01) — mobile
 *         (4690867cbd8e45118b88eac6653910f7) — desktop
 *
 * Sections:
 *   1. Welcome Header + Grit Meter
 *   2. Real-Time Scoreboard
 *   3. The Vent Room (CTA)
 *   4. The Tailgate Room (CTA)
 *   5. Bottom Nav (The Concourse)
 */
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BottomNav from '../components/BottomNav'
import bssLogo from '../assets/bss_logo.png'
import './HomeBasePage.css'

/* Fake live scores for prototype */
const liveScores = [
  { id: 1, sport: 'NFL', away: 'DAL', home: 'PHI', awayScore: 17, homeScore: 28, quarter: 'Q3 · 4:12', live: true },
  { id: 2, sport: 'NBA', away: 'BOS', home: 'PHI', awayScore: 94, homeScore: 101, quarter: 'Q4 · 2:30', live: true },
  { id: 3, sport: 'NHL', away: 'NYR', home: 'PHI', awayScore: 2, homeScore: 3, quarter: 'P2 · 8:45', live: true },
  { id: 4, sport: 'MLB', away: 'ATL', home: 'PHI', awayScore: 3, homeScore: 5, quarter: 'B7', live: false },
]

export default function HomeBasePage() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const displayName = user?.name || 'Commissioner'

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="homebase">
      {/* ── HEADER ────────────────────────────────────────────── */}
      <header className="hb-header">
        <div className="hb-header__top">
          <img src={bssLogo} alt="BSS" className="hb-header__logo" />
          <button
            id="btn-logout"
            className="hb-logout-btn"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        <h1 className="hb-welcome">
          WELCOME,<br />
          <span className="hb-welcome__name">{displayName.toUpperCase()}.</span>
        </h1>

        {/* Grit Meter */}
        <div className="hb-grit">
          <div className="hb-grit__header">
            <span className="hb-grit__label">YOUR GRIT METER</span>
            <span className="hb-grit__value">72 / 100</span>
          </div>
          <div className="hb-grit__track">
            <div className="hb-grit__fill" style={{ width: '72%' }} />
          </div>
        </div>
      </header>

      {/* ── SCOREBOARD ────────────────────────────────────────── */}
      <section className="hb-section" id="scoreboard">
        <h2 className="hb-section__title">
          <span className="hb-section__icon">📊</span>
          REAL-TIME SCOREBOARD
        </h2>
        <div className="hb-scores">
          {liveScores.map(g => (
            <div key={g.id} className={`hb-score-card${g.live ? ' hb-score-card--live' : ''}`}>
              <div className="hb-score-card__badge">
                {g.live && <span className="hb-live-dot" />}
                <span className="hb-score-card__sport">{g.sport}</span>
                <span className="hb-score-card__time">{g.quarter}</span>
              </div>
              <div className="hb-score-card__teams">
                <div className="hb-score-card__team">
                  <span className="hb-score-card__abbr">{g.away}</span>
                  <span className="hb-score-card__score">{g.awayScore}</span>
                </div>
                <span className="hb-score-card__vs">vs</span>
                <div className="hb-score-card__team hb-score-card__team--home">
                  <span className="hb-score-card__abbr">{g.home}</span>
                  <span className="hb-score-card__score">{g.homeScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VENT ROOM ─────────────────────────────────────────── */}
      <section className="hb-section" id="vent-room-section">
        <div className="hb-cta-card hb-cta-card--vent" onClick={() => navigate('/vent-room')}>
          <div className="hb-cta-card__icon">🔥</div>
          <div className="hb-cta-card__content">
            <h3 className="hb-cta-card__title">THE VENT ROOM</h3>
            <p className="hb-cta-card__sub">Let it out. No judgment. Raw takes only.</p>
          </div>
          <span className="hb-cta-card__arrow">→</span>
        </div>
      </section>

      {/* ── TAILGATE ROOM ─────────────────────────────────────── */}
      <section className="hb-section" id="tailgate-room-section">
        <div className="hb-cta-card hb-cta-card--tailgate" onClick={() => navigate('/tailgate-room')}>
          <div className="hb-cta-card__icon">🍻</div>
          <div className="hb-cta-card__content">
            <h3 className="hb-cta-card__title">THE TAILGATE ROOM</h3>
            <p className="hb-cta-card__sub">Pre-game hype. Recipes. Meet up.</p>
          </div>
          <span className="hb-cta-card__arrow">→</span>
        </div>
      </section>

      {/* ── Quick Links ───────────────────────────────────────── */}
      <section className="hb-section hb-quick-links" id="quick-links">
        <h2 className="hb-section__title">QUICK LINKS</h2>
        <div className="hb-links-grid">
          <button className="hb-link-card" onClick={() => navigate('/concourse')}>
            <span className="material-symbols-outlined">stadium</span>
            <span>Concourse</span>
          </button>
          <button className="hb-link-card" onClick={() => navigate('/vent-room')}>
            <span className="material-symbols-outlined">local_fire_department</span>
            <span>Vent Room</span>
          </button>
          <button className="hb-link-card" onClick={() => navigate('/tailgate-room')}>
            <span className="material-symbols-outlined">sports_bar</span>
            <span>Tailgate</span>
          </button>
          <button className="hb-link-card">
            <span className="material-symbols-outlined">inventory_2</span>
            <span>Locker Room</span>
          </button>
        </div>
      </section>

      {/* Spacer for bottom nav */}
      <div className="hb-nav-spacer" />
      <BottomNav />
    </div>
  )
}
