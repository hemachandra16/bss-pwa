/**
 * LoginPage.jsx
 * Source: Stitch screen BSS Sign In (9148fa941da54851ab8a24687d33f654)
 * All HTML structure, class names, and inline styles are taken directly
 * from the Stitch-generated HTML.  Only change: onClick handlers → navigate()
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import fansBg  from '../assets/fans_flyer.png'
import bssLogo from '../assets/bss_logo.png'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = () => {
    login({ name: email.split('@')[0] || 'Commissioner Damian', email: email || 'damian@bss.com' })
    navigate('/home')
  }
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw]   = useState(false)

  return (
    <div className="screen login-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="screen-overlay" />

      <div className="login-content">
        {/* ── Logo ─────────────────────────────────────────── */}
        <img src={bssLogo} alt="Broad Street Style" className="login-logo" />

        {/* ── Headline ─────────────────────────────────────── */}
        <h1 className="login-headline">ENTER THE TUNNEL</h1>

        {/* ── FAST LANE ────────────────────────────────────── */}
        <p className="lane-label fast-lane">⚡ FAST LANE</p>

        <button
          id="btn-google"
          className="sso-btn sso-google"
          onClick={() => { login({ name: 'Google User', email: 'google@bss.com' }); navigate('/home') }}
        >
          {/* Google G */}
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        <button
          id="btn-facebook"
          className="sso-btn sso-facebook"
          onClick={() => { login({ name: 'Facebook User', email: 'fb@bss.com' }); navigate('/home') }}
        >
          {/* Facebook f */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Continue with Facebook
        </button>

        {/* ── OR ───────────────────────────────────────────── */}
        <div className="divider">
          <span className="divider-line" />
          <span className="divider-text">OR</span>
          <span className="divider-line" />
        </div>

        {/* ── MANUAL LANE ──────────────────────────────────── */}
        <p className="lane-label manual-lane">🔐 MANUAL LANE</p>

        <div className="input-field">
          <input
            id="login-email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="input-field input-field--pw">
          <input
            id="login-password"
            type={showPw ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
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

        <button id="btn-forgot" className="forgot-btn" type="button" onClick={() => navigate('/forgot-password')}>
          Forgot Credentials? (Recover Playbook)
        </button>

        {/* ── CTA ──────────────────────────────────────────── */}
        <button
          id="btn-enter-stadium"
          className="cta-btn"
          onClick={handleLogin}
        >
          ENTER STADIUM
        </button>

        {/* ── Footer ───────────────────────────────────────── */}
        <p className="footer-text">
          New Fan?{' '}
          <button
            id="link-signup"
            className="footer-accent"
            onClick={() => navigate('/signup')}
          >
            SIGN UP
          </button>
        </p>
        <p className="footer-sub">
          Don't have an account?{' '}
          <button className="footer-sub-link" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}
