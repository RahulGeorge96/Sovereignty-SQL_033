


import React from "react";
import { Box, Flex, Heading, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" p={4}>
      <Flex justify="space-between" flexWrap="wrap">
        <VStack align="start" spacing={2}>
          <Heading as="h2" size="md">
            About Us
          </Heading>
          <Text>
            We provide the best real estate listings in the city. Find your
            dream home with us.
          </Text>
        </VStack>
        <VStack align="start" spacing={2}>
          <Heading as="h2" size="md">
            Quick Links
          </Heading>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </VStack>
        <VStack align="start" spacing={2}>
          <Heading as="h2" size="md">
            Follow Us
          </Heading>
          <Link href="https://facebook.com">Facebook</Link>
          <Link href="https://twitter.com">Twitter</Link>
          <Link href="https://instagram.com">Instagram</Link>
        </VStack>
      </Flex>
      <Text textAlign="center" mt={4}>
        &copy; 2024 Real Estate Listings. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

