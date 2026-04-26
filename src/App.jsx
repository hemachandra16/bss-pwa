import { Routes, Route, Navigate } from 'react-router-dom'

import LoginPage        from './pages/LoginPage'
import SignupPage       from './pages/SignupPage'
import HomeBasePage       from './pages/HomeBasePage'
import ConcoursePage      from './pages/ConcoursePage'
import VentRoomPage       from './pages/VentRoomPage'
import TailgateRoomPage   from './pages/TailgateRoomPage'
import LockerRoomPage     from './pages/LockerRoomPage'
import PicketLinePage     from './pages/PicketLinePage'
import PhillyGuidePage    from './pages/PhillyGuidePage'
import ProfilePage        from './pages/ProfilePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomeBasePage />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/concourse" element={<ConcoursePage />} />
      <Route path="/vent-room" element={<VentRoomPage />} />
      <Route path="/tailgate-room" element={<TailgateRoomPage />} />
      <Route path="/locker-room" element={<LockerRoomPage />} />
      <Route path="/picket-line" element={<PicketLinePage />} />
      <Route path="/philly-guide" element={<PhillyGuidePage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
