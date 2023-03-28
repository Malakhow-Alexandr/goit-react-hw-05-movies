import MovieListItem from 'components/MovieListItem/MovieListItem';
import { MovieListStyled } from './MovieList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <MovieListStyled>
      <MovieListItem movies={movies} location={location} />
    </MovieListStyled>
  );
};
export default MoviesList;

MoviesList.propTypes = {
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
