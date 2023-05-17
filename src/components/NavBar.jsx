import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="m-2">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/teams" className="link">Teams</NavLink>
    </nav>
  )
}

export default NavBar