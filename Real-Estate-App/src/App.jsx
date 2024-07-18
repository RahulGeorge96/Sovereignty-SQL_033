// import { Route, Routes } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import PropertyDetail from "./components/PropertyDetail";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "./App.css";



// function App() {
 

//   return (
//     <div className="app">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//           <Route path="/property/:id" element={<PropertyDetail />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import HomePage from "./components/HomePage";
import PropertyDetail from "./components/PropertyDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Box as="main" p={4}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          {/* Uncomment the following lines if these routes are implemented */}
          {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
