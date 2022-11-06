import axios from 'axios';
const API_KEY = '99502501974a4beb2ea41e38054b6c9e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    const data = await response.data.cast;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    const data = await response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};
