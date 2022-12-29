import React, { useState } from "react";
import Body from "../Components/Body";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { options } from "../Components/userProfile/option-data";

import "./style.css";
import Products from "../Components/Products";
const Root = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="div">
        <Sidebar active={isActive} setActive={setIsActive} />
        <div className="body">
          <Navbar active={isActive} setActive={setIsActive} />
          <Routes>
            <Route path="/mahsulotlar" element={<Body active={isActive} />} />
            <Route path="/mahsulotlar/products/:id" element={<Products />} />
            <Route path="/" element={<Navigate to={"/mahsulotlar"} />} />
            <Route path="/e-tijorat" element={<h1>Coming soon...</h1>} />
            <Route path="/operatorlar" element={<h1>Coming soon...</h1>} />
            <Route path="/haridorlar" element={<h1>Coming soon...</h1>} />
            {options.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={<Navigate to={"/mahsulotlar"} />}
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Root;
