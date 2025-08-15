import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import Category from "./components/Category";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

// Tracks Pendo page views on every route change
function PendoRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.pendo && typeof window.pendo.pageLoad === "function") {
      window.pendo.pageLoad();
    }
  }, [location]);

  return null;
}

function App() {
  // Initialize Pendo after login — for demo purposes we run it immediately
  useEffect(() => {
    if (window.pendo && typeof window.pendo.initialize === "function") {
      window.pendo.initialize({
        visitor: {
          id: "user-123",
          email: "user@example.com",
          firstName: "John",
          lastName: "Doe",
        },
        account: {
          id: "account-456",
          accountName: "Demo Account",
        },
      });
    }
  }, []);

  return (
    <Router>
      <PendoRouteTracker />
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
