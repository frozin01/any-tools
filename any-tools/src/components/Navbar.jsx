import { NavLink } from 'react-router-dom'
import anyToolsScriptLogo from '../assets/any-tools-script-logo.svg'

function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="navbar">
        <div className="brand-wrap">
          <img className="brand-script-logo" src={anyToolsScriptLogo} alt="Any Tools logo" />
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/word-counter" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Word Counter
          </NavLink>
          <NavLink to="/stopwatch" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Stopwatch
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar