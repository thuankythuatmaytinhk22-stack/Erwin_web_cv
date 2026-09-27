import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AOS from 'aos'

import Header from './components/Header'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'

export default function App() {
  const [user, setUser] = useState(null)

  // Khôi phục user từ localStorage (mock session)
  useEffect(() => {
    const saved = localStorage.getItem('user')
    if (saved) setUser(JSON.parse(saved))
    AOS.init({ offset: 0, duration: 800, once: true })
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>
      <Header user={user} onLogout={handleLogout} />

      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/schematic"  element={<Placeholder title="Schematic" />} />
        <Route path="/layout"     element={<Placeholder title="Layout" />} />
        <Route path="/note"       element={<Placeholder title="Note" />} />
        <Route path="/calendar"   element={<Placeholder title="Calendar" />} />
        <Route path="/projects"   element={<Placeholder title="Projects" />} />
        <Route path="*"           element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}