import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/FetchAPIService';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchDetailsData = async () => {
      try {
        const response = await fetchMovieDetails(movieId);
        console.log(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetailsData();
  }, [movieId]);
  return <div>helloDetails</div>;
};

export default MovieDetails;
