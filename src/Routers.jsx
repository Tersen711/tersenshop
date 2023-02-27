import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Categories from "./pages/Categories";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
// import PrivateRoute from "./hooks/PrivateRoute";
// import AuthPage from "./containers/AuthPage/AuthPage";
// import ConnectPage from "./containers/ConnectPage";
// import NotFoundPage from "./containers/NotFound";

export default function Routers() {
  return (
    // <Sidebar>
    <Routes>
      {/* <Route path="/" component={<AuthPage />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route exact path="/connect/:provider" component={<ConnectPage />} />
      <Route path="" component={<NotFoundPage />} /> */}
    </Routes>
    // </Sidebar>
  );
}
