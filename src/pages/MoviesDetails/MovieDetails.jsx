import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/fetchMovieDetals';
import MovieDescription from 'components/MovieDescription/MovieDescription';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import BackLink from 'components/BackLink/BackLink';
import { ThreeCircles } from 'react-loader-spinner';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

        if (error?.message !== 'canceled') {
          console.log(error);
        }
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
      {error && error.message !== 'canceled' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}
      {movie.length === 0 && (
        <div style={{ marginLeft: '420px', marginRight: 'auto' }}>
          <ThreeCircles
            height="80"
            width="80"
            wrapperClass="spinner-wrapper"
            ariaLabel="three-circles-rotating"
            outerCircleColor="#0a598d"
            innerCircleColor="#260a8d"
            middleCircleColor="#6a0474"
          />
        </div>
      )}
      {!loading && movie.length > 0 && (
        <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      )}
      {!loading && movie.length > 0 && <MovieDescription movie={movie} />}
      {!loading && movie.length > 0 && <AdditionalInformation />}
    </main>
  );
};

export default MovieDetails;
