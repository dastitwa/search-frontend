import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const searchMovies = async (
  query: string,
) => {
  const response =
    await api.get(
      '/movies/search/full-text',
      {
        params: {
          q: query,
        },
      },
    );

  return response.data;
};

export const getGenres =
  async () => {
    const response =
      await api.get(
        '/movies/analytics/genres',
      );

    return response.data;
  };

export const getLanguages =
  async () => {
    const response =
      await api.get(
        '/movies/analytics/languages',
      );

    return response.data;
  };

export const rankingSearch =
  async (
    query: string,
    mode: string,
  ) => {
    const response =
      await api.get(
        '/movies/search/ranking',
        {
          params: {
            q: query,
            mode,
          },
        },
      );

    return response.data;
  };

export default api;

export const filterSearch = async (
  genre?: string,
  language?: string,
) => {
  const response =
    await api.get(
      '/movies/search/filter',
      {
        params: {
          genre,
          language,
        },
      },
    );

  return response.data;
};