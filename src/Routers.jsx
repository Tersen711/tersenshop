import React from "react";
import {Route, Routes} from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";

export default function Routers() {
  return (
    // <Sidebar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/categories" element={<Categories />} />
      <Route path = "/about" element={<AboutUs />} />
    </Routes>
    // </Sidebar>
  );
}
