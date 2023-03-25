export const transformTrendingMovieData = data => {
  return data['results'].map(
    ({ id, title, vote_average: rating, poster_path: poster }) => ({
      id,
      title,
      rating,
      poster: `https://image.tmdb.org/t/p/w500${poster}`,
    })
  );
};
