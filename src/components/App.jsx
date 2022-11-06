import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));
// import { NotFound } from 'pages/NotFound/Notfound';
export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end="true">
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
