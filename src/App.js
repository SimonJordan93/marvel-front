import "./App.css";

// Package imports
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Comic from "./pages/Comic/Comic";
import Favorite from "./pages/Favorite/Favorite";

// Main App function
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comics/:id" element={<Comic />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
