import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTvShows } from '../features/moviesSlice'; // Asegúrate de importar correctamente
import TvShowCard from '../components/TvShowCard';

const TvShowsPage = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.movies.tvShows);
  const status = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      dispatch(getTvShows(searchTerm));
    }
  }, [dispatch, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (status === 'loading') return <p>Cargando...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar programas de TV..."
      />
      <div className="tv-show-list">
        {tvShows.map((tvShow) => (
          <TvShowCard key={tvShow.id} tvShow={tvShow} />
        ))}
      </div>
    </div>
  );
};

export default TvShowsPage;
