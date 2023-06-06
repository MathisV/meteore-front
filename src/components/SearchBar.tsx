import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);

    // Navigate to the details page
    navigate(`/details/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Recherche"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
