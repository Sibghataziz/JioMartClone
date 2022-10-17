import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AllProduct from "../Pages/AllProduct";
import Navbar from "./Navbar";
=======
import Checkout from './Checkout'
>>>>>>> 6791b5191b85cdda6e514ff653329c009af08777

export default function AllRoutes() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
      
        <Route path="/products/:product_category" element={<AllProduct />} />
=======
        <Route path='/checkout/:id' element={<Checkout/>} />
        {/* <Route path='/' element={<Checkout/>} /> */}
>>>>>>> 6791b5191b85cdda6e514ff653329c009af08777
      </Routes>
    </div>
  );
}
