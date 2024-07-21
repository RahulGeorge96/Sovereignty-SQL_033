// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add login logic here, e.g., API call for user authentication
//     console.log("Logging in with:", { email, password });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold mb-6">Welcome back! Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full p-2 border rounded pr-10"
//               />
//               <button
//                 type="button"
//                 className="absolute right-2 top-2"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19.5a10.05 10.05 0 01-1.875-.675m7.95-3.3A8.962 8.962 0 0019.5 12c0-.96-.172-1.875-.487-2.725m-3.563-4.05A8.962 8.962 0 0012 4.5c-.96 0-1.875.172-2.725.487m-4.05 3.563A8.962 8.962 0 004.5 12c0 .96.172 1.875.487 2.725m3.563 4.05A8.962 8.962 0 0012 19.5c.96 0 1.875-.172 2.725-.487m4.05-3.563A8.962 8.962 0 0019.5 12c0-.96-.172-1.875-.487-2.725m-3.563-4.05A8.962 8.962 0 0012 4.5c-.96 0-1.875.172-2.725.487"></path>
//                   </svg>
//                 ) : (
//                   <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 0a9 9 0 11-6 0m6 0a9 9 0 10-6 0"></path>
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-sm">
//           <Link to="/forgot-password" className="text-yellow-500">Forgot Password?</Link>
//         </div>
//         <div className="mt-2 text-sm">
//           <Link to="/register" className="text-yellow-500">Don't have an account? Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulate API call
    const users = await fetch(
      "https://mock-server-app-5gxy.onrender.com/users"
    ).then((res) => res.json());

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    // if (user) {
    //   login();
    //   navigate("/");
    //   alert("Login successful.");
    // } else {
    //   alert("Invalid credentials.");
    // }

     if (user) {
       login();
       navigate("/");
       toast({
         title: "Login successful.",
         status: "success",
         duration: 5000,
         isClosable: true,
       });
     } else {
       toast({
         title: "Invalid credentials.",
         status: "error",
         duration: 5000,
         isClosable: true,
       });
     }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Welcome back! Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border rounded pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19.5a10.05 10.05 0 01-1.875-.675m7.95-3.3A8.962 8.962 0 0019.5 12c0-.96-.172-1.875-.487-2.725m-3.563-4.05A8.962 8.962 0 0012 4.5c-.96 0-1.875.172-2.725.487m-4.05 3.563A8.962 8.962 0 004.5 12c0 .96.172 1.875.487 2.725m3.563 4.05A8.962 8.962 0 0012 19.5c.96 0 1.875-.172 2.725-.487m4.05-3.563A8.962 8.962 0 0019.5 12c0-.96-.172-1.875-.487-2.725m-3.563-4.05A8.962 8.962 0 0012 4.5c-.96 0-1.875.172-2.725.487"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m6 0a9 9 0 11-6 0m6 0a9 9 0 10-6 0"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
        {/* <div className="mt-4 text-sm">
          <Link to="/forgot-password" className="text-yellow-500">
            Forgot Password?
          </Link>
        </div> */}
        <div className="mt-2 text-sm">
          <Link to="/register" className="text-yellow-500">
            Don't have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

