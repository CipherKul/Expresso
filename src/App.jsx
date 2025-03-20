import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EspressoHub from "./EspressoHub"; // Ensure the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EspressoHub />} />
        <Route path="/menu" element={<div>Menu Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
