import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch type="text" name="query" />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
}

export default SearchBar;
