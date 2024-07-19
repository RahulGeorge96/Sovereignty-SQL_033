

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Center,
  Spinner,
} from "@chakra-ui/react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mock-server-app-5gxy.onrender.com/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={4}
      pt="100px" // Add padding-top to ensure content is visible below the fixed header
      maxW="1200px"
      mx="auto"
    >
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        {property.title}
      </Heading>
      <Image
        src={property.photos[0]}
        alt={property.title}
        boxSize="500px"
        objectFit="cover"
        mb={6}
        borderRadius="md"
      />
      <Box textAlign="center" maxW="800px">
        <Text fontSize="lg" mb={4}>
          {property.description}
        </Text>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Price: ₹{property.price}
        </Text>
        <Text fontSize="lg" mb={2}>
          Location: {property.location}
        </Text>
        <Text fontSize="lg">Amenities: {property.amenities.join(", ")}</Text>
      </Box>
    </Flex>
  );
};

export default PropertyDetail;
