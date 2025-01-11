import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar..."
        className="search-input"
      />
      <button type="submit" className="search-button">Buscar</button>
    </form>
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


export default SearchBar;

