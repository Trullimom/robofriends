import React from "react";

const SearchBox = ({ serachfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--pink bg-pink"
        type="search"
        placeholder="search robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
