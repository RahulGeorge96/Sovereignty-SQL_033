import React, { useEffect, useState, useCallback } from "react";
import RentibleHomesGrid from "../components/Rent/RentibleHomesGrid";

const Rent = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    document.title = "Beehome - Rent";
    window.scrollTo(0, 0);

    fetch("https://mock-server-app-5gxy.onrender.com/properties")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        applyFilters(data, searchTerm, filter, sort);
      });
  }, []);

  const applyFilters = (properties, searchTerm, filter, sort) => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter((property) =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter) {
      filtered = filtered.filter((property) => property.location === filter);
    }

    if (sort === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProperties(filtered);
  };

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    applyFilters(properties, term, filter, sort);
  }, [properties, filter, sort]);

  const handleFilterChange = (value) => {
    setFilter(value);
    applyFilters(properties, searchTerm, value, sort);
  };

  const handleSortChange = (value) => {
    setSort(value);
    applyFilters(properties, searchTerm, filter, value);
  };

  return (
    <div>
      <RentibleHomesGrid
        properties={filteredProperties}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default Rent;
