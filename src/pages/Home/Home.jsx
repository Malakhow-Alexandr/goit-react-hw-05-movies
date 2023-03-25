import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'utils/fetchAPIService';
import { TrendingList } from './Home.styled';
import TrendingListItem from 'components/TrandingListItem/TrandingListItem';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingData = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovie();
        setTrendingMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingList>
        <TrendingListItem movies={trendingMovie} />
      </TrendingList>
    </main>
  );
};

export default Home;
