import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright, Studios } from './Footer.styled';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>© MOVIE.search 2022</Copyright>
          <Studios>BS</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
