import React from "react";
import { Route, Routes } from "react-router-dom";
import Get from "../Main/Get";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Get />} />
        {/* <Route path="/product/:id" element={<h1><ProductDetails /></h1>} />
          <Route path="/cart" element={<h1><CartPage /></h1>} />
          <Route path="/orders" element={<h1><OrderPage /></h1>} />
          <Route path="/*" element={<h1><ProductPage /></h1>} />  */}
      </Routes>
    </div>
  );
}
