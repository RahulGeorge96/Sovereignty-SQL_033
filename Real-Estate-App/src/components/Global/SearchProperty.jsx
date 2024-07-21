import React, { useCallback, useState } from "react";
import { styles } from "../../styles/styles";

const SearchProperty = ({ onSearch, onFilterChange, onSortChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      onSearch(term);
    }, 300),
    [onSearch]
  );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div className={`w-full py-12 ${styles.paddingHorizontal}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 custom-shadow gap-6 lg:gap-3 py-6 px-4 rounded-xl">
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label htmlFor="location" className="font-medium text-sm text-gray-400">
            Location
          </label>
          <input
            type="text"
            className="w-full text-sm outline-none placeholder:text-black"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label htmlFor="filter" className="font-medium text-sm text-gray-400">
            Location Filter
          </label>
          <select
            className="w-full text-sm outline-none px-0 bg-transparent"
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Koramangala">Koramangala</option>
            <option value="HSR Layout">HSR Layout</option>
            <option value="Whitefield">Whitefield</option>
            <option value="Indiranagar">Indiranagar</option>
            <option value="BTM Layout">BTM Layout</option>
            <option value="Electronic City">Electronic City</option>
            <option value="JP Nagar">JP Nagar</option>
            <option value="Bellandur">Bellandur</option>
            <option value="Marathahalli">Marathahalli</option>
            <option value="Sarjapur">Sarjapur</option>
          </select>
        </div>
        <div className="lg:border-r px-3 flex flex-col gap-1.5 border-b pb-2 lg:border-b-0 lg:pb-0">
          <label htmlFor="sort" className="font-medium text-sm text-gray-400">
            Sort By
          </label>
          <select
            className="w-full text-sm outline-none px-0 bg-transparent"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-asc">Price Ascending</option>
            <option value="price-desc">Price Descending</option>
          </select>
        </div>
        <div className="flex items-center justify-center px-3">
          <button className="text-sm font-medium bg-yellow-500 w-full h-full rounded-lg text-white py-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
