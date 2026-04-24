import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fansBg from '../assets/street_bg.png'
import bssLogo from '../assets/bss_logo.png'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleDummyLogin = () => {
    navigate('/home')
  }

  return (
    <div className="login-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="login-overlay">
        <div className="login-container">
          
          <div className="login-header-pattern"></div>
          
          <div className="login-content-inner">
            <img src={bssLogo} alt="Broad Street Style" className="login-logo-new" />
            
            <h1 className="login-title-new">ENTER THE TUNNEL</h1>

            <div className="login-lane-new">
              <span className="lane-text-new">Fast Lane</span>
            </div>
            
            <button className="sso-btn-new sso-google-new" onClick={handleDummyLogin}>
              <div className="sso-icon-wrapper google-wrapper">
                <span className="google-g">G</span>
              </div>
              Continue with Google
            </button>
            
            <button className="sso-btn-new sso-facebook-new" onClick={handleDummyLogin}>
              <div className="sso-icon-wrapper fb-wrapper">
                <span className="fb-f">f</span>
              </div>
              Continue with Facebook
            </button>

            <div className="login-divider-new">
              <span className="divider-line-new"></span>
              <span className="divider-text-new">OR</span>
              <span className="divider-line-new"></span>
            </div>

            <div className="login-lane-new">
              <span className="lane-text-new">Manual Lane</span>
            </div>
            
            <div className="input-group-new">
              <label className="input-label-new">USERNAME / EMAIL</label>
              <input 
                type="text" 
                className="login-input-new" 
                placeholder="USERNAME / EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group-new">
              <label className="input-label-new">PASSWORD</label>
              <input 
                type="password" 
                className="login-input-new" 
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="enter-stadium-btn" onClick={handleDummyLogin}>
              ENTER STADIUM
            </button>

            <div className="login-links-new">
              <div className="link-group-new">
                <span className="link-script">New Fan?</span> <span className="link-bold" onClick={() => navigate('/signup')} style={{cursor:'pointer'}}>SIGN UP</span>
              </div>
              <div className="link-group-new right-align">
                <span className="link-script" style={{cursor:'pointer'}}>Forgot Credentials?</span>
                <span className="link-script" style={{cursor:'pointer'}}>(Recover Playbook)</span>
              </div>
            </div>

            <div className="login-footer-new">
              <strong>FREE AGENT POLICY:</strong> Community access is 100% FREE.<br/>
              Registration is required only to track your GRIT points, earn<br/>
              rewards, and secure your spot in the Vent Room.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
