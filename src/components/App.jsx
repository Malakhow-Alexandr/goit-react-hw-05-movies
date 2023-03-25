import { useEffect, useState } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTrendingMovie } from 'utils/FetchAPIService';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  useEffect(() => {
    fetchTrendingMovie();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>hello</div>} />
        {/* <Route path="'/movies/:movieId'" element={<div> hello moviesId</div>}>
          <Route path="/movies/:movieId/cast" element={<div>hello cast</div>} />
          <Route path="/movies/:movieId/reviews" />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
