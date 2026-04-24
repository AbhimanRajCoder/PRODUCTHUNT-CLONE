import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProductList from "../components/ProductList/ProductList";
import { api } from "../api/api";

function Home({ searchTerm, setSearchTerm, onSubscribe }) {
  const [activeFilter, setActiveFilter] = useState("Popular");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, threadsData] = await Promise.all([
          api.getProducts(),
          api.getThreads()
        ]);
        setProducts(productsData);
        setThreads(threadsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getProcessedProducts = () => {
    let processed = [...products];
    if (activeFilter === "Popular") {
      processed.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    } else if (activeFilter === "Newest") {
      processed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeFilter === "Featured") {
      processed = processed.filter(p => p.isFeatured);
      processed.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    }

    return processed.filter(product => {
      if (!searchTerm) return true;
      const lowerSearch = searchTerm.toLowerCase();
      return product.name?.toLowerCase().includes(lowerSearch) || 
             product.tagline?.toLowerCase().includes(lowerSearch);
    });
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="home-page-root">
      <div className="home-max-container">
        
        {/* LEFT COLUMN - MAIN FEED */}
        <main className="home-main-feed">
          <div className="feed-header-section">
            <div className="header-text">
              <h1 className="header-title">Today's Top Products</h1>
              <p className="header-subtitle">{today}</p>
            </div>
            
            <div className="header-filters">
              {["Popular", "Newest", "Featured"].map(filter => (
                <button 
                  key={filter}
                  className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="feed-content-area">
            {loading && (
              <div className="loading-state">
                <div className="spinner"></div>
              </div>
            )}
            {error && <div className="error-state">Something went wrong. Please try again.</div>}
            {!loading && !error && (
              <ProductList products={getProcessedProducts()} />
            )}
          </div>
        </main>

        {/* RIGHT COLUMN - SIDEBAR */}
        <aside className="home-sidebar-fixed">
          
          {/* NEWSLETTER CARD */}
          <div className="newsletter-premium-card">
            <div className="newsletter-icon">📬</div>
            <h3 className="newsletter-title">Join the Newsletter</h3>
            <p className="newsletter-text">
              Discover the best new products every day, curated for makers and enthusiasts.
            </p>
            <button className="newsletter-btn-primary" onClick={onSubscribe}>
              Subscribe Now
            </button>
          </div>

          {/* TRENDING THREADS CARD */}
          <div className="threads-premium-card">
            <h3 className="threads-header">Trending Forum Threads</h3>
            <div className="threads-scroll-area">
              {threads.map(thread => (
                <Link key={thread.id} to={`/community/${thread.id}`} className="thread-link-item">
                  <p className="thread-title-text">{thread.title}</p>
                  <div className="thread-meta-data">
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15"></polyline></svg>
                      {thread.upvotes}
                    </span>
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                      {thread.comments}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/community" className="view-all-link">
              View all discussions →
            </Link>
          </div>

        </aside>

      </div>
    </div>
  );
}

export default Home;
