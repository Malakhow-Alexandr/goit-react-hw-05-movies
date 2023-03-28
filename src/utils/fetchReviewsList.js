import axios from 'axios';
import { transformReviewsData } from './transformReviewsData';

const API_KEY = '23b29489e8683674f60bf34658264370';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  language: 'en-US',
  api_key: API_KEY,
};

export const fetchReviews = async (id, controller) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    signal: controller.signal,
  });
  const reviewsData = transformReviewsData(data);

  return reviewsData;
};
