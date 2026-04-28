import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './HomeBasePage.css'

export default function HomeBasePage() {
  const navigate = useNavigate()

  return (
    <div className="homebase page-container">
      {/* HEADER */}
      <header className="hb-header">
        <div className="hb-header-left">
          <div className="hb-avatar" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="hb-welcome-text">
            <div className="hb-welcome-line1">WELCOME,</div>
            <div className="hb-welcome-line2">COMMISSIONER<br/>DAMIAN.</div>
          </div>
        </div>
        <div className="hb-grit-meter">
          <div className="hb-grit-chart">
            {/* Simple CSS representation of the sparkline chart from mockup */}
            <svg viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0,30 L0,20 L10,15 L20,22 L30,10 L40,18 L50,5 L60,12 L70,8 L80,2 L90,10 L100,0 L100,30 Z" fill="#D22B2B" opacity="0.8"/>
              <polyline points="0,20 10,15 20,22 30,10 40,18 50,5 60,12 70,8 80,2 90,10 100,0" fill="none" stroke="#ff4d4d" strokeWidth="2"/>
            </svg>
          </div>
          <div className="hb-grit-label">1,250 GRIT COINS</div>
        </div>
      </header>

      {/* SCOREBOARD */}
      <section className="hb-scoreboard-container">
        <div className="hb-scoreboard-title">
          REAL-TIME SCOREBOARD
        </div>
        
        <div className="hb-scoreboard-content">
          {/* Game 1 */}
          <div className="hb-game hb-game-featured">
            <div className="hb-game-header">
              <span className="hb-team-name">PHILLIES</span>
              <span className="hb-game-status hb-status-live">(LIVE - 4th)</span>
            </div>
            <div className="hb-score-large">3 - 1</div>
            <div className="hb-team-name-sub">NY METS</div>
          </div>
          
          <div className="hb-divider"></div>
          
          {/* Game 2 */}
          <div className="hb-game hb-game-row">
            <div className="hb-team-name">PHILLY SOCCER <span className="hb-status-muted">(FINAL)</span></div>
            <div className="hb-score-small">2 - 2 <span className="hb-status-muted">(Draw)</span></div>
          </div>
          
          <div className="hb-divider"></div>
          
          {/* Game 3 */}
          <div className="hb-game hb-game-col">
            <div className="hb-status-muted">WORLD CUP (PRE-GAME)</div>
            <div className="hb-matchup">
              <span className="hb-team-name">USA</span> vs <span className="hb-team-name">ENGLAND</span> <span className="hb-status-muted">(In 3h 12m)</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY ENTRY */}
      <section className="hb-community-cards">
        <button className="hb-card" onClick={() => navigate('/vent-room')}>
          <div className="hb-card-top">COMMUNITY ENTRY</div>
          <div className="hb-card-title">THE VENT<br/>ROOM</div>
          <div className="hb-card-icon hb-card-icon-red">
            <span className="material-symbols-outlined icon-large">flag</span>
          </div>
          <div className="hb-card-footer">
            <span className="material-symbols-outlined icon-small">lock</span>
            <span>LOGIN REQUIRED TO<br/>ENTER COMMUNITY</span>
          </div>
        </button>

        <button className="hb-card" onClick={() => navigate('/concourse')}>
          <div className="hb-card-top">COMMUNITY ENTRY</div>
          <div className="hb-card-title">THE TAILGATE</div>
          <div className="hb-card-icons">
            <span className="material-symbols-outlined icon-large hb-icon-red">outdoor_grill</span>
            <span className="material-symbols-outlined icon-large hb-icon-yellow">sports_bar</span>
          </div>
          <div className="hb-card-footer">
            <span className="material-symbols-outlined icon-small">lock</span>
            <span>LOGIN REQUIRED TO<br/>ENTER COMMUNITY</span>
          </div>
        </button>
      </section>

      <BottomNav />
    </div>
  )
}
