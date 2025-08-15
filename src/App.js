import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import Category from "./components/Category";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/:categoryName" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
