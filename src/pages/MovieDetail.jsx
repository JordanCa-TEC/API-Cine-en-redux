import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../features/moviesSlice'; // Asegúrate de importar correctamente
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movies.movieDetail);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(getMovieDetail(id)); // Llamar a la acción con el id de la película
  }, [dispatch, id]);

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{movieDetail.title}</h1>
      <p>{movieDetail.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt={movieDetail.title} />
    </div>
  );
};

export default MovieDetail;
