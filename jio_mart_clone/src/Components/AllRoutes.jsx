import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import DummyHome from "./DummyHome";
import Checkout from './Checkout'
import SignIn_SignUp from "../Pages/SignIn_SignUp";

export default function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/products/:product_category" element={<AllProduct />} />
        <Route path='/checkout/:id' element={<Checkout/>} />
        <Route path="/account/:page" element={<SignIn_SignUp/>}/>
      </Routes>
    </Box>
  );
}
