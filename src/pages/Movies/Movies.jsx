import { searchMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '') {
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
    console.log(query);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
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
