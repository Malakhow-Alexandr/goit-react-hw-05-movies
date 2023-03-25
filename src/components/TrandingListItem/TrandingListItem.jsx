import { Link } from 'react-router-dom';

const TrendingListItem = ({ movies }) => {
  return (
    <>
      {movies.map(({ id, title, rating, poster }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <p>
              {title} <span>{rating}</span>
            </p>
            <img src={poster} alt={title} width="100px" height="150px" />
          </Link>
        </li>
      ))}
    </>
  );
};

export default TrendingListItem;
