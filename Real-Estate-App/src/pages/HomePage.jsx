import React from "react";
import { Box } from "@chakra-ui/react";
import PropertyList from "../components/PropertyList";

const HomePage = () => {
  return (
    <Box p={4} pt="80px">
      <PropertyList />
    </Box>
  );
};

export default HomePage;
