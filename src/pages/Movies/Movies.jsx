import { Link, Outlet } from 'react-router-dom';
export const Movies = () => {
  return (
    <>
      <Link to="movieId">MovieDetails</Link>
      <Link to="movieId/cast">Cast</Link>
      <Link to="movieId/reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
