import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

import { Header,Container,Logo,Link } from './SharedLayout.styled'; 

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
      </Suspense>
    </Container>
  );
};
