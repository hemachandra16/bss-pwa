import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import fansBg from '../assets/street_bg.png'
import './PhillyGuidePage.css'

export default function PhillyGuidePage() {
  const navigate = useNavigate()

  return (
    <div className="guide-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="guide-overlay">
        <div className="guide-container page-container">
          
          {/* HEADER */}
          <header className="guide-header">
            <div className="guide-header-title">PHILLY GUIDE</div>
            <div className="guide-avatar" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </header>

          <div className="guide-scroll-area">
            {/* HERO BANNER */}
            <div className="guide-hero">
              <h2>THE LOCAL LIFESTYLE HUB</h2>
              <p>Find Philly's hottest eateries, sports bars, and event spots before the game.</p>
            </div>

            {/* SECTION 1: EATERIES */}
            <section className="guide-section">
              <h3 className="guide-section-title">
                <span className="material-symbols-outlined">restaurant</span>
                HOTTEST EATERIES
              </h3>
              <div className="guide-card">
                <h4>Tony Luke's</h4>
                <p>Iconic spot for authentic Philly Cheesesteaks.</p>
              </div>
              <div className="guide-card">
                <h4>Reading Terminal Market</h4>
                <p>Historic public market with endless food options.</p>
              </div>
            </section>

            {/* SECTION 2: SPORTS BARS */}
            <section className="guide-section">
              <h3 className="guide-section-title">
                <span className="material-symbols-outlined">sports_bar</span>
                PRE-GAME BARS
              </h3>
              <div className="guide-card">
                <h4>Xfinity Live!</h4>
                <p>The ultimate entertainment center right in the stadium complex.</p>
              </div>
              <div className="guide-card">
                <h4>Chickie's & Pete's</h4>
                <p>Famous for Crabfries and massive sports viewing screens.</p>
              </div>
            </section>

            <div style={{height: '80px'}}></div>
          </div>

          <BottomNav />
        </div>
      </div>
    </div>
  )
}
