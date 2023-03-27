import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/fetchAPIService';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import BackLink from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      <MovieDescription movie={movie} />
      <AdditionalInformation />
    </main>
  );
};

export default MovieDetails;
