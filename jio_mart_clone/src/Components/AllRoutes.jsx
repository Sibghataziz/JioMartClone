import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import Navbar from "./Navbar";

export default function AllRoutes() {
  return (
    <Box>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/products/:product_category" element={<AllProduct />} />
      </Routes>
    </Box>
  );
}
