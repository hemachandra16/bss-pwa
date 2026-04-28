import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './BottomNav.css'

const navItems = [
  { id: 'home',       label: 'HOME BASE',     icon: 'home',       path: '/home' },
  { id: 'concourse',  label: 'THE TAILGATE',     icon: 'stadium',    path: '/concourse' },
  { id: 'locker',     label: 'LOCKER ROOM',   icon: 'checkroom',  path: '/locker-room' },
  { id: 'picket',     label: 'PICKET LINE',   icon: 'newspaper',  path: '/picket-line' },
  { id: 'guide',      label: 'PHILLY GUIDE',  icon: 'map',        path: '/philly-guide' }
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()

  const handleNav = (item) => {
    if (item.isAction) {
      // Simulate logout action and just go home for now, or stay
      if (item.id === 'profile') {
        logout && logout()
        navigate('/')
      }
    } else {
      navigate(item.path)
    }
  }

  return (
    <nav className="bottom-nav" aria-label="Main Navigation">
      {navItems.map(item => {
        const isActive = location.pathname === item.path
        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            className={`bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
            onClick={() => handleNav(item)}
          >
            <span className="material-symbols-outlined bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label" style={{ whiteSpace: 'pre-line' }}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
