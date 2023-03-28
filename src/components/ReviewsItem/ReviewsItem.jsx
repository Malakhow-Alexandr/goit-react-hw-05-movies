import PropTypes from 'prop-types';

import {
  ReviewsAuthorName,
  ReviewContainer,
  ReviewsAuthorDesc,
} from './ReviewsItem.styled';

const ReviewsItem = ({ reviews }) =>
  reviews.map(({ id, author, content }) => {
    return (
      <ReviewContainer key={id}>
        <ReviewsAuthorName>{author}</ReviewsAuthorName>
        <ReviewsAuthorDesc>{content}</ReviewsAuthorDesc>
      </ReviewContainer>
    );
  });

export default ReviewsItem;

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
