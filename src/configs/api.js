const baseUrl = 'http://www.omdbapi.com/?apikey=766ea25&';

const axiosOptions = ({ method, url, data }) => ({
  method,
  url,
  data,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  axiosOptions,
  movies: (keyword) => `${baseUrl}s=${keyword}`,
  movieById: (id) => `${baseUrl}i=${id}`,
};

export default api;
