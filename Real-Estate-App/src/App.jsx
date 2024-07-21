// // src/App.jsx
// import React, { Suspense } from "react";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import { routes } from "./constants/routes";
// import ScrollToTopButton from "./components/Global/ScrollToTopButton";
// import Loader from "./components/Global/Loader";

// function App() {
//   return (
//     <>
//       <ScrollToTopButton />
//       <Suspense fallback={<Loader />}>
//         <Routes>
//           {routes.map((route, index) => (
//             <Route path={route.url} element={route.page} key={index} />
//           ))}
//         </Routes>
//       </Suspense>
//     </>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./constants/routes";
import ScrollToTopButton from "./components/Global/ScrollToTopButton";
import Loader from "./components/Global/Loader";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) =>
            route.protected ? (
              <Route
                key={index}
                path={route.url}
                element={isLoggedIn ? route.page : <Navigate to="/login" />}
              />
            ) : (
              <Route path={route.url} element={route.page} key={index} />
            )
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
