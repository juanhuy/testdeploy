import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import icon tìm kiếm
import "../styles/searchbar.css";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handleSearch}>
        <FaSearch /> {/* Icon thay cho chữ */}
      </button>
    </div>
  );
};

export default SearchBar;