/**
 * TailgateRoomPage.jsx
 * Auth-gated: Only accessible to logged-in users.
 * "Pre-game hype. Recipes. Meet up."
 */
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BottomNav from '../components/BottomNav'
import bssLogo from '../assets/bss_logo.png'
import './RoomPages.css'

const tailgateItems = [
  { id: 1, title: 'GAMEDAY CHEESESTEAK DIP', type: 'Recipe', emoji: '🧀', likes: 124 },
  { id: 2, title: 'LOT K MEETUP — EAGLES vs COWBOYS', type: 'Event', emoji: '🅿️', likes: 89 },
  { id: 3, title: 'BEST PORTABLE GRILL UNDER $100', type: 'Gear', emoji: '🔥', likes: 67 },
  { id: 4, title: 'PRE-GAME PLAYLIST: HYPE MIX', type: 'Playlist', emoji: '🎵', likes: 203 },
]

export default function TailgateRoomPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="room-page room-page--tailgate">
      <header className="room-header">
        <div className="room-header__top">
          <button className="room-back" onClick={() => navigate('/home')}>← HOME</button>
          <img src={bssLogo} alt="BSS" className="room-header__logo" />
        </div>
        <div className="room-header__title-row">
          <span className="room-header__icon">🍻</span>
          <h1 className="room-header__title">THE TAILGATE ROOM</h1>
        </div>
        <p className="room-header__sub">Pre-game hype. Recipes. Meet up.</p>
      </header>

      {/* Tailgate Feed */}
      <div className="room-feed">
        {tailgateItems.map(item => (
          <div key={item.id} className="room-post room-post--tailgate">
            <div className="room-post__header">
              <span className="room-post__badge">{item.type.toUpperCase()}</span>
            </div>
            <div className="room-post__content-row">
              <span className="room-post__emoji">{item.emoji}</span>
              <p className="room-post__text room-post__text--title">{item.title}</p>
            </div>
            <div className="room-post__footer">
              <span className="room-post__likes">❤️ {item.likes}</span>
              <button className="room-post__react">🍻</button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Tailgate */}
      <div className="room-compose room-compose--tailgate">
        <button className="room-compose__btn room-compose__btn--full" id="btn-create-tailgate">
          + CREATE TAILGATE POST
        </button>
      </div>

      <div className="room-nav-spacer" />
      <BottomNav />
    </div>
  )
}
