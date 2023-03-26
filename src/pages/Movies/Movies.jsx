import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearhBar';
import MoviesList from 'components/MovieList/MovieList';
import { fetchMovieByName } from 'utils/fetchAPIService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('name') ?? '';

  const location = useLocation();

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    const abortController = new AbortController();

    setLoading(true);

    const fetchMovieByNameData = async () => {
      try {
        const response = await fetchMovieByName(movieName, abortController);

        setMovies(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieByNameData();

    return () => {
      abortController.abort();
    };
  }, [movieName]);

  const updateQueryString = name => {
    if (name === '') {
      return setSearchParams({});
    }
    setSearchParams({ name });
  };
  return (
    <main>
      <SearchBar value={movieName} onSubmit={updateQueryString} />
      {movies && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;
