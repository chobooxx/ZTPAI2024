import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import AuthService from "./service/auth.service";

import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import BookPage from "./components/BookPage/BookPage";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      // setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

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
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      {{} ? (
        <>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/book" element={<BookPage />} />
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </Routes>
  );
}

export default App;
