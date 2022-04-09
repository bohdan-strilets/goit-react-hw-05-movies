import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import posterBg from '../../utilities/images/poster.jpg';
import {
  Item,
  Title,
  Poster,
  VoteWrapper,
  VoteAverage,
  VoteCount,
  Value,
} from './MovieCard.styled';

function MovieCard({ id, title, poster, voteAverage, voteCount }) {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Title>{title ? title : 'Movie without a title'}</Title>
        <Poster
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <VoteWrapper>
          <VoteAverage>
            Vote average: <Value>{voteAverage}</Value>
          </VoteAverage>
          <VoteCount>
            Vote count:<Value> {voteCount}</Value>
          </VoteCount>
        </VoteWrapper>
      </Link>
    </Item>
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
