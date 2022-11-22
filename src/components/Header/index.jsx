import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav>
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
