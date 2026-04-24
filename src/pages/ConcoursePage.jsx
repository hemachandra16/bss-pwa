import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './ConcoursePage.css'

import phillyFootball from '../assets/philly_football.png'
import phillyBaseball from '../assets/philly_baseball.png'
import phillyHockey from '../assets/philly_hockey.png'
import phillyBasketball from '../assets/philly_basketball.png'

export default function ConcoursePage() {
  const navigate = useNavigate()

  return (
    <div className="concourse-screen page-container">
      {/* HEADER */}
      <header className="cc-header">
        <div className="cc-header-title">BSS: THE CONCOURSE</div>
        <div className="cc-avatar" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </header>

      <div className="cc-scroll-area">
        {/* COMMUNITIES */}
        <section className="cc-section">
          <h2 className="cc-section-title">The Concourse (Communities)</h2>
          <div className="cc-communities-grid">
            <button className="cc-team-card eagles-border" onClick={() => navigate('/vent-room')}>
              <div className="cc-team-logo-placeholder">
                <img src={phillyFootball} alt="Philly Football" className="cc-team-logo-img" />
              </div>
              <span className="cc-team-name">EAGLES</span>
            </button>
            <button className="cc-team-card phillies-border" onClick={() => navigate('/vent-room')}>
              <div className="cc-team-logo-placeholder">
                <img src={phillyBaseball} alt="Philly Baseball" className="cc-team-logo-img" />
              </div>
              <span className="cc-team-name">PHILLIES</span>
            </button>
            <button className="cc-team-card flyers-border" onClick={() => navigate('/vent-room')}>
              <div className="cc-team-logo-placeholder">
                <img src={phillyHockey} alt="Philly Hockey" className="cc-team-logo-img" />
              </div>
              <span className="cc-team-name">FLYERS</span>
            </button>
            <button className="cc-team-card union-border" onClick={() => navigate('/vent-room')}>
              <div className="cc-team-logo-placeholder">
                <img src={phillyBasketball} alt="Philly Basketball" className="cc-team-logo-img" />
              </div>
              <span className="cc-team-name">SIXERS</span>
            </button>
          </div>
        </section>

        {/* BOX OFFICE */}
        <section className="cc-section">
          <div className="cc-box-office-title">BOX OFFICE</div>
          <div className="cc-tickets-list">
            <div className="cc-ticket-item">
              <span className="material-symbols-outlined cc-ticket-sport-icon">sports_football</span>
              <div className="cc-ticket-info">
                <div className="cc-ticket-matchup">EAGLES vs. GIANTS</div>
                <div className="cc-ticket-date">- Oct 22</div>
              </div>
              <button className="cc-buy-btn">BUY TICKETS</button>
            </div>

            <div className="cc-ticket-item">
              <span className="material-symbols-outlined cc-ticket-sport-icon">sports_baseball</span>
              <div className="cc-ticket-info">
                <div className="cc-ticket-matchup">PHILLIES vs. METS</div>
                <div className="cc-ticket-date">- Oct 28</div>
              </div>
              <button className="cc-buy-btn">BUY TICKETS</button>
            </div>

            <div className="cc-ticket-item">
              <span className="material-symbols-outlined cc-ticket-sport-icon">sports_hockey</span>
              <div className="cc-ticket-info">
                <div className="cc-ticket-matchup">FLYERS vs. CAPITALS</div>
                <div className="cc-ticket-date">- Nov 3</div>
              </div>
              <button className="cc-buy-btn">BUY TICKETS</button>
            </div>

            <div className="cc-ticket-item">
              <span className="material-symbols-outlined cc-ticket-sport-icon">sports_soccer</span>
              <div className="cc-ticket-info">
                <div className="cc-ticket-matchup">UNION vs. NYCFC</div>
                <div className="cc-ticket-date">- Nov 10</div>
              </div>
              <button className="cc-buy-btn">BUY TICKETS</button>
            </div>
          </div>

          <button className="cc-filter-btn">FILTER TICKET EVENTS</button>
        </section>
        
        {/* Padding for bottom nav */}
        <div style={{ height: '80px' }}></div>
      </div>

      <BottomNav />
    </div>
  )
}
