/**
 * BottomNav.jsx
 * The Concourse-style bottom navigation bar.
 * Matches the Stitch Home Base mobile screen nav items:
 *   Home Base | Concourse | Locker Room | Picket Line | Philly Guide
 */
import { useNavigate, useLocation } from 'react-router-dom'
import './BottomNav.css'

const navItems = [
  { id: 'home',      label: 'Home Base',    icon: 'dashboard',    path: '/home' },
  { id: 'concourse', label: 'Concourse',    icon: 'stadium',      path: '/concourse' },
  { id: 'locker',    label: 'Locker Room',  icon: 'inventory_2',  path: '/home' },
  { id: 'picket',    label: 'Picket Line',  icon: 'campaign',     path: '/home' },
  { id: 'guide',     label: 'Philly Guide', icon: 'explore',      path: '/home' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="bottom-nav" aria-label="Main Navigation">
      {navItems.map(item => {
        const isActive = location.pathname === item.path && 
          (item.id === 'home' ? location.pathname === '/home' : true)
        return (
          <button
            key={item.id}
            id={`nav-${item.id}`}
            className={`bottom-nav__item${location.pathname === item.path && item.id === (location.pathname === '/home' ? 'home' : location.pathname === '/concourse' ? 'concourse' : '') ? ' bottom-nav__item--active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="material-symbols-outlined bottom-nav__icon">{item.icon}</span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
