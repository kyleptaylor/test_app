import React from "react";
import { Link } from "react-router-dom";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import "./Home.css";

function Home() {
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
