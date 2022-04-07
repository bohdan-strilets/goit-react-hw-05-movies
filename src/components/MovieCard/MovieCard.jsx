import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function MovieCard({ id, title, poster, voteAverage, voteCount }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <p>{title}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
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
