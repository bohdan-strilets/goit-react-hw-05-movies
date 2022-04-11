## The task "Kinopoisk"

Create basic routing for a movie search and storage application.

## API themoviedb.org

For backend use [themoviedb.org API](https://www.themoviedb.org/). You need to
register (you can enter arbitrary data) and get API key. In this work, the
following endpoints will be used.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  a list of the most popular films for today to create a collection on the main
  page.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)
  search for a movie by keyword on the movies page.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  requesting complete movie information for a movie page.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  requesting cast information for a movie page.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  request for reviews for the movie page.

## Routes

The application should have the following routes. If the user is logged in
non-existent route, it must be redirected to the home page.

- `'/'` - component `<HomePage>`, home page with list of popular movies.

- `'/movies'` - component `<MoviesPage>`, movie search page by keyword word.

- `'/movies/:movieId'` - component `<MovieDetailsPage>`, page with detailed
  movie information.
- `/movies/:movieId/cast` - component `<Cast>`, cast information. Rendered to
  page `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` - component `<Reviews>`, review information.
  Rendered on the page `<MovieDetailsPage>`.

## Code Splitting

Add asynchronous JS code loading for app routes using `React.lazy()` and
`Suspense`.
