import { getTrendingMovies } from 'components/services/api';
import { useEffect } from 'react';
export const Home = () => {
  useEffect(() => {
    const trendingMovies = getTrendingMovies().then(data => data);
    console.log(trendingMovies);
  }, []);
  // return (
  //   <>
  //     {await trendingMovies.map(movie => {
  //       return (
  //         <li key={movie.id}>
  //           <img src={movie.poster_path} alt={movie.title}></img>
  //         </li>
  //       );
  //     })}
  //   </>
  // );
};
