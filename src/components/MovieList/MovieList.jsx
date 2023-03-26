import MovieListItem from 'components/MovieListItem/MovieListItem';
import { MovieListStyled } from './MovieList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <MovieListStyled>
      <MovieListItem movies={movies} location={location} />
    </MovieListStyled>
  );
};
export default MoviesList;
