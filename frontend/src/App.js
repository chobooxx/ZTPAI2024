import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import AuthService from "./service/auth.service";
import PrivateRoutes from "./utils/PrivateRoutes";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import BookPage from "./components/BookPage/BookPage";
import LoggedRoutes from "./utils/LoggedRoutes";

function App() {
  return (
    // <>
    //   <Routes>
    //     <Route index element={<LoginPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/homepage" element={<HomePage />} />
    //     <Route path="/categories" element={<CategoriesPage />} />
    //     <Route path="/book" element={<BookPage />} />
    //   </Routes>
    // </>
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path="/homepage" />
        <Route element={<CategoriesPage />} path="/categories" />
      </Route>
      <Route element={<LoggedRoutes />}>
        <Route element={<LoginPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Route>
    </Routes>
  );
}

export default App;
