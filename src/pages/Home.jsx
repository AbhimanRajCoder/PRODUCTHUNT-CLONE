import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Home.css";
import ProductList from "../components/ProductList/ProductList";
import { api } from "../api/api";


function Home({ searchTerm, setSearchTerm, onSubscribe }) {

  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchThreads = async () => {
      try {
        const data = await api.getThreads();
        setThreads(data);
      } catch (err) {
        console.error("Failed to fetch threads:", err);
      }
    };

    fetchProducts();
    fetchThreads();
  }, []);


  // Sorting and Filtering Logic
  const getProcessedProducts = () => {
    let processed = [...products];

    // Apply Sorting/Filtering based on active filter
    if (activeFilter === "Popular") {
      processed.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    } else if (activeFilter === "Newest") {
      processed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeFilter === "Featured") {
      processed = processed.filter(p => p.isFeatured);
      processed.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    }

    // Apply Search Term Filter
    return processed.filter(product => {
      if (!searchTerm) return true;
      const lowerSearch = searchTerm.toLowerCase();
      const nameMatch = product.name?.toLowerCase().includes(lowerSearch);
      const taglineMatch = product.tagline?.toLowerCase().includes(lowerSearch);
      const categoryMatch = product.category?.toLowerCase().includes(lowerSearch);
      return nameMatch || taglineMatch || categoryMatch;
    });
  };

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
            <Link to="/" className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}>
              <span className="sidebar-icon">🏠</span> Home
            </Link>
            <Link to="/launches" className={`sidebar-link ${location.pathname === "/launches" ? "active" : ""}`}>
              <span className="sidebar-icon">🚀</span> Launches
            </Link>
            <Link to="/products" className={`sidebar-link ${location.pathname === "/products" ? "active" : ""}`}>
              <span className="sidebar-icon">📦</span> Products
            </Link>
            <Link to="/news" className={`sidebar-link ${location.pathname === "/news" ? "active" : ""}`}>
              <span className="sidebar-icon">📰</span> News
            </Link>
            <Link to="/community" className={`sidebar-link ${location.pathname === "/community" ? "active" : ""}`}>
              <span className="sidebar-icon">👥</span> Community
            </Link>
            <Link to="/topics" className={`sidebar-link ${location.pathname === "/topics" ? "active" : ""}`}>
              <span className="sidebar-icon">🏷️</span> Topics
            </Link>
          </div>

          <div className="sidebar-section threads-section">
            <h4 className="sidebar-heading">Trending Forum Threads</h4>
            <div className="threads-list">
              {threads.map(thread => (
                <div key={thread.id} className="thread-item">
                  <div className="thread-meta">
                    <span className="thread-icon">{thread.icon}</span>
                    <span className="thread-community">{thread.community}</span>
                  </div>
                  <h5 className="thread-title">{thread.title}</h5>
                  <div className="thread-stats">
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
                      Upvote ({thread.upvotes})
                    </span>
                    <span className="stat-dot">·</span>
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      {thread.comments}
                    </span>
                    {thread.online > 0 && (
                      <>
                        <span className="stat-dot">·</span>
                        <span className="thread-stat">
                          <span className="online-dot"></span>
                          {thread.online} online
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="threads-actions">
              <button className="btn-thread-secondary">View all</button>
              <button className="btn-thread-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M12 7v6M9 10h6" /></svg>
                Start new thread
              </button>
            </div>
          </div>
        </aside>

        {/* Main Feed */}
        <section className="home-feed">
          {/* Feed Header */}
          <div className="feed-header">
            <div className="feed-title-container">
              <h1 className="feed-title">Today's Top Products</h1>
              <p className="feed-date">{today}</p>
            </div>
            <div className="feed-filters">
              <button 
                className={`filter-btn ${activeFilter === "Popular" ? "active" : ""}`}
                onClick={() => setActiveFilter("Popular")}
              >
                Popular
              </button>
              <button 
                className={`filter-btn ${activeFilter === "Newest" ? "active" : ""}`}
                onClick={() => setActiveFilter("Newest")}
              >
                Newest
              </button>
              <button 
                className={`filter-btn ${activeFilter === "Featured" ? "active" : ""}`}
                onClick={() => setActiveFilter("Featured")}
              >
                Featured
              </button>
            </div>
          </div>

          {/* Product List */}
          {loading && (
            <div className="spinner-container">
              <div className="loading-spinner"></div>
            </div>
          )}
          {error && <p className="error-message">Error: {error}</p>}
          {!loading && !error && (
            <ProductList products={getProcessedProducts()} />
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
            <button className="subscribe-btn" onClick={onSubscribe}>Subscribe</button>

          </div>
        </aside>

      </div>
    </main>
  );
}

export default Home;
