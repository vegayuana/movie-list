const routes = {
  MAIN() { return '/'; },
  MOVIE_DETAIL(id = ':id') { return `/movie/${id}`; },
};

export default routes;
