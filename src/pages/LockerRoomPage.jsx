import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import fansBg from '../assets/street_bg.png'
import bssLogo from '../assets/bss_logo_trans.png'
import './LockerRoomPage.css'

export default function LockerRoomPage() {
  const navigate = useNavigate()

  return (
    <div className="locker-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="locker-overlay">
        <div className="locker-container page-container">
          
          <div className="login-header-pattern"></div>
          
          <div className="locker-content-inner">
            {/* Top Logo and Title */}
            <div className="locker-header-top">
              <span className="material-symbols-outlined locker-top-icon">sports</span>
              <img src={bssLogo} alt="Broad Street Style" className="locker-logo" />
              <div className="locker-top-right">
                <span className="material-symbols-outlined locker-top-icon">sports</span>
                <span className="material-symbols-outlined locker-top-icon">star</span>
              </div>
            </div>

            <h1 className="locker-title">YOUR LOCKER</h1>

            {/* Section A */}
            <div className="locker-section">
              <h2 className="section-title">SECTION A: YOUR LOCKER (USER STATS)</h2>
              <div className="silver-card">
                <div className="user-profile-row">
                  <div className="avatar-circle" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
                    <span className="material-symbols-outlined avatar-icon">person</span>
                  </div>
                  <div className="user-info">
                    <span className="user-label">FAN NAME:</span>
                    <span className="user-name">PHILLYFAN_88</span>
                  </div>
                </div>
                
                <div className="stats-row">
                  <div className="stat-col">
                    <span className="stat-label">GRIT COINS:</span>
                    <div className="stat-value">
                      <span className="material-symbols-outlined stat-icon">monetization_on</span>
                      1,250
                    </div>
                  </div>
                  <div className="stat-col">
                    <span className="stat-label">STREET CRED:</span>
                    <div className="stat-value">
                      <span className="material-symbols-outlined stat-icon">shield</span>
                      VETERAN
                    </div>
                  </div>
                  <div className="stat-col">
                    <span className="stat-label">GAMES ATTENDED:</span>
                    <div className="stat-value">
                      <span className="material-symbols-outlined stat-icon">calendar_month</span>
                      14
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section B */}
            <div className="locker-section">
              <h2 className="section-title">SECTION B: THE SCOUTING REPORT (POST-GAME)</h2>
              <div className="silver-card">
                <h3 className="card-headline">LAST GAME: EAGLES vs. COWBOYS</h3>
                <div className="scouting-details">
                  <p><strong>Final Score:</strong> 31-28</p>
                  <p><strong>Top Rage Post:</strong> @VENT_KING's Take (120 upvotes)</p>
                  <p><strong>Referee Recap:</strong> Summary io: Eagles vs gane in this mlom to carry recaps in 3 cowboys)</p>
                </div>
              </div>
            </div>

            {/* Section C */}
            <div className="locker-section">
              <h2 className="section-title">SECTION C: THE PLAYBOOK (INSTRUCTIONS)</h2>
              <div className="silver-card playbook-card">
                <ol className="playbook-list">
                  <li>JOIN LIVE GAME VENT ROOMS</li>
                  <li>KEEP IT HIGH ENERGY, NO HARASSMENT</li>
                  <li>EARN GRIT COINS FOR ENGAGEMENT</li>
                  <li>TOP VENTERS LEVEL UP STREET CRED</li>
                </ol>
                <div className="referee-placeholder">
                  <span className="material-symbols-outlined">sports</span>
                </div>
              </div>
            </div>

            {/* Extra padding to scroll past BottomNav */}
            <div style={{ height: '80px' }}></div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
