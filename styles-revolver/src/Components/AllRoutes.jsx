import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Product from "../Pages/Product";
import ProductDetails from "../Pages/ProductDetails";
import PageNotFound from "../Pages/PageNotFound";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
