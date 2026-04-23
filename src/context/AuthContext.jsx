/**
 * AuthContext.jsx
 * Prototype auth state management.
 * Stores login state in sessionStorage for demo persistence.
 * No real backend — this is a clickable prototype.
 */
import { createContext, useContext, useState, useCallback } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('bss_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = useCallback((userData = { name: 'Commissioner Damian', email: 'damian@bss.com' }) => {
    setUser(userData)
    sessionStorage.setItem('bss_user', JSON.stringify(userData))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    sessionStorage.removeItem('bss_user')
  }, [])

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
