import propTypes from 'prop-types';
import Container from 'components/Container';
import { List, Item, Title, Text } from './ReviewsList.styled';

function ReviewsList({ reviews }) {
  return (
    <Container isPadding>
      <List>
        {reviews.map(({ id, author, text }) => {
          return (
            <Item key={id}>
              <Title>{author}</Title>
              <Text>{text}</Text>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

ReviewsList.prototype = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      text: propTypes.string,
    }),
  ).isRequired,
};

export default ReviewsList;
