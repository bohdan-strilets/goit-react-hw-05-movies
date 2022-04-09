import Container from 'components/Container';
import { LoaderWrapper, Text } from './Loader.styled';

function Loader() {
  return (
    <Container>
      <LoaderWrapper>
        <Text>Loading...</Text>
      </LoaderWrapper>
    </Container>
  );
}

export default Loader;
