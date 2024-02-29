import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => isActive ? 'active' : ''

	return (
		<nav>
      <div>
        <NavLink to="/" className={setActiveClass}>
          Inicio
        </NavLink>
        <NavLink to="/pokemons" className={setActiveClass}>
          Pokemons
        </NavLink>
      </div>
		</nav>
	);
};

export default Navbar;