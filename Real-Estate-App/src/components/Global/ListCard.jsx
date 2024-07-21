import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ id, image, price, title, description }) => {
  return (
    <Link to={`/property/${id}`} className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold mt-2">Price: ₹{price}</p>
      </div>
    </Link>
  );
};

export default ListCard;
