import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrencyConverter from './CurrencyConverter';
import Navbar from './Components/Nav/Nav'; 
import SignUpForm from './Pages/SignUpPage';
import LoginForm from './Pages/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Weather from './weather'; 
import StockMarket from './StockMarket';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set this to true after successful login

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route
            path="/login"
            element={<LoginForm setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/currency-converter" element={<CurrencyConverter />} />
          {/* Use PrivateRoute for StockMarket */}
          <PrivateRoute
            path="/StockMarket"
            element={<StockMarket />}
            isAuthenticated={isAuthenticated}
          />
        </Routes>
        <Weather />
      </div>
    </Router>
  );
}

export default App;
