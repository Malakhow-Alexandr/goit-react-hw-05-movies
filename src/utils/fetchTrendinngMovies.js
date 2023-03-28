import axios from 'axios';
import { transformTrendingMovieData } from './transformTrendingMovieData';

const API_KEY = '23b29489e8683674f60bf34658264370';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  language: 'en-US',
  api_key: API_KEY,
};

export const fetchTrendingMovie = async controller => {
  const { data } = await axios.get('/trending/movie/day', {
    signal: controller.signal,
  });

  const movies = transformTrendingMovieData(data);

  return movies;
};
