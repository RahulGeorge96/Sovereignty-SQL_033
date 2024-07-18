

import React, { useState, useEffect, useCallback } from "react";
import { Box, Input, Select, SimpleGrid, HStack } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://mock-server-app-5gxy.onrender.com/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  const fetchProperties = () => {
    fetch("https://mock-server-app-5gxy.onrender.com/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data));
  };

  // Debounce function
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      setSearch(searchTerm);
    }, 300),
    []
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value === "") {
      fetchProperties(); // Reset to default properties
    }
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    if (e.target.value === "") {
      fetchProperties(); // Reset to default properties
    }
  };

  const filteredProperties = properties
    .filter((property) =>
      property.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((property) => (filter ? property.location === filter : true))
    .sort((a, b) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      } else if (sort === "price-desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  return (
    <Box p={4}>
      <HStack spacing={4} mb={4}>
        <Input
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
          borderRadius="md"
          size="md"
          variant="outline"
          focusBorderColor="teal.400"
        />
        <Select
          placeholder="All Locations"
          onChange={handleFilterChange}
          value={filter}
          borderRadius="md"
          size="md"
          variant="outline"
          focusBorderColor="teal.400"
        >
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
        </Select>
        <Select
          placeholder="Sort By"
          onChange={handleSortChange}
          value={sort}
          borderRadius="md"
          size="md"
          variant="outline"
          focusBorderColor="teal.400"
        >
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
        </Select>
      </HStack>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PropertyList;
