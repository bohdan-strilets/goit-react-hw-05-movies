async function getMovieReviews(movieId) {
  const key = 'd783920aea034ba2adae6031a0bf96c0';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieReviews;
