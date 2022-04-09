import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

function App() {
  return (
    <>
      <Header title="MOVIE.search" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
