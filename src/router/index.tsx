import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter, RouterProps } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const RouteDom = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


export default RouteDom;