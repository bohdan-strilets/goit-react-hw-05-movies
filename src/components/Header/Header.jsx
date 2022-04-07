import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { FaFilm } from 'react-icons/fa';

function Header({ title }) {
  return (
    <>
      <FaFilm />
      <h1>{title}</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </>
  );
}

Header.prototype = {
  title: propTypes.string.isRequired,
};

export default Header;
