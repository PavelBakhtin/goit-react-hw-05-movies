import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'components/services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const movie = await getMovieDetails(Number(movieId));
        console.log(movie);
        setMovie(movie);
      } catch (error) {}
    })();
  }, [movieId]);
  const { title, poster_path, overview, vote_average } = movie;

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
        <h2>{title}</h2>
        <p>User Score: {Number(vote_average).toFixed() * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetails;
