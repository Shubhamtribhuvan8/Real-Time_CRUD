import React from "react";
import { Route, Routes } from "react-router-dom";
import PostComponent from "../Main/Post";
import GetComponent from "../Main/Get";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetComponent />} />
        <Route path="/post" element={<PostComponent />} />
        {/* <Route path="/cart" element={<h1><CartPage /></h1>} />
          <Route path="/orders" element={<h1><OrderPage /></h1>} />
          <Route path="/*" element={<h1><ProductPage /></h1>} />  */}
      </Routes>
    </div>
  );
}
