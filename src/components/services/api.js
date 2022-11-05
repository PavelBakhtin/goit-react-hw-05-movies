import axios from 'axios';
const API_KEY = '99502501974a4beb2ea41e38054b6c9e';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
