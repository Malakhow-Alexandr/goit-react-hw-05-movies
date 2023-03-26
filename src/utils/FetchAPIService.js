import axios from 'axios';
import { transformTrendingMovieData } from './transformTrendingMovieData';
import { transformMovieDetailsData } from './transformMovieDetailsData';

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

export const fetchMovieDetails = async (id, controller) => {
  const { data } = await axios.get(`/movie/${id}`, {
    signal: controller.signal,
  });
  const dataArr = [];
  dataArr.push(data);

  const movie = transformMovieDetailsData(dataArr);

  return movie;
};

export const fetchMovieByName = async (query, controller) => {
  const { data } = await axios.get(`/search/movie?query=${query}`, {
    signal: controller.signal,
  });
  const movies = transformTrendingMovieData(data);

  return movies;
};

export const fetchActorList = async (id, controller) => {
  const { data } = await axios.get(`/movie/${id}`, {
    signal: controller.signal,
  });
  const dataArr = [];
  dataArr.push(data);

  const movie = transformMovieDetailsData(dataArr);

  return movie;
  // const { data } = await axios.get(`/movie/${id}/credits`);
};
