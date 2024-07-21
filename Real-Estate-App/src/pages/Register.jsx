

import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast(); 

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate API call
    const response = await fetch(
      "https://mock-server-app-5gxy.onrender.com/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    // if (response.ok) {
    //   navigate("/login");
    //   alert("Signup successful");
    // } else {
    //   alert("Signup failed");
    // }


    if (response.ok) {
      toast({
        title: "Signup successful.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/login");
    } else {
      toast({
        title: "Signup failed.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Create an account</h2>
        <form onSubmit={handleRegister}>
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
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            Register
          </button>
        </form>
        <div className="mt-4 text-sm">
          <Link to="/login" className="text-yellow-500">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
