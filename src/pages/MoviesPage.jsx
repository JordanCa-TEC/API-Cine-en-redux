import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../features/moviesSlice';
import MovieCard from '../components/MovieCard';

const MoviesPage = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    const handleSearch = () => {
        dispatch(getMovies(search));
    };

    return (
        <div>
            <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button onClick={handleSearch}>Buscar</button>
            <div>
                {movies?.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
