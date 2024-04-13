import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

      </Routes>
    </>
  );
}

export default App;