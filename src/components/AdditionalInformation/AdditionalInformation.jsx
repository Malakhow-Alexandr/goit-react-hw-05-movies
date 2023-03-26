import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const AdditionalInformation = () => {
  return (
    <section>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default AdditionalInformation;
