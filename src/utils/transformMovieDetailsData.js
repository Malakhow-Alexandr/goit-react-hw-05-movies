import { formatReleaseDate } from './formatReleaseDate';

export const transformMovieDetailsData = data => {
  const hiRating = 10;

  return data.map(
    ({
      id,
      genres,
      title,
      vote_average,
      overview,
      release_date: release,
      poster_path: poster,
    }) => ({
      id,
      title,
      release: `(${formatReleaseDate(release)})`,
      genres: `${genres.map(ganre => ganre.name).join(', ')}`,
      poster: `https://image.tmdb.org/t/p/w500${poster}`,
      userScore: `User Score: ${Math.floor((vote_average / hiRating) * 100)}%`,
      overview,
    })
  );
};
