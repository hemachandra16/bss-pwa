/**
 * ProtectedRoute.jsx
 * Redirects unauthenticated users to Login ("/").
 * Used to gate Vent Room, Tailgate Room, and other auth-required pages.
 */
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
