import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/services/api';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, getCast] = useState([]);
  useEffect(() => {
    (async () => {
      const cast = await getMovieCredits(Number(movieId));
      getCast(cast);
    })();
  }, [movieId]);
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
            alt={name}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
export default Cast;
