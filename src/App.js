import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import SearchAppBar from "./components/Appbar"
import Tour  from "./pages/Tour";


function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </Router>
  );
}

export default App;
