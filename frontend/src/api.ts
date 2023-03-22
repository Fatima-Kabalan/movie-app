import axios from 'axios';

const API_KEY = '7ddaebc6d7da9611149903cc8f5663c1';

export const getMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  return response.data.results;
};
