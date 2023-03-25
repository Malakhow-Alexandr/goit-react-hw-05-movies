import axios from 'axios';
import { transformTrendingMovieData } from './transformTrendingMovieData';

const API_KEY = '23b29489e8683674f60bf34658264370';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  language: 'en-US',
  api_key: API_KEY,
};

export const fetchTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day');

  const movies = transformTrendingMovieData(data);

  return movies;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`);
};
