import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/fetchAPIService';
import MovieDescription from 'components/MovieDescription/MovieDescription';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    const fetchDetailsData = async () => {
      try {
        const response = await fetchMovieDetails(movieId, abortController);
        setMovie(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailsData();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <main>
      <MovieDescription movie={movie} />
    </main>
  );
};

export default MovieDetails;
