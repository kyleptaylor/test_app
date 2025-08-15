import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import "./Category.css";

function Category() {
  const { categoryName } = useParams();

  // Category data - in a real app, this would come from an API
  const categoryData = {
    latest: {
      title: "Latest",
      description:
        "Stay up to date with the most recent news and developments from around the world. Our latest section brings you breaking news, current events, and timely updates as they happen.",
    },
    world: {
      title: "World",
      description:
        "Explore global perspectives and international affairs. From political developments to cultural events, our world section covers stories that shape our interconnected planet.",
    },
    sports: {
      title: "Sports",
      description:
        "Get the latest sports news, scores, and analysis from around the world. From major leagues to international competitions, we cover all aspects of athletic achievement.",
    },
    culture: {
      title: "Culture",
      description:
        "Welcome to the Culture section of our news, where we explore the latest trends and topics in art, music, film, literature, and more. From groundbreaking exhibitions and performances to up-and-coming artists and cultural events, we aim to provide you with a diverse range of stories that showcase the richness and diversity of our world's creative landscape.",
    },
    economy: {
      title: "Economy",
      description:
        "Stay informed about economic trends, market developments, and financial news. Our economy section provides insights into business, finance, and economic policy that affect our daily lives.",
    },
  };

  const currentCategory = categoryData[categoryName] || categoryData.latest;

  return (
    <div className="category-page">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="category-content">
        {/* Category Introduction */}
        <div className="category-intro">
          <h1 className="category-title">{currentCategory.title}</h1>
          <p className="category-description">{currentCategory.description}</p>
        </div>

        {/* Article Grid */}
        <section className="article-grid">
          {/* First Row - 4 Articles */}
          <div className="articles-row">
            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">NEWS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">CULTURE</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">SPORTS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">SPORTS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>
          </div>

          {/* Second Row - 4 Articles */}
          <div className="articles-row">
            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">NEWS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">CULTURE</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">SPORTS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>

            <Link to="/article" className="article-card">
              <div className="article-image"></div>
              <div className="article-category">SPORTS</div>
              <h3 className="article-title">
                Lost cat found the way back to her home
              </h3>
              <div className="article-info">
                <div className="article-author">By John Doe</div>
                <div className="article-date">13 June 2024</div>
              </div>
            </Link>
          </div>

          {/* Load More Button */}
          <div className="load-more-container">
            <button className="load-more-btn">Load more</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Category;
