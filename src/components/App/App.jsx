import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

function App() {
  return (
    <>
      <Header title="Movie search" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/*" element={<MoviesPage />} />
        <Route path=":movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
