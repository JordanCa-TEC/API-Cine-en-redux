import React from 'react';

const TVShowCard = ({ show }) => {
  const { name, summary, imageUrl } = show;

  return (
    <div className="tvshow-card">
      <img src={imageUrl} alt={`${name} poster`} className="tvshow-poster" />
      <div className="tvshow-details">
        <h2 className="tvshow-title">{name}</h2>
        <p className="tvshow-summary">{summary}</p>
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


export default TVShowCard;