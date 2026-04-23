import { useNavigate } from 'react-router-dom'
import bssLogo from '../assets/bss_logo.png'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div style={{
      minHeight: '100vh',
      background: '#200f0c',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      fontFamily: "'Oswald', sans-serif",
      color: '#fddbd5'
    }}>
      <img src={bssLogo} alt="BSS" style={{ width: 120, height: 120, objectFit: 'contain' }} />
      <h1 style={{ fontSize: 40, letterSpacing: 4, color: '#feb700', textTransform: 'uppercase' }}>
        WELCOME TO HOMEBASE
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", color: '#e8bdb6' }}>
        You're in the stadium. 🏟️
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: 16,
          padding: '12px 32px',
          background: '#cc0000',
          color: '#fff',
          border: 'none',
          fontFamily: "'Oswald', sans-serif",
          fontSize: 16,
          letterSpacing: 2,
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
      >
        ← Back to Tunnel
      </button>
    </div>
  )
}
