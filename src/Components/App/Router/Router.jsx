import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
