// src/pages/CategoryPage.js
// src/pages/CategoryPage.js
// src/pages/CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListCard from '../components/Global/ListCard';


const CategoryPage = () => {
  const { category } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://mock-server-app-5gxy.onrender.com/properties');
        const filteredProperties = response.data.filter(property => {
          if (category === 'apartment') {
            return property.title.toLowerCase().includes('apartment') || 
                   (!property.title.toLowerCase().includes('pg') && !property.title.toLowerCase().includes('villa'));
          }
          return property.title.toLowerCase().includes(category);
        });
        setProperties(filteredProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [category]);

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Properties for {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
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

export default CategoryPage;
