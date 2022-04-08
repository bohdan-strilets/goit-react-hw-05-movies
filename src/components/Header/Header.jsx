import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { FaFilm } from 'react-icons/fa';
import { HeaderWrapper, Title, List, Item } from './Header.styled';

function Header({ title }) {
  return (
    <HeaderWrapper>
      <FaFilm />
      <Title>{title}</Title>
      <List>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item>
          <NavLink to="/movies">Movies</NavLink>
        </Item>
      </List>
    </HeaderWrapper>
  );
}

Header.prototype = {
  title: propTypes.string.isRequired,
};

export default Header;
