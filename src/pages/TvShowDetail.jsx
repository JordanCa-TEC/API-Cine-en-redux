// src/pages/TvShowDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../redux/moviesSlice';

const TvShowDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const tvShow = useSelector((state) => state.movies.selectedMovie);

    useEffect(() => {
        dispatch(getMovieDetail(id));
    }, [dispatch, id]);

    if (!tvShow) return <p>Cargando...</p>;

    return (
        <div>
            <h1>{tvShow.name}</h1>
            <p>{tvShow.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt={tvShow.name} />
        </div>
    );
};

export default TvShowDetail;