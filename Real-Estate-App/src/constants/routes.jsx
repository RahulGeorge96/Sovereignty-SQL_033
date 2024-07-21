// import { lazy } from "react";
// import Layout from "../components/Global/Layout";
// import Listings from "../pages/Listings";
// const Home = lazy(() => import("../pages/Home"));
// const Sell = lazy(() => import("../pages/Sell"));
// const Buy = lazy(() => import("../pages/Buy"));
// const Rent = lazy(() => import("../pages/Rent"));
// const Login = lazy(() => import("../pages/Login"));
// const Register = lazy(() => import("../pages/Register"));
// const NotFound = lazy(() => import("../pages/NotFound"));
// const FindAgent = lazy(() => import("../pages/FindAgent"));
// const PropertyDetails = lazy(() => import("../pages/PropertyDetails"));

// export const routes = [
//   {
//     title: "Home Page",
//     url: "/",
//     page: <Layout pages={<Home />} />,
//   },
//   {
//     title: "Buy Homes Page",
//     url: "/buy",
//     page: <Layout pages={<Buy />} />,
//   },
//   {
//     title: "Sell Homes Page",
//     url: "/sell",
//     page: <Layout pages={<Sell />} />,
//   },
//   {
//     title: "Rent Homes Page",
//     url: "/rent",
//     page: <Layout pages={<Rent />} />,
//   },
//   {
//     title: "Find Agent Page",
//     url: "/find-agent",
//     page: <Layout pages={<FindAgent />} />,
//   },
//   // Uncomment this if you want to use the login page
//   {
//     title: "Login Page",
//     url: "/login",
//     page: <Layout pages={<Login />} />,
//   },
//   {
//     title: "Register Page",
//     url: "/register",
//     page: <Layout pages={<Register />} />,
//   },
//   {
//     title: "Listings Page",
//     url: "/listings",
//     page: <Layout pages={<Listings />} />,
//   },
//   {
//     title: "Property Details Page",
//     url: "/property/:id",
//     page: <Layout pages={<PropertyDetails />} />,
//   },
//   {
//     title: "Not Found Page",
//     url: "/:xyz",
//     page: <Layout pages={<NotFound />} />,
//   },
// ];

import { lazy } from "react";
import Layout from "../components/Global/Layout";
import Listings from "../pages/Listings";


const Home = lazy(() => import("../pages/Home"));
const Sell = lazy(() => import("../pages/Sell"));
const Buy = lazy(() => import("../pages/Buy"));
const Rent = lazy(() => import("../pages/Rent"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const FindAgent = lazy(() => import("../pages/FindAgent"));
const PropertyDetails = lazy(() => import("../pages/PropertyDetails"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<Home />} />,
  },
  {
    title: "Buy Homes Page",
    url: "/buy",
    page: <Layout pages={<Buy />} />,
    protected: true,
  },
  {
    title: "Sell Homes Page",
    url: "/sell",
    page: <Layout pages={<Sell />} />,
    protected: true,
  },
  {
    title: "Rent Homes Page",
    url: "/rent",
    page: <Layout pages={<Rent />} />,
    protected: true,
  },
  {
    title: "Find Agent Page",
    url: "/find-agent",
    page: <Layout pages={<FindAgent />} />,
  },
  {
    title: "Login Page",
    url: "/login",
    page: <Layout pages={<Login />} />,
  },
  {
    title: "Register Page",
    url: "/register",
    page: <Layout pages={<Register />} />,
  },
  {
    title: "Listings Page",
    url: "/listings",
    page: <Layout pages={<Listings />} />,
    protected: true,
  },
  {
    title: "Property Details Page",
    url: "/property/:id",
    page: <Layout pages={<PropertyDetails />} />,
    protected: true,
  },

  {
    title: "Category Page",
    url: "/category/:category",
    page: <Layout pages={<CategoryPage />} />,
    protected: true,
  },
  {
    title: "Not Found Page",
    url: "/:xyz",
    page: <Layout pages={<NotFound />} />,
  },
];
