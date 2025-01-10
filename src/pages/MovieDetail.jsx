import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../features/moviesSlice';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        dispatch(getMovieDetail(id));
    }, [dispatch, id]);

    return (
        <div>
            {movie ? (
                <>
                    <h1>{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>{movie.Plot}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default MovieDetail;
