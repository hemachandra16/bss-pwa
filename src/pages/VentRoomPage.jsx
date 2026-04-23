/**
 * VentRoomPage.jsx
 * Auth-gated: Only accessible to logged-in users.
 * "Let it out. No judgment. Raw takes only."
 */
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BottomNav from '../components/BottomNav'
import bssLogo from '../assets/bss_logo.png'
import './RoomPages.css'

const sampleVents = [
  { id: 1, user: 'PhillyFan_215', time: '2m ago', text: 'That ref was BLIND in the 3rd quarter. Absolute highway robbery. 🤬', grit: 42 },
  { id: 2, user: 'BroadSt_Bomber', time: '8m ago', text: 'Why do we keep running on 3rd and long?? Fire the OC!', grit: 67 },
  { id: 3, user: 'RockyBalboaIII', time: '15m ago', text: 'This team has NO heart. Trade everyone except the mascot.', grit: 89 },
  { id: 4, user: 'JawnKing', time: '22m ago', text: 'Just threw my cheesesteak at the TV. Worth it.', grit: 55 },
]

export default function VentRoomPage() {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="room-page room-page--vent">
      <header className="room-header">
        <div className="room-header__top">
          <button className="room-back" onClick={() => navigate('/home')}>← HOME</button>
          <img src={bssLogo} alt="BSS" className="room-header__logo" />
        </div>
        <div className="room-header__title-row">
          <span className="room-header__icon">🔥</span>
          <h1 className="room-header__title">THE VENT ROOM</h1>
        </div>
        <p className="room-header__sub">Let it out. No judgment. Raw takes only.</p>
      </header>

      {/* Compose */}
      <div className="room-compose">
        <div className="room-compose__avatar">
          {(user?.name || 'U')[0].toUpperCase()}
        </div>
        <input
          className="room-compose__input"
          type="text"
          placeholder="Drop your hot take..."
          id="vent-input"
        />
        <button className="room-compose__btn" id="btn-vent-post">VENT</button>
      </div>

      {/* Feed */}
      <div className="room-feed">
        {sampleVents.map(v => (
          <div key={v.id} className="room-post">
            <div className="room-post__header">
              <span className="room-post__user">{v.user}</span>
              <span className="room-post__time">{v.time}</span>
            </div>
            <p className="room-post__text">{v.text}</p>
            <div className="room-post__footer">
              <span className="room-post__grit">🔥 {v.grit} Grit</span>
              <button className="room-post__react">💪</button>
            </div>
          </div>
        ))}
      </div>

      <div className="room-nav-spacer" />
      <BottomNav />
    </div>
  )
}
