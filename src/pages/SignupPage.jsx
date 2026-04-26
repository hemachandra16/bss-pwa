import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import fansBg from '../assets/street_bg.png'
import bssLogo from '../assets/bss_logo_trans.png'
import './LoginPage.css' // Reusing LoginPage CSS for identical structure

export default function SignupPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleDummySignup = () => {
    navigate('/home')
  }

  return (
    <div className="login-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="login-overlay">
        <div className="login-container">
          
          <div className="login-header-pattern"></div>
          
          <div className="login-content-inner">
            <img src={bssLogo} alt="Broad Street Style" className="login-logo-new" />
            
            <h1 className="login-title-new">NEW FAN SIGN UP</h1>

            <div className="login-lane-new">
              <span className="lane-text-new">Fast Lane</span>
            </div>
            
            <button className="sso-btn-new sso-google-new" onClick={handleDummySignup}>
              <div className="sso-icon-wrapper google-wrapper">
                <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>
              Sign up with Google
            </button>
            
            <button className="sso-btn-new sso-facebook-new" onClick={handleDummySignup}>
              <div className="sso-icon-wrapper fb-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              Sign up with Facebook
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
              <label className="input-label-new">USERNAME</label>
              <input 
                type="text" 
                className="login-input-new" 
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group-new">
              <label className="input-label-new">EMAIL</label>
              <input 
                type="email" 
                className="login-input-new" 
                placeholder="EMAIL"
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

            <button className="enter-stadium-btn" onClick={handleDummySignup}>
              CREATE ACCOUNT
            </button>

            <div className="login-links-new">
              <div className="link-group-new">
                <span className="link-script">Already a Fan?</span> <span className="link-bold" onClick={() => navigate('/')} style={{cursor:'pointer'}}>SIGN IN</span>
              </div>
            </div>

            <div className="login-footer-new">
              <strong>FREE AGENT POLICY:</strong> Community access is 100% FREE.<br/>
              Registration is required only to track your GRIT coins, earn<br/>
              rewards, and secure your spot in the Vent Room.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
