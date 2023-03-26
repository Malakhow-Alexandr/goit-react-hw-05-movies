import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearhBar';
import MoviesList from 'components/MovieList/MovieList';
import { fetchMovieByName } from 'utils/fetchAPIService';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearchFormSubmit = searchMovieName => {
    setMovieName(searchMovieName);
  };

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

  return (
    <main>
      <SearchBar onSubmit={handleSearchFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
