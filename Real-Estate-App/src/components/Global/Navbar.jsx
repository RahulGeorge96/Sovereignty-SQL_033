// import React from "react";
// import { Link } from "react-router-dom";
// import { styles } from "../../styles/styles";
// import { FaForumbee } from "react-icons/fa";
// import { CgMenuRight } from "react-icons/cg";

// const Navbar = () => {
//   return (
//     <div
//       className={`py-6 ${styles.paddingHorizontal} flex items-center justify-between relative overflow-x-hidden`}
//     >
//       <Link to="/" className="font-semibold text-2xl flex items-center gap-2">
//         <FaForumbee className="text-yellow-500 text-3xl" />
//         Beehome
//       </Link>
//       <div className="hidden lg:flex items-center gap-x-12">
//         <Link to="/rent" className="text-base font-medium">
//           Rent
//         </Link>
//         <Link to="/buy" className="text-base font-medium">
//           Buy
//         </Link>
//         <Link to="/sell" className="text-base font-medium">
//           Sell
//         </Link>
//         <Link to="/find-agent" className="text-base font-medium">
//           Find agent
//         </Link>
//         {/* <Link to="/advertise" className="text-base font-medium">
//           Advertise
//         </Link> */}
//       </div>
//       <div className="hidden lg:flex items-center gap-x-8">
//         <Link to="/login" className="text-base font-medium">
//           Login
//         </Link>
//         <Link to="/register" className="text-base font-medium">
//           Register
//         </Link>
//         <Link
//           to="/"
//           className={`text-base font-medium ${styles.bgYellow} text-white px-5 py-2 rounded-full`}
//         >
//           List your property
//         </Link>
//       </div>
//       <div className="flex items-center gap-4 lg:hidden">
//         <Link
//           to="/login"
//           className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
//         >
//           Login
//         </Link>
//         <Link
//           to="/register"
//           className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
//         >
//           Register
//         </Link>
//         <button className="">
//           <CgMenuRight className="text-black text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaForumbee } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { useAuth } from "../../context/AuthContext";
import { styles } from "../../styles/styles";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={`py-6 ${styles.paddingHorizontal} flex items-center justify-between relative overflow-x-hidden`}
    >
      <Link to="/" className="font-semibold text-2xl flex items-center gap-2">
        <FaForumbee className="text-yellow-500 text-3xl" />
        Beehome
      </Link>
      <div className="hidden lg:flex items-center gap-x-12">
        <Link to="/rent" className="text-base font-medium">
          Rent
        </Link>
        <Link to="/buy" className="text-base font-medium">
          Buy
        </Link>
        <Link to="/sell" className="text-base font-medium">
          Sell
        </Link>
        <Link to="/find-agent" className="text-base font-medium">
          Find agent
        </Link>
        {/* <Link to="/advertise" className="text-base font-medium">
          Advertise
        </Link> */}
      </div>
      <div className="hidden lg:flex items-center gap-x-8">
        {isLoggedIn ? (
          <>
            <Link
              to="/"
              className={`text-base font-medium ${styles.bgYellow} text-white px-5 py-2 rounded-full`}
            >
              List your property
            </Link>
            <button
              onClick={handleLogout}
              className={`text-base font-medium ${styles.bgYellow} text-white px-5 py-2 rounded-full`}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-base font-medium">
              Login
            </Link>
            <Link to="/register" className="text-base font-medium">
              Register
            </Link>
            <Link
              to="/"
              className={`text-base font-medium ${styles.bgYellow} text-white px-5 py-2 rounded-full`}
            >
              List your property
            </Link>
          </>
        )}
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm font-medium bg-yellow-500 px-4 py-2 text-white rounded-full"
            >
              Register
            </Link>
          </>
        )}
        <button className="">
          <CgMenuRight className="text-black text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
