import { searchMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { Input } from './Movies.styled';
const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (query === '' || query === null) {
      return;
    }
    (async () => {
      try {
        const movies = await searchMovies(query);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="query"></Input>
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </div>
  );
};
export default Movies;
