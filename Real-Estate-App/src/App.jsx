

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box} from "@chakra-ui/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { AllRoutes } from "./AllRoutes";

function App() {
  return (
    <>
      <Header />
      <Box as="main" p={4}>
          <AllRoutes/>
      </Box>
      <Footer />
    </>
  );
}

export default App;
