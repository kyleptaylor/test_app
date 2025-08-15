import React from "react";
import { Link } from "react-router-dom";
import Header from "./shared/Header";
import Navigation from "./shared/Navigation";
import Footer from "./shared/Footer";
import "./Article.css";

function Article() {
  return (
    <div className="article-page">
      {/* Header */}
      <Header pageTitle="Article" />

      {/* Navigation */}
      <Navigation />

      {/* Main Article Content */}
      <main className="article-content">
        <article className="article">
          <div className="article-intro">
            <div className="article-category">NEWS</div>
            <h1 className="article-title">
              Lost cat found the way back to her home
            </h1>

            <div className="article-excerpt">
              A cat named Mittens has made national headlines after she managed
              to find her way back home, despite being lost for over a week.
              Mittens, a three-year-old tabby, went missing on July 4th after
              she escaped through an open window at her owner's home.
            </div>

            <div className="article-meta">
              <div className="meta-left">
                <div className="article-author">TOM JERRY</div>
                <div className="article-date">15 June 2025</div>
              </div>
              <div className="social-share">
                <div className="share-icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="share-icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="share-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="share-icon">
                  <i className="fab fa-pinterest"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="main-image"></div>
          <div className="article-body">
            <p>
              The story of Mittens' incredible journey home has captured the
              hearts of people across the country. Her owner, Sarah Johnson, had
              given up hope after searching for days and posting flyers
              throughout their neighborhood.
            </p>

            <p>
              "I was devastated when Mittens went missing," said Johnson. "She's
              been part of our family since she was a kitten, and I couldn't
              imagine life without her. I searched everywhere, called all the
              local shelters, and even hired a pet detective."
            </p>

            <p>
              But then, exactly one week after her disappearance, Mittens
              appeared at the back door, looking slightly thinner but otherwise
              healthy. "I couldn't believe my eyes when I saw her sitting
              there," Johnson recalled. "It was like a miracle."
            </p>

            <div className="side-images">
              <div className="side-image"></div>
              <div className="side-image"></div>
            </div>

            <p>
              Veterinarians who examined Mittens after her return were amazed by
              her condition. "For a cat to survive a week outdoors and find her
              way back home is quite remarkable," said Dr. Michael Chen. "Cats
              have an incredible sense of direction and memory."
            </p>

            <p>
              The story has sparked discussions about the remarkable abilities
              of animals and the strong bonds they form with their human
              families. Mittens is now back to her normal routine, though she's
              become something of a local celebrity.
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <section className="comments-section">
          <h2 className="comments-title">Comments</h2>

          <div className="existing-comments">
            <div className="comment">
              <div className="comment-box">
                <div className="comment-image"></div>
                <div className="comment-text">Oh, I love happy endings!</div>
              </div>
              <div className="comment-actions">
                <button className="action-btn">
                  <i className="fas fa-thumbs-up"></i>
                </button>
                <button className="action-btn">
                  <i className="fas fa-thumbs-down"></i>
                </button>
              </div>
            </div>

            <div className="comment">
              <div className="comment-box">
                <div className="comment-image"></div>
                <div className="comment-text">Cute cat.</div>
              </div>
              <div className="comment-actions">
                <button className="action-btn">
                  <i className="fas fa-thumbs-up"></i>
                </button>
                <button className="action-btn">
                  <i className="fas fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </div>

          <button className="add-comment-btn">+ Add</button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Article;
