import propTypes from 'prop-types';
import MovieCard from 'components/MovieCard';

function MoviesList({ movies }) {
  return (
    <ul>
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
    </ul>
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
