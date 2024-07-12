import React from "react";
import { SearchBarContainer } from "../styles.js";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <SearchBarContainer>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button onClick={handleSearch}>Search</button>
    </SearchBarContainer>
  );
};

export default SearchBar;
