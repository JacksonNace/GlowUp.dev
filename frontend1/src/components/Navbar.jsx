import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GlowUp.dev
        </Link>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</Link>
          <Link to="/tasks" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tasks</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 