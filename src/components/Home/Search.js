import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setSearchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search by name"
        value={localSearchQuery}
        onChange={(e) => {
          setLocalSearchQuery(e.target.value);
          setSearchQuery(e.target.value);
        }}
      />
    </div>
  );
};

Search.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default Search;
