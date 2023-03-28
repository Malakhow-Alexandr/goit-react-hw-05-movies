import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearhBar';
import MoviesList from 'components/MovieList/MovieList';
import { fetchMovieByName } from 'utils/fetchAPIService';
import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';

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
        if (response.length === 0) {
          toast.error(`🍳There is no data with ${movieName} name!`, {
            theme: 'dark',
          });
          return;
        }
        setMovies(response);
      } catch (error) {
        setError(error);

        if (error?.message !== 'canceled') {
          toast.error(
            `🍳Sorry we have an error with this ${movieName} film! Please try to search later `,
            {
              theme: 'dark',
            }
          );
        }
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

      {movies.length === 0 && error && error.message !== 'canceled' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}

      {loading && (
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
      {!loading && movies.length === 0 && (
        <>
          <img
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '20px',
            }}
            src="https://kalishlawtexas.com/wp-content/uploads/2020/10/AddressConfidentiality-progam.jpg"
            width="400px"
            alt="search"
          />
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Please enter movie name to search!
          </p>
        </>
      )}
      {movies && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;
