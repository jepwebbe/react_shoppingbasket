import React, { useState } from "react";

const Search = ({ products, searchResults, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setnoResults] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // filter allBread array to find items that match searchTerm
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
    results < [0] ? setnoResults(true)  : setnoResults(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      {noResults  ? <p>Din søgning gav ingen resultater</p> : null}

    </form>
  );
};

export default Search;