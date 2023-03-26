const MovieDescription = ({ movie }) => {
  return (
    <>
      {movie.map(movie => {
        const { release, genres, overview, poster, title, userScore, id } =
          movie;
        return (
          <section key={id}>
            <img src={poster} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>{release}</p>
              <p>{userScore}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genres}</p>
            </div>
          </section>
        );
      })}
    </>
  );
};
export default MovieDescription;
