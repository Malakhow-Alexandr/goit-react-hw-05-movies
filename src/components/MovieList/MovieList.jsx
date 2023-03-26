import MovieListItem from 'components/MovieListItem/MovieListItem';
import { MovieListStyled } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  return (
    <MovieListStyled>
      <MovieListItem movies={movies} />
    </MovieListStyled>
  );
};
export default MoviesList;
