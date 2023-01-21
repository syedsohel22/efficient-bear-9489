import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import PageNotFound from "../Pages/PageNotFound";
import Admin from "../Pages/Admin";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
};

export default AllRoutes;
