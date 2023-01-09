import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Products from '../Pages/Products'

const Router = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="kontakt" element={<Contact />}/>
        <Route path="login" element={<Login />}/>
        <Route path="produkter" element={<Products />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default Router