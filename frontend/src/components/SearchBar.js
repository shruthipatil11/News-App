import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({phrase,handleSubmit,handleChange}) => (
    <div style={{ display: "flex", justifyContent: "center",marginTop: "10px"}}>
    <form onSubmit={handleSubmit}>
        <input
          placeholder="Search Keyword"
          name="topic"
          value={phrase}
          onChange={handleChange}
        />
        <button type="submit" color="green">
          Search
        </button>
      </form>
  </div>
);

export default SearchBar;