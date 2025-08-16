import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import "./Home.css";

function Home() {
  // This data would come from the user data in production
  const user = {
    id: "user-123",
    email: "user@example.com",
    firstName: "Tom",
    lastName: "Jerry",
  };

  const account = {
    id: "account-456",
    accountName: "Demo Account",
    payingStatus: "Paid",
    businessTier: "Premium",
    location: "USA",
    accountCreationDate: "2023-01-01",
    planPrice: 49.99,
  };

  useEffect(() => {
    if (window.pendo && typeof window.pendo.initialize === "function") {
      window.pendo.initialize({
        visitor: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        account: {
          id: account.id,
          accountName: account.accountName,
          payingStatus: account.payingStatus,
          businessTier: account.businessTier,
          location: account.location,
          accountCreationDate: account.accountCreationDate,
          planPrice: account.planPrice,
        },
      });
    }
  }, []);

  return (
    <div className="home">
      <Header />
      <Navigation />
      <main className="main-content">
        <div className="articles-container">
          <Link to="/article" className="article-card">
            <div className="article-image"></div>
            <div className="article-category">NEWS</div>
            <h3 className="article-title">
              Lost cat found the way back to her home
            </h3>
            <div className="article-info">
              <div className="article-author">TOM JERRY</div>
              <div className="article-date">13 June 2023</div>
            </div>
          </Link>

          <Link to="/article" className="article-card">
            <div className="article-image"></div>
            <div className="article-category">SPORTS</div>
            <h3 className="article-title">
              Lost cat found the way back to her home
            </h3>
            <div className="article-info">
              <div className="article-author">FRED BALLER</div>
              <div className="article-date">14 June 2023</div>
            </div>
          </Link>

          <Link to="/article" className="article-card">
            <div className="big-article-image"></div>
            <div className="article-category">CULTURE</div>
            <h3 className="article-title">
              Lost cat found the way back to her home
            </h3>
            <p className="article-excerpt">
              Summer is the perfect time to indulge in some leisurely reading,
              whether it's lying on the beach or lounging in the park. So if
              you're looking for a way to unwind this summer, why not pick up a
              few books and escape into some captivating stories?
            </p>
            <div className="article-info">
              <div className="article-author">TOM JERRY</div>
              <div className="article-date">13 June 2023</div>
            </div>
          </Link>

          <Link to="/article" className="article-card">
            <div className="article-image"></div>
            <div className="article-category">NEWS</div>
            <h3 className="article-title">
              Lost cat found the way back to her home
            </h3>
            <div className="article-info">
              <div className="article-author">TOM JERRY</div>
              <div className="article-date">13 June 2023</div>
            </div>
          </Link>

          <Link to="/article" className="article-card">
            <div className="article-image"></div>
            <div className="article-category">NEWS</div>
            <h3 className="article-title">
              Lost cat found the way back to her home
            </h3>
            <div className="article-info">
              <div className="article-author">TOM JERRY</div>
              <div className="article-date">13 June 2023</div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
