import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import posterBg from './poster.jpg';

function MovieDetails({ movieInfo }) {
  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  return (
    <div>
      <div>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <div>
          <div>
            <h2>{title}</h2>
            <p>{releaseDate}</p>
          </div>
          <ul>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <p>{description}</p>
          <div>
            <p>{voteAverage}</p>
            <p>{voteCount}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieDetails.prototype = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      }),
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};

export default MovieDetails;
