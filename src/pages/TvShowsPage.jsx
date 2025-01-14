// src/pages/TvShowsPage.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTvShows } from '../features/moviesSlice';
import { Link } from 'react-router-dom';
import { tvshow} from '../components/TvShowCard';

const TvShowsPage = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const tvShows = useSelector((state) => state.movies.tvShows);

    const handleSearch = () => {
        dispatch(getTvShows(search));
    };

    return (
        <div>
            <h1>Buscar Series de TV</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            <ul>
                {tvShows.map((show) => (
                    <li key={show.id}>
                        <Link to={`/tvshows/${show.id}`}>{show.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TvShowsPage;