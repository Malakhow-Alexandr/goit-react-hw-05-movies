import axios from 'axios';
import { transformReviewsData } from './transformReviewsData';

export const fetchReviews = async (id, controller) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    signal: controller.signal,
  });
  const reviewsData = transformReviewsData(data);

  return reviewsData;
};
