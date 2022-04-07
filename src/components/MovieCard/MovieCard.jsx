import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import posterBg from '../../utilities/images/poster.jpg';

function MovieCard({ id, title, poster, voteAverage, voteCount }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <p>{title}</p>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <div>
          <p>{voteAverage}</p>
          <p>{voteCount}</p>
        </div>
      </Link>
    </li>
  );
}

MovieCard.prototype = {
  id: propTypes.number,
  title: propTypes.string,
  poster: propTypes.string,
  voteAverage: propTypes.number,
  voteCount: propTypes.number,
};

export default MovieCard;
