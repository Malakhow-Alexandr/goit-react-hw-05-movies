import { useEffect, useState, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const ActorList = lazy(() => import('../components/ActorList/ActorList'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<ActorList />} />
            <Route
              path="/movies/:movieId/reviews"
              element={<div>hello review</div>}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </>
  );
};
