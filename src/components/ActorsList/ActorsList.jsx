import propTypes from 'prop-types';
import actorBg from '../../utilities/images/actor.png';
import Container from 'components/Container';
import { List, Item, PhotoWrapper, Photo, Name } from './ActorsList.styled';

function ActorsList({ actors }) {
  return (
    <Container isPadding>
      <List>
        {actors.map(({ id, name, photo }) => {
          return (
            <Item key={id}>
              <PhotoWrapper>
                <Photo
                  src={
                    photo ? `https://image.tmdb.org/t/p/w500/${photo}` : actorBg
                  }
                  alt={name}
                />
              </PhotoWrapper>
              <Name>{name}</Name>
            </Item>
          );
        })}
      </List>
    </Container>
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
