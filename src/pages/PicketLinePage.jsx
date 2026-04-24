import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './PicketLinePage.css'

export default function PicketLinePage() {
  const navigate = useNavigate()

  return (
    <div className="picketline page-container">
      {/* HEADER */}
      <header className="pl-header-new">
        <div className="pl-header-left-new">
          <div className="pl-avatar-new" onClick={() => navigate('/profile')} style={{cursor: 'pointer'}}>
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="pl-header-text-new">
            <div className="pl-header-name">COMMISSIONER DAMIAN</div>
            <div className="pl-header-role">(ADMIN)</div>
          </div>
        </div>
        <button className="pl-refresh-btn">
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </header>

      {/* SUB-HEADER BANNER */}
      <div className="pl-sub-header">
        <div className="pl-sub-header-text">THE PICKET LINE:<br/>24/7 PHILLY NEWS AGGREGATION</div>
        <button className="pl-refresh-btn-large">
          <span className="material-symbols-outlined">sync</span>
        </button>
      </div>

      <section className="pl-feed-new">

        {/* BREAKING NEWS CARD */}
        <div className="pl-breaking-card">
          <div className="pl-breaking-header">
            <div className="pl-breaking-icon">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div className="pl-breaking-title">BREAKING NEWS</div>
          </div>
          <div className="pl-source-tag">[NBC Sports Philly]</div>
          <div className="pl-breaking-headline">TRADE RUMOR: 76ERS TARGET ALL-STAR GUARD.</div>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="pl-grid-2col">
          <div className="pl-grid-card">
            <div className="pl-grid-card-header">
              <div className="pl-grid-icon">
                <span className="material-symbols-outlined">newspaper</span>
              </div>
              <div className="pl-grid-source">[PhillyVoice]</div>
            </div>
            <div className="pl-grid-headline">EAGLES DRAFT EVALUATION</div>
            <div className="pl-grid-author">[SOURCE: EKINCI]</div>
          </div>
          
          <div className="pl-grid-card">
            <div className="pl-grid-card-header">
              <div className="pl-grid-icon">
                <span className="material-symbols-outlined">sports_baseball</span>
              </div>
              <div className="pl-grid-source">[Crossing Broad]</div>
            </div>
            <div className="pl-grid-headline">PHILLIES SWEEP METS!</div>
            <div className="pl-grid-author">[SOURCE: ANDERSON]</div>
          </div>
        </div>

        {/* LIST VIEW ITEMS */}
        <div className="pl-list-item">
          <div className="pl-list-content">
            <div className="pl-list-header">
              <div className="pl-list-icon">
                <span className="material-symbols-outlined">article</span>
              </div>
              <div className="pl-list-source">[The Inquirer]</div>
            </div>
            <div className="pl-list-headline">2026 WORLD CUP IN PHILLY: TRANSPORT GUIDE</div>
            <div className="pl-list-author">[SOURCE: SNYDER]</div>
          </div>
          <div className="pl-list-image-placeholder">
            {/* Using background color instead of image for placeholder */}
          </div>
        </div>

        <div className="pl-list-item">
          <div className="pl-list-content">
            <div className="pl-list-header">
              <div className="pl-list-icon">
                <span className="material-symbols-outlined">sports_soccer</span>
              </div>
              <div className="pl-list-source">[Union PR]</div>
            </div>
            <div className="pl-list-headline">Union Draw 2-2 vs NYCFC</div>
            <div className="pl-list-author">[SOURCE: UNION]</div>
          </div>
          <div className="pl-list-image-placeholder" style={{backgroundColor: '#004C54'}}>
            {/* Using background color instead of image for placeholder */}
          </div>
        </div>

        <button className="pl-load-more-new">LOAD MORE NEWS</button>
      </section>

      <BottomNav />
    </div>
  )
}
