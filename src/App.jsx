/**
 * App.jsx — Broad Street Style PWA routing
 *
 * Auth flow:
 *   / (Login)  → /home (Home Base)
 *   /signup    → /home (Home Base)
 *   /forgot-password → /  (back to Login)
 *
 * Protected routes (require auth):
 *   /home           — Home Base dashboard
 *   /concourse      — Team Gateway
 *   /vent-room      — gated
 *   /tailgate-room  — gated
 *
 * Logout → / (Login)
 */
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

import LoginPage          from './pages/LoginPage'
import SignupPage         from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomeBasePage       from './pages/HomeBasePage'
import ConcoursePage      from './pages/ConcoursePage'
import VentRoomPage       from './pages/VentRoomPage'
import TailgateRoomPage   from './pages/TailgateRoomPage'
import ProtectedRoute     from './components/ProtectedRoute'

/**
 * Redirect authenticated users away from login/signup.
 */
function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Navigate to="/home" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      {/* ── Public: Auth screens ─────────────────────────── */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* ── Protected: Main app ──────────────────────────── */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeBasePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/concourse"
        element={
          <ProtectedRoute>
            <ConcoursePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vent-room"
        element={
          <ProtectedRoute>
            <VentRoomPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tailgate-room"
        element={
          <ProtectedRoute>
            <TailgateRoomPage />
          </ProtectedRoute>
        }
      />

      {/* ── Catch-all ────────────────────────────────────── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
