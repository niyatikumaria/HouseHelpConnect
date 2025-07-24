import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterMaid from "./pages/RegisterMaid";
import Maids from "./pages/Maids";
import BookMaid from "./pages/BookMaid";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterMaid />} />
        <Route path="/maids" element={<Maids />} />
        <Route path="/book/:maidId" element={<BookMaid />} />
      </Routes>
    </div>
  );
}

export default App;
