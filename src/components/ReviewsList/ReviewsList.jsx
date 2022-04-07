import propTypes from 'prop-types';

function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map(({ id, author, text }) => {
        return (
          <li key={id}>
            <h2>{author}</h2>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
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
