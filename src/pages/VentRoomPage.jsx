import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import './VentRoomPage.css'

export default function VentRoomPage() {
  const navigate = useNavigate()
  const [ventInput, setVentInput] = useState('')

  return (
    <div className="ventroom page-container">
      {/* HEADER */}
      <header className="vr-header-new">
        <button className="vr-back-arrow" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="vr-title-container">
          <div className="vr-title-main">BSS: THE VENT ROOM</div>
        </div>
        <div className="vr-avatar-new">
          <span className="material-symbols-outlined">person</span>
        </div>
      </header>

      {/* GRIT STATS */}
      <div className="vr-grit-stats">
        <div className="vr-grit-header">
          <span className="vr-grit-label">GRIT COUNTER</span>
          <span className="vr-grit-points">GRIT POINTS: 1450</span>
        </div>
        <div className="vr-grit-multiplier">
          <div className="vr-grit-red-flag">
            <span className="material-symbols-outlined vr-flag-icon">sports_score</span>
          </div>
          <span className="vr-grit-multiplier-text">2x GRIT (EAGLES PLAYOFF MODE ACTIVE)</span>
        </div>
      </div>

      {/* CHAT INTERFACE */}
      <section className="vr-chat-interface">
        
        {/* Message 1 */}
        <div className="vr-chat-message">
          <div className="vr-chat-avatar-wrapper">
             <div className="vr-chat-avatar">
               <span className="material-symbols-outlined">person</span>
             </div>
          </div>
          <div className="vr-chat-content">
            <div className="vr-chat-meta">
              <span className="vr-chat-author">PhillyFan_88</span>
              <span className="vr-chat-time">14:32</span>
            </div>
            <div className="vr-chat-text">Grit is everything!</div>
          </div>
        </div>

        {/* Referee Message */}
        <div className="vr-chat-message vr-referee-message">
          <div className="vr-chat-avatar-wrapper">
             <div className="vr-referee-avatar">
               <span className="material-symbols-outlined">sports</span>
             </div>
          </div>
          <div className="vr-chat-content">
            <div className="vr-chat-meta">
              <span className="vr-chat-author vr-referee-author">The Referee</span>
              <span className="vr-chat-bot-tag">AI bot</span>
            </div>
            <div className="vr-chat-text vr-referee-text">Unsportsmanlike conduct. Yellow Flag. 1 Quarter Cooldown.</div>
          </div>
        </div>

        {/* Message 3 */}
        <div className="vr-chat-message">
          <div className="vr-chat-avatar-wrapper">
             <div className="vr-chat-avatar">
               <span className="material-symbols-outlined">person</span>
             </div>
          </div>
          <div className="vr-chat-content">
            <div className="vr-chat-meta">
              <span className="vr-chat-author">Eagles_Forever</span>
              <span className="vr-chat-time">14:32</span>
            </div>
            <div className="vr-chat-text">Flyers looking tough this year!</div>
          </div>
        </div>

        {/* Message 4 */}
        <div className="vr-chat-message">
          <div className="vr-chat-avatar-wrapper">
             <div className="vr-chat-avatar">
               <span className="material-symbols-outlined">person</span>
             </div>
          </div>
          <div className="vr-chat-content">
            <div className="vr-chat-meta">
              <span className="vr-chat-author">FlyersGrit_24</span>
              <span className="vr-chat-time">14:33</span>
            </div>
            <div className="vr-chat-text">Watch it! That was a foul!</div>
          </div>
        </div>

        {/* Message 5 */}
        <div className="vr-chat-message">
          <div className="vr-chat-avatar-wrapper">
             <div className="vr-chat-avatar">
               <span className="material-symbols-outlined">person</span>
             </div>
          </div>
          <div className="vr-chat-content">
            <div className="vr-chat-meta">
              <span className="vr-chat-author">PhillyFan_88</span>
              <span className="vr-chat-time">14:33</span>
            </div>
            <div className="vr-chat-text">Go Birds!</div>
          </div>
        </div>

      </section>

      {/* Active Venters Sidebar / Floating Panel */}
      <div className="vr-active-venters">
        <div className="vr-av-title">ACTIVE VENTERS</div>
        <div className="vr-av-list">
          <div className="vr-av-item" onClick={() => setVentInput('The Referee')} style={{cursor: 'pointer'}}>
            <div className="vr-referee-avatar vr-av-avatar"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>sports</span></div>
            <span className="vr-av-name">The Referee</span>
          </div>
          <div className="vr-av-item" onClick={() => setVentInput('Eagles_Forever')} style={{cursor: 'pointer'}}>
            <div className="vr-chat-avatar vr-av-avatar"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>person</span></div>
            <span className="vr-av-name">Eagles_Forever</span>
          </div>
          <div className="vr-av-item" onClick={() => setVentInput('FlyersGrit_24')} style={{cursor: 'pointer'}}>
            <div className="vr-chat-avatar vr-av-avatar"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>person</span></div>
            <span className="vr-av-name">FlyersGrit_24</span>
          </div>
          <div className="vr-av-item" onClick={() => setVentInput('PhillyFan_88')} style={{cursor: 'pointer'}}>
            <div className="vr-chat-avatar vr-av-avatar"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>person</span></div>
            <span className="vr-av-name">PhillyFan_88</span>
          </div>
        </div>
      </div>

      {/* INPUT AREA */}
      <section className="vr-input-section-new">
        <div className="vr-input-wrapper-new">
          <input 
            type="text" 
            placeholder="Vent your thoughts..." 
            className="vr-input-new" 
            value={ventInput}
            onChange={(e) => setVentInput(e.target.value)}
          />
          <button className="vr-post-btn-new" onClick={() => setVentInput('')}>POST</button>
        </div>
      </section>

      <BottomNav />
    </div>
  )
}
