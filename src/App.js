import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products"; 
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Products />} exact />
        <Route path="/cart" element={<Cart />} exact />
        {/* <Route component={NotFound}/> */}
      </Routes>

    </div>
  );
}

export default App