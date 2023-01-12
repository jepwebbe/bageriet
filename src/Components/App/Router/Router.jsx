import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../Pages/Contact";
import ContactThanks from "../../Pages/ContactThanks";
import Home from "../../Pages/Home/Home";
import NewBreadDetails from "../../Pages/Home/NewBreadDetails";
import LoginPage from "../../Pages/LoginPage";
import NewsPage from "../../Pages/NewsPage/NewsPage";
import { NewsPageDetails } from "../../Pages/NewsPage/NewsPageDetails";
import NotFound from "../../Pages/NotFound";
import Products from "../../Pages/Products/Products";
import ProductsCategory from "../../Pages/Products/ProductsCategory";
import { ProductDetails } from "../../Pages/Products/ProductsDetails";
import Thanks from "../../Pages/Thanks";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="nyheder" element={<NewsPage/>} />
      <Route path="nyheder/:id" element={<NewsPageDetails />} />
      <Route path="produkter" element={<Products />}>
      <Route path=":id" element={<ProductsCategory />} />

      </Route>
      <Route path="produkt/:id" element={<ProductDetails />} />
      <Route path="/tak" element={<Thanks />} />
      <Route path="/takbesked" element={<ContactThanks />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
