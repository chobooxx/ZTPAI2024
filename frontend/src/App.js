import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";
import BookPage from "./components/BookPage/BookPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
