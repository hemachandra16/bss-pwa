import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './TailgateRoomPage.css'
import phillyFootball from '../assets/philly_football.png'

export default function TailgateRoomPage() {
  const navigate = useNavigate()

  return (
    <div className="tailgate-screen page-container">
      {/* HEADER */}
      <header className="tg-header">
        <div className="tg-header-left">
          <div className="tg-avatar" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="tg-user-info">
            <span className="tg-user-role">COMMISSIONER</span>
            <span className="tg-user-name">DAMIAN</span>
            <span className="tg-user-badge">(ADMIN)</span>
          </div>
        </div>
        <div className="tg-header-icons">
          <div className="tg-icon-btn" onClick={() => navigate('/picket-line')}>
            <span className="material-symbols-outlined">notifications</span>
            <span className="tg-icon-label">PICKET LINE<br/>(NEWS)</span>
          </div>
          <div className="tg-icon-btn active">
            <span className="material-symbols-outlined">stadium</span>
            <span className="tg-icon-label">TAILGATE<br/>ROOM</span>
          </div>
        </div>
      </header>

      {/* BANNER */}
      <div className="tg-banner">
        <span className="tg-banner-title">THE TAILGATE ROOM:</span>
        <span className="tg-banner-subtitle">PHILLY Gameday Hype & Meetups</span>
      </div>

      <div className="tg-scroll-area">
        {/* POST 1 */}
        <div className="tg-post-card">
          <div className="tg-post-header">
            <div className="tg-post-user">
              <span className="material-symbols-outlined tg-team-icon phillies-color">sports_baseball</span>
              <span className="tg-handle">@PhilliesPhanATIC</span>
            </div>
            <div className="tg-post-location">Lot K</div>
          </div>
          
          <div className="tg-post-media">
            <img src={phillyFootball} alt="Tailgate Spread" className="tg-media-img" />
          </div>
          
          <div className="tg-post-content">
            <div className="tg-post-title">THE SPREAD IS READY!</div>
            <div className="tg-post-text">Swing by Pole 14 in Lot K! Go Birds!</div>
            <div className="tg-post-actions">
              <span className="material-symbols-outlined">notifications</span>
              <span className="material-symbols-outlined">sports_bar</span>
            </div>
          </div>
        </div>

        {/* POST 2 */}
        <div className="tg-post-card">
          <div className="tg-post-header">
            <div className="tg-post-user">
              <span className="material-symbols-outlined tg-team-icon sixers-color">sports_basketball</span>
              <span className="tg-handle">@SixersUltra</span>
            </div>
            <div className="tg-post-location">Section 104</div>
          </div>
          
          <div className="tg-post-media video-placeholder">
            <div className="tg-video-overlay">
              <span className="material-symbols-outlined play-icon">play_circle</span>
            </div>
            <span className="material-symbols-outlined refresh-icon">sync</span>
          </div>
          
          <div className="tg-post-content">
            <div className="tg-post-title">THE PRE-GAME CHANT</div>
            <div className="tg-post-text">SIXERS vs CELTICS. LET'S GO!</div>
          </div>
        </div>
        
        {/* Extra spacing for fab and nav */}
        <div style={{height: '100px'}}></div>
      </div>

      {/* FLOATING ACTION BUTTON */}
      <button className="tg-fab">
        <span className="material-symbols-outlined tg-fab-icon">add</span>
        <span className="tg-fab-text">UPLOAD PHOTO<br/>or VIDEO<br/><small>(Up to 5 Min)</small></span>
      </button>

      {/* BOTTOM NAV */}
      <BottomNav />
    </div>
  )
}
