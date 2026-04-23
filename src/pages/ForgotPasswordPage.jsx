/**
 * ForgotPasswordPage.jsx
 * "Recover Playbook" — password recovery flow.
 * Wired from LoginPage's "Forgot Credentials?" button.
 * Preserves Grit and Glory design language.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bssLogo from '../assets/bss_logo.png'
import fansBg  from '../assets/fans_flyer.png'
import './ForgotPasswordPage.css'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [sent, setSent]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <div className="screen forgot-screen" style={{ backgroundImage: `url(${fansBg})` }}>
      <div className="screen-overlay forgot-overlay" />

      <div className="forgot-content">
        <img src={bssLogo} alt="Broad Street Style" className="forgot-logo" />

        <h1 className="forgot-headline">RECOVER PLAYBOOK</h1>
        <p className="forgot-sub">
          Forgot your credentials? Enter the email associated with your account
          and we'll send you a recovery link.
        </p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="forgot-form">
            <div className="input-field">
              <input
                id="forgot-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <button
              id="btn-send-recovery"
              className="cta-btn"
              type="submit"
            >
              SEND RECOVERY LINK
            </button>
          </form>
        ) : (
          <div className="forgot-success">
            <div className="forgot-success__icon">✅</div>
            <p className="forgot-success__text">
              Recovery link sent to <strong>{email}</strong>.<br />
              Check your inbox and follow the instructions.
            </p>
            <button
              id="btn-back-login"
              className="cta-btn"
              onClick={() => navigate('/')}
            >
              BACK TO THE TUNNEL
            </button>
          </div>
        )}

        <p className="footer-text">
          Remember your credentials?{' '}
          <button
            id="link-back-signin"
            className="footer-accent"
            onClick={() => navigate('/')}
          >
            SIGN IN
          </button>
        </p>
      </div>
    </div>
  )
}
