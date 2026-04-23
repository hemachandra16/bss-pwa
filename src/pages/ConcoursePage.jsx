/**
 * ConcoursePage.jsx
 * Source: Stitch screen "The Concourse - Team Gateway"
 *         (650df5de028648b8bafccd89656319f0) — mobile
 *         (b002fcfba1b44abc9fcc155f6fc62ce4) — desktop
 *
 * Team Gateway: choose your team to enter the community.
 */
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BottomNav from '../components/BottomNav'
import bssLogo from '../assets/bss_logo.png'
import './ConcoursePage.css'

const teams = [
  {
    id: 'eagles',
    name: 'EAGLES',
    sport: 'NFL',
    color: '#004C54',
    accent: '#A5ACAF',
    icon: '🦅',
    record: '11-2',
  },
  {
    id: 'sixers',
    name: '76ERS',
    sport: 'NBA',
    color: '#006BB6',
    accent: '#ED174C',
    icon: '🏀',
    record: '18-8',
  },
  {
    id: 'phillies',
    name: 'PHILLIES',
    sport: 'MLB',
    color: '#E81828',
    accent: '#002D72',
    icon: '⚾',
    record: '34-22',
  },
  {
    id: 'flyers',
    name: 'FLYERS',
    sport: 'NHL',
    color: '#F74902',
    accent: '#000000',
    icon: '🏒',
    record: '15-10',
  },
  {
    id: 'union',
    name: 'UNION',
    sport: 'MLS',
    color: '#071B2C',
    accent: '#B58B1F',
    icon: '⚽',
    record: '8-4-2',
  },
]

export default function ConcoursePage() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="concourse">
      {/* Header */}
      <header className="concourse-header">
        <div className="concourse-header__top">
          <img src={bssLogo} alt="BSS" className="concourse-header__logo" />
          <button
            id="btn-logout-concourse"
            className="concourse-logout-btn"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        <h1 className="concourse-title">THE CONCOURSE</h1>
        <p className="concourse-subtitle">(TEAM GATEWAY)</p>
        <p className="concourse-desc">Choose your team to enter the community.</p>
      </header>

      {/* Team Cards */}
      <section className="concourse-teams" id="team-list">
        {teams.map(team => (
          <button
            key={team.id}
            id={`team-${team.id}`}
            className="concourse-team-card"
            onClick={() => navigate('/home')}
          >
            <div
              className="concourse-team-card__accent"
              style={{ background: team.color }}
            />
            <div className="concourse-team-card__icon">{team.icon}</div>
            <div className="concourse-team-card__info">
              <span className="concourse-team-card__sport">{team.sport}</span>
              <span className="concourse-team-card__name">{team.name}</span>
              <span className="concourse-team-card__record">{team.record}</span>
            </div>
            <span className="concourse-team-card__arrow">→</span>
          </button>
        ))}
      </section>

      {/* Back to Home Base */}
      <div className="concourse-back">
        <button
          id="btn-back-home"
          className="concourse-back-btn"
          onClick={() => navigate('/home')}
        >
          ← BACK TO HOME BASE
        </button>
      </div>

      {/* Spacer for bottom nav */}
      <div className="concourse-nav-spacer" />
      <BottomNav />
    </div>
  )
}
