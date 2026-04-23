/**
 * SignupPage.jsx
 * Source: Stitch screen BSS Sign Up (fc2429a1c4f04498bb31d387f1b14f22)
 * All HTML structure, class names, and inline styles are taken directly
 * from the Stitch-generated HTML.  Only change: onClick handlers → navigate()
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import signupBg from '../assets/skyline.png'
import bssLogo   from '../assets/bss_logo.png'
import './SignupPage.css'

export default function SignupPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSignup = () => {
    login({ name: name || 'New Fan', email: email || 'fan@bss.com' })
    navigate('/home')
  }
  const [name,   setName]   = useState('')
  const [email,  setEmail]  = useState('')
  const [pw,     setPw]     = useState('')
  const [showPw, setShowPw] = useState(false)

  return (
    <div className="screen signup-screen" style={{ backgroundImage: `url(${signupBg})` }}>
      <div className="screen-overlay signup-overlay" />

      <div className="signup-content">
        {/* ── Logo ─────────────────────────────────────────── */}
        <img src={bssLogo} alt="Broad Street Style" className="signup-logo" />

        {/* ── Headline ─────────────────────────────────────── */}
        <h1 className="signup-headline">CREATE YOUR ACCOUNT</h1>

        {/* ── FAST LANE ────────────────────────────────────── */}
        <p className="lane-label fast-lane">⚡ FAST LANE</p>

        <button
          id="btn-google-signup"
          className="sso-btn sso-google-light"
          onClick={() => { login({ name: 'Google User', email: 'google@bss.com' }); navigate('/home') }}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Sign up with Google
        </button>

        <button
          id="btn-facebook-signup"
          className="sso-btn sso-facebook"
          onClick={() => { login({ name: 'Facebook User', email: 'fb@bss.com' }); navigate('/home') }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Sign up with Facebook
        </button>

        {/* ── OR ───────────────────────────────────────────── */}
        <div className="divider">
          <span className="divider-line" />
          <span className="divider-text">OR</span>
          <span className="divider-line" />
        </div>

        {/* ── CREATE YOUR LANE ─────────────────────────────── */}
        <p className="lane-label create-lane">🔐 CREATE YOUR LANE</p>

        <div className="input-field">
          <input
            id="signup-name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
          />
        </div>

        <div className="input-field">
          <input
            id="signup-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="input-field input-field--pw">
          <input
            id="signup-password"
            type={showPw ? 'text' : 'password'}
            placeholder="Password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="pw-eye"
            onClick={() => setShowPw(v => !v)}
            aria-label={showPw ? 'Hide' : 'Show'}
          >
            {showPw ? '🙈' : '👁'}
          </button>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <button
          id="btn-claim-join"
          className="cta-btn"
          onClick={handleSignup}
        >
          CLAIM YOUR GRIT AND JOIN!
        </button>

        {/* ── Footer ───────────────────────────────────────── */}
        <p className="footer-text">
          Already a fan?{' '}
          <button
            id="link-signin"
            className="footer-accent-white"
            onClick={() => navigate('/')}
          >
            SIGN IN
          </button>
        </p>
      </div>
    </div>
  )
}
