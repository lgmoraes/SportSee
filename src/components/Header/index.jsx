import { Link, NavLink } from 'react-router-dom'
import { BASENAME } from '../..'

function Header() {
  return (
    <header className="header">
      <Link to={BASENAME + '/'} className="header__logo"></Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={BASENAME + '/'}
          end
        >
          Accueil
        </NavLink>
        <NavLink to={BASENAME + '/'}>Profil</NavLink>
        <NavLink to={BASENAME + '/'}>Réglage</NavLink>
        <NavLink to={BASENAME + '/'}>Communauté</NavLink>
      </nav>
    </header>
  )
}

export default Header
