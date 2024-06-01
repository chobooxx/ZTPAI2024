import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import LoggedRoutes from "./utils/LoggedRoutes";
import BookPage from "./components/BookPage/BookPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ToReadPage from "./components/ToReadPage/ToReadPage";
import SearchPage from "./components/SearchPage/SearchPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<HomePage />} path="/homepage" />
        <Route element={<CategoriesPage />} path="/categories" />
        <Route element={<BookPage />} path="/book/:id" />
        <Route element={<CategoryPage />} path="/category/:categoryId" />
        <Route element={<ToReadPage />} path="/to_read" />
        <Route element={<SearchPage />} path="/search" />
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
