import PropTypes from 'prop-types';

import { Poster, Section } from './MovieDescription.styled';

const MovieDescription = ({ movie }) => {
  return (
    <>
      {movie.map(movie => {
        const { release, genres, overview, poster, title, userScore, id } =
          movie;
        return (
          <Section key={id}>
            <Poster src={poster} alt={title} width="350px" height="525px" />
            <div>
              <h2>
                {title} <span>{release}</span>
              </h2>
              <p>{userScore}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genres}</p>
            </div>
          </Section>
        );
      })}
    </>
  );
};
export default MovieDescription;

MovieDescription.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      genres: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      userScore: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
