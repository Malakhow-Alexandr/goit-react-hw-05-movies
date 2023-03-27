import { Link, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

const AdditionalInformation = () => {
  const { movieId } = useParams();
  return (
    <section>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AdditionalInformation;
