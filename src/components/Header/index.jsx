import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <Link to="/">[Logo]</Link>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/"
          end
        >
          Accueil
        </NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </header>
  )
}

export default Header
