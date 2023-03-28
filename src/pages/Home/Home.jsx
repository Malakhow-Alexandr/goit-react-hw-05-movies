import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovie } from 'utils/fetchAPIService';
import MoviesList from 'components/MovieList/MovieList';
import { ThreeCircles } from 'react-loader-spinner';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    const fetchTrendingData = async () => {
      try {
        const data = await fetchTrendingMovie(abortController);
        setTrendingMovie(data);
      } catch (error) {
        setError(error);

        if (error?.message !== 'canceled') {
          console.log(error);
        }
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
      {error && error.message !== 'canceled' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}
      {trendingMovie.length === 0 && (
        <div
          style={{
            marginLeft: '420px',
            marginRight: 'auto',
            marginTop: '30px',
          }}
        >
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
      {!loading && <MoviesList movies={trendingMovie} location={location} />}
    </main>
  );
};

export default Home;
