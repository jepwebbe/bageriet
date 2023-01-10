import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../Pages/Contact";
import ContactThanks from "../../Pages/ContactThanks";
import Home from "../../Pages/Home/Home";
import NewBreadDetails from "../../Pages/Home/NewBreadDetails";
import Login from "../../Pages/Login";
import NotFound from "../../Pages/NotFound";
import Products from "../../Pages/Products/Products";
import Thanks from "../../Pages/Thanks";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/:id" element={<NewBreadDetails />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="produkter" element={<Products />} />
      <Route path="/tak" element={<Thanks />} />
      <Route path="/takbesked" element={<ContactThanks />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
