import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from './Checkout'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/checkout/:id' element={<Checkout/>} />
        {/* <Route path='/' element={<Checkout/>} /> */}
      </Routes>
    </div>
  );
}
