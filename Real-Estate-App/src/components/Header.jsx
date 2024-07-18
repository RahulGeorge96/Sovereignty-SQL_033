

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, HStack, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      bg="teal.500"
      p={4}
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
    >
      <HStack spacing={8} justify="space-between">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Heading as="h1" size="lg">
            Real Estate Accommodation
          </Heading>
        </Link>
        <HStack as="nav" spacing={4}>
          <Link as={RouterLink} to="/">
            Home
          </Link>
          <Link as={RouterLink} to="/about">
            About
          </Link>
          <Link as={RouterLink} to="/contact">
            Contact
          </Link>
          <Link as={RouterLink} to="/login">
            Login
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;

