import PropTypes from 'prop-types';
import {
  Item,
  LinkStyled,
  Rating,
  Picture,
  Release,
  Title,
} from './MovieListItem.styled';

const MovieListItem = ({ movies, location }) => {
  return (
    <>
      {movies.map(({ id, title, rating, poster, release }) => (
        <Item key={id}>
          <LinkStyled
            className="link"
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <Picture src={poster} alt={title} width="220px" height="315px" />
            <Title>{title}</Title>
            <Rating>{rating}</Rating>
            <Release>{release}</Release>
          </LinkStyled>
        </Item>
      ))}
    </>
  );
};

export default MovieListItem;

MovieListItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};
