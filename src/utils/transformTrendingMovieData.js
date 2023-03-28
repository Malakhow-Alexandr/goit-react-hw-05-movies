import { formatReleaseDate } from './formatReleaseDate';
export const defaultPic =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

export const transformTrendingMovieData = data => {
  return data['results'].map(
    ({
      id,
      release_date: release,
      title,
      vote_average: rating,
      poster_path: poster,
    }) => {
      return {
        id,
        title,
        rating: `⭐${Math.round(rating)}`,
        poster: !poster
          ? defaultPic
          : `https://image.tmdb.org/t/p/w500${poster}`,
        release: !release ? `(unknown)` : `(${formatReleaseDate(release)})`,
      };
    }
  );
};
