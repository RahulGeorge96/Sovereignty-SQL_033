// PopularCard.js

import React from "react";
import { Link } from "react-router-dom";

const PopularCard = ({ image, price, category }) => {
  const displayCategory =
    category === "pg"
      ? "PG"
      : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Link
      to={`/category/${category}`}
      className="border rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={displayCategory}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold capitalize">{displayCategory}</h2>
        <p className="text-lg font-semibold mt-2">Price: ₹{price}</p>
      </div>
    </Link>
  );
};

export default PopularCard;
