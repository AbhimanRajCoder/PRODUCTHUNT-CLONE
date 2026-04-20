import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductList from "../components/ProductList/ProductList";

function Home({ searchTerm, setSearchTerm }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5001/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get today's date for the header
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="home-page">
      <div className="home-container">

        {/* Left Sidebar */}
        <aside className="home-sidebar-left">
          <div className="sidebar-nav">
            <a href="/" className="sidebar-link active">
              <span className="sidebar-icon">🏠</span> Home
            </a>
            <a href="/launches" className="sidebar-link">
              <span className="sidebar-icon">🚀</span> Launches
            </a>
            <a href="/products" className="sidebar-link">
              <span className="sidebar-icon">📦</span> Products
            </a>
            <a href="/news" className="sidebar-link">
              <span className="sidebar-icon">📰</span> News
            </a>
            <a href="/community" className="sidebar-link">
              <span className="sidebar-icon">👥</span> Community
            </a>
            <a href="/topics" className="sidebar-link">
              <span className="sidebar-icon">🏷️</span> Topics
            </a>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-heading">Trending Topics</h4>
            <a href="#" className="topic-link" onClick={(e) => { e.preventDefault(); setSearchTerm("AI"); }}># Artificial Intelligence</a>
            <a href="#" className="topic-link" onClick={(e) => { e.preventDefault(); setSearchTerm("SaaS"); }}># SaaS</a>
            <a href="#" className="topic-link" onClick={(e) => { e.preventDefault(); setSearchTerm("Developer Tools"); }}># Developer Tools</a>
            <a href="#" className="topic-link" onClick={(e) => { e.preventDefault(); setSearchTerm("Design"); }}># Design</a>
            <a href="#" className="topic-link" onClick={(e) => { e.preventDefault(); setSearchTerm("Productivity"); }}># Productivity</a>
          </div>
        </aside>

        {/* Main Feed */}
        <section className="home-feed">
          {/* Feed Header */}
          <div className="feed-header">
            <div>
              <h1 className="feed-title">Today's Top Products</h1>
              <p className="feed-date">{today}</p>
            </div>
            <div className="feed-filters">
              <button className="filter-btn active">Popular</button>
              <button className="filter-btn">Newest</button>
              <button className="filter-btn">Featured</button>
            </div>
          </div>

          {/* Product List */}
          {loading && <p>Loading products...</p>}
          {error && <p className="error-message">Error: {error}</p>}
          {!loading && !error && (
            <ProductList 
              products={products.filter(product => {
                if (!searchTerm) return true;
                const lowerSearch = searchTerm.toLowerCase();
                const nameMatch = product.name?.toLowerCase().includes(lowerSearch);
                const taglineMatch = product.tagline?.toLowerCase().includes(lowerSearch);
                const categoryMatch = product.category?.toLowerCase().includes(lowerSearch);
                return nameMatch || taglineMatch || categoryMatch;
              })} 
            />
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="home-sidebar-right">
          <div className="sidebar-section">
            <h4 className="sidebar-heading">🔥 Launch of the Day</h4>
            <div className="launch-card">
              <span className="launch-emoji">🎨</span>
              <div>
                <p className="launch-name">Midjourney V7</p>
                <p className="launch-tagline">Next-gen AI image generation</p>
              </div>
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-heading">📢 Upcoming Launches</h4>
            <div className="upcoming-item">
              <span className="upcoming-dot"></span>
              <p>InfiniteCanvas — AI whiteboard</p>
            </div>
            <div className="upcoming-item">
              <span className="upcoming-dot"></span>
              <p>DevNotes 3.0 — Code journaling</p>
            </div>
            <div className="upcoming-item">
              <span className="upcoming-dot"></span>
              <p>CloudBase — Serverless backend</p>
            </div>
          </div>

          <div className="sidebar-section">
            <h4 className="sidebar-heading">📬 Newsletter</h4>
            <p className="newsletter-text">
              Get the best new products in your inbox, every day.
            </p>
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </aside>

      </div>
    </main>
  );
}

export default Home;
