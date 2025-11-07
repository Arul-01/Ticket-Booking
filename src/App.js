import "./App.css";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import "./MoviesList.css";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";
import Login from "./components/Login";
import React, { useState } from "react";



function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/moviesList" element={<MoviesList />} />
            <Route path="/Movies/:id" element={<MovieDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>

        <Router>
          <Routes>
            <Route
              path="/"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />
            <Route
              path="/moviesList"
              element={isLoggedIn ? <MoviesList /> : <Navigate to="/login" />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
