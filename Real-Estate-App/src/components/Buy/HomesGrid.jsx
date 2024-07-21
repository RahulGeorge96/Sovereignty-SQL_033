import React from "react";
import ListCard from "../Global/ListCard";
import { styles } from "../../styles/styles";
import SearchProperty from "../Global/SearchProperty";

const HomesGrid = ({ properties, onSearch, onFilterChange, onSortChange }) => {
  return (
    <div className={`py-6 lg:py-12 ${styles.paddingHorizontal}`}>
      <h1 className="text-3xl font-semibold">Search Properties to Buy</h1>
      <p className="text-gray-500 mt-4">Beehome's most popular watch lists.</p>
      <SearchProperty
        onSearch={onSearch}
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {properties.map((property) => (
          <ListCard
            key={property.id}
            id={property.id}
            image={property.photos[0]}
            price={property.price}
            title={property.title}
            description={property.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomesGrid;
