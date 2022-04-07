import propTypes from 'prop-types';
import actorBg from '../../utilities/images/actor.png';

function ActorsList({ actors }) {
  return (
    <ul>
      {actors.map(({ id, name, photo }) => {
        return (
          <li key={id}>
            <img
              src={photo ? `https://image.tmdb.org/t/p/w500/${photo}` : actorBg}
              alt={name}
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

ActorsList.prototype = {
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    }),
  ).isRequired,
};

export default ActorsList;
