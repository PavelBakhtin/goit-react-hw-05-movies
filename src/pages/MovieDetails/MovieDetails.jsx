import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/services/api';
import { FlexContainer, InfoContainer, BackLink } from './MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const [movieGenres, setMovieGenres] = useState([]);
  const [savedLocation, setSavedLocation] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (savedLocation) {
      return;
    }
    const backLinkHref = location.state?.from ?? '/';
    setSavedLocation(backLinkHref);
  }, [location.state?.from, savedLocation]);
  useEffect(() => {
    (async () => {
      try {
        const MovieDetails = await getMovieDetails(Number(movieId));
        setMovie(MovieDetails);
        setMovieGenres(MovieDetails.genres);
      } catch (error) {}
    })();
  }, [movieId]);
  const { title, poster_path, overview, vote_average, release_date } = movie;
  const releaseYear = Date().getFullYear(release_date);
  const userScore = Number(vote_average).toFixed() * 10;

  return (
    <div>
      <BackLink to={savedLocation}>
        <AiOutlineArrowLeft size="15" />
        <span>Go back</span>
      </BackLink>
      <FlexContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} ({releaseYear})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {movieGenres.length > 0 &&
              movieGenres.map(genre => ` ${genre.name}`)}
          </p>
        </div>
      </FlexContainer>
      <InfoContainer>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </InfoContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
