import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import { Header, Container, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div style={{ marginLeft: '420px', marginRight: 'auto' }}>
            <ThreeCircles
              height="80"
              width="80"
              wrapperClass="spinner-wrapper"
              ariaLabel="three-circles-rotating"
              outerCircleColor="#0a598d"
              innerCircleColor="#260a8d"
              middleCircleColor="#6a0474"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
