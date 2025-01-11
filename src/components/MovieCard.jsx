import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterUrl } = movie;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
};

// Definición de PropTypes
import PropTypes from 'prop-types';

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  }).isRequired,
};


export default MovieCard;