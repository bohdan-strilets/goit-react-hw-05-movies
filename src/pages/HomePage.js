import { useState, useEffect } from 'react';
import getTrending from 'API/get-trending';
import MoviesList from 'components/MoviesList';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(({ results }) => {
      const moviesArr = [];

      results.map(({ id, title, poster_path, vote_average, vote_count }) => {
        const movie = {
          id,
          title,

          poster: poster_path,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return moviesArr.push(movie);
      });

      setMovies(moviesArr);
    });
  }, []);

  return movies && <MoviesList movies={movies} />;
}

export default HomePage;
