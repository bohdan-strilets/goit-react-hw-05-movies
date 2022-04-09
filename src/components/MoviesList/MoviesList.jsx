import propTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import Container from 'components/Container';
import { Wrapper } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <Container>
      <Wrapper>
        {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              poster={poster}
              voteAverage={voteAverage}
              voteCount={voteCount}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
}

MoviesList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    }),
  ).isRequired,
};

export default MoviesList;
