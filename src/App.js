import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MovieDetail from './pages/MovieDetail';
import TvShowsPage from './pages/TvShowsPage';
import TvShowDetail from './pages/TvShowDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/tvshows" element={<TvShowsPage />} />
                <Route path="/tvshow/:id" element={<TvShowDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
