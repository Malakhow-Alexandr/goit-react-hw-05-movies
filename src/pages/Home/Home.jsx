import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'utils/fetchAPIService';
import MoviesList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchTrendingData = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovie(abortController);
        setTrendingMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovie} />
    </main>
  );
};

export default Home;
