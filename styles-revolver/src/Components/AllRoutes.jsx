import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Login from "../Pages/Login";


import Checkout from "../Pages/Checkout";
import PageNotFound from "../Pages/PageNotFound";
import Admin from "../Pages/Admin";
import Saree from "../Pages/Products/Saree";
import SalwarKameez from "../Pages/Products/SalwarKameez";
import Kids from "../Pages/Products/Kids";
import ProductDetails from "../Pages/ProductDetails";
import Payment from "../Pages/Payment";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/payment" element={<Payment />}></Route>

      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/saree" element={<Saree />}></Route>
      <Route path="/salwarkameez" element={<SalwarKameez />}></Route>
      <Route path="/kids" element={<Kids />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
};

export default AllRoutes;
