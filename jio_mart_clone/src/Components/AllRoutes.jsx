import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AllProduct from "../Pages/AllProduct";
import DummyHome from "./DummyHome";

export default function AllRoutes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<DummyHome />} />
        <Route path="/products/:product_category" element={<AllProduct />} />
      </Routes>
    </Box>
  );
}
