import { defaultPic } from './transformTrendingMovieData';

export const transformActorData = data =>
  data['cast'].map(({ id, profile_path: photo, name, character }) => ({
    id,
    character,
    name,
    photo: !photo ? defaultPic : `https://image.tmdb.org/t/p/w500${photo}`,
  }));
