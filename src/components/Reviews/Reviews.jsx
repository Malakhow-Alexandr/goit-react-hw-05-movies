import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  console.log(movieId);

  return <div>Hello I am Reviews</div>;
};

export default Reviews;
