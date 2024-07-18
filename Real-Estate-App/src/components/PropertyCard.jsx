

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={handleCardClick}
      cursor="pointer"
      width="100%"
      maxW="sm" // Medium card size
    >
      <Box height="200px" overflow="hidden">
        <Image
          src={property.photos[0]}
          alt={property.title}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <Box p={4}>
        <Heading as="h2" size="md">
          {property.title}
        </Heading>
        <Text mt={2}>{property.description}</Text>
        <Text mt={2} fontWeight="bold">
          Price: ₹{property.price}
        </Text>
      </Box>
    </Box>
  );
};

export default PropertyCard;
