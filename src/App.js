import "./App.css";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./MoviesList.css";
import CartPage from "./components/CartPage";
import { CartProvider } from "./components/CartContext";

import React from "react";



function App() {


  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/Movies/:id" element={<MovieDetails />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>


      </CartProvider>
    </div>
  );
}

export default App;
