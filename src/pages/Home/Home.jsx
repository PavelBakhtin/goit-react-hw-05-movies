import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'components/services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const moviesList = await getTrendingMovies();
        setTrendingMovies(moviesList);
      } catch (error) {
        console.log(error);
      }
    })();
  });
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
