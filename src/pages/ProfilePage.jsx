import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fansBg from '../assets/street_bg.png'
import './ProfilePage.css'

export default function ProfilePage() {
  const navigate = useNavigate()
  
  // State for toggles
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [pushEnabled, setPushEnabled] = useState(true)

  return (
    <div className="profile-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="profile-overlay">
        <div className="profile-container page-container">
          
          {/* HEADER */}
          <header className="profile-header">
            <span 
              className="material-symbols-outlined back-arrow"
              onClick={() => navigate(-1)}
            >
              arrow_back
            </span>
            <div className="profile-logo-text">BROAD STREET STYLE</div>
            <span 
              className="material-symbols-outlined logout-icon"
              onClick={() => navigate('/')}
              title="Logout"
            >
              logout
            </span>
          </header>

          <div className="profile-scroll-area">
            {/* AVATAR */}
            <div className="profile-avatar-section">
              <div className="profile-large-avatar">
                <span className="material-symbols-outlined avatar-person">person</span>
                <div className="avatar-edit-badge">
                  <span className="material-symbols-outlined">edit</span>
                </div>
              </div>
              <h1 className="profile-title">FAN PROFILE</h1>
            </div>

            {/* FORM SECTIONS */}
            <div className="profile-form">
              
              {/* SECTION A */}
              <div className="profile-section-label">
                <div className="section-letter">A</div>
                <span>FAN IDENTITY SETUP</span>
              </div>
              <div className="profile-card">
                <div className="form-row">
                  <div className="form-group half">
                    <label>FIRST NAME</label>
                    <input type="text" placeholder="FIRST NAME" />
                  </div>
                  <div className="form-group half">
                    <label>LAST NAME</label>
                    <input type="text" placeholder="LAST NAME" />
                  </div>
                </div>
                <div className="form-group full">
                  <input type="text" placeholder="PUBLIC HANDLE (USERNAME)" className="red-border-input" />
                </div>
              </div>

              {/* SECTION B */}
              <div className="profile-section-label">
                <div className="section-letter">B</div>
                <span>CONTACT INFORMATION <span className="material-symbols-outlined info-icon">info</span></span>
              </div>
              <div className="profile-card">
                <div className="form-group full">
                  <label>PHONE NUMBER (OPTIONAL)</label>
                  <input type="tel" placeholder="+1 (215) 555-1234" />
                </div>
                <div className="form-group full">
                  <input type="email" placeholder="EMAIL ADDRESS" />
                </div>
              </div>

              {/* SECTION C */}
              <div className="profile-section-label">
                <div className="section-letter">C</div>
                <span>COMMUNICATION PREFERENCES</span>
              </div>
              <div className="profile-card toggles-card">
                <div className="toggle-row">
                  <label className="toggle-label">[SMS TEXT NOTIFICATIONS]</label>
                  <div 
                    className={`toggle-switch ${smsEnabled ? 'active' : ''}`}
                    onClick={() => setSmsEnabled(!smsEnabled)}
                  >
                  </div>
                </div>
                <div className="toggle-row">
                  <label className="toggle-label">[APP PUSH NOTIFICATIONS]</label>
                  <div 
                    className={`toggle-switch ${pushEnabled ? 'active' : ''}`}
                    onClick={() => setPushEnabled(!pushEnabled)}
                  >
                  </div>
                </div>
              </div>

              {/* SECTION D */}
              <div className="profile-section-label">
                <div className="section-letter">D</div>
                <span>USERNAME SHIELD & MODERATION <span className="material-symbols-outlined warning-icon">warning</span></span>
              </div>

              {/* CTA BUTTON */}
              <button className="profile-cta-btn">CLAIM YOUR GRIT AND JOIN!</button>
              
              <div style={{height: '40px'}}></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
