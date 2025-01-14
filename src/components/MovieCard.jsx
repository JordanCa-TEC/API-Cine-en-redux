import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path } = movie;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
