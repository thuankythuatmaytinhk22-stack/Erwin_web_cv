import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/',          label: 'Home' },
  { to: '/schematic', label: 'Schematic' },
  { to: '/layout',    label: 'Layout' },
  { to: '/note',      label: 'Note' },
  { to: '/calendar',  label: 'Calendar' },
  { to: '/projects',  label: 'Projects' },
]

export default function Header({ user, onLogout }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <nav className="main-nav">
      <NavLink to="/" className="nav-logo" onClick={closeMenu}>
        <div className="nav-logo-icon">
          <i className="fa-solid fa-microchip"></i>
        </div>
        <span>Erwin Dinh</span>
      </NavLink>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="user-badge">
              <i className="fa-solid fa-user"></i>
              {user.username}
            </span>
            <button onClick={onLogout} className="btn-auth btn-logout">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login"    className="btn-auth btn-login">Login</NavLink>
            <NavLink to="/register" className="btn-auth btn-register">Register</NavLink>
          </>
        )}

        <div className="nav-hamburger" onClick={() => setOpen(v => !v)}>
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  )
}