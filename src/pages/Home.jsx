import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ProductList from "../components/ProductList/ProductList";
import { api } from "../api/api";

import "./Home.css";

function Home({ onSubscribe }) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const [activeFilter, setActiveFilter] = useState("Popular");
  const [allProducts, setAllProducts] = useState([]);
  const [trendingThreads, setTrendingThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const [productsResponse, threadsResponse] = await Promise.all([
          api.getProducts(),
          api.getThreads()
        ]);
        
        setAllProducts(productsResponse);
        setTrendingThreads(threadsResponse);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHomeData();
  }, []);

  function getFilteredProducts() {
    let filtered = [...allProducts];

    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter((product) => {
        const nameMatch = product.name?.toLowerCase().includes(lowerSearch);
        const taglineMatch = product.tagline?.toLowerCase().includes(lowerSearch);
        const categoryMatch = product.category?.toLowerCase().includes(lowerSearch);
        return nameMatch || taglineMatch || categoryMatch;
      });
    }

    // Sort or filter by active category
    if (activeFilter === "Popular") {
      filtered.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    } else if (activeFilter === "Newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeFilter === "Featured") {
      filtered = filtered.filter((product) => product.isFeatured);
      filtered.sort((a, b) => (b.upvotes || 0) - (a.upvotes || 0));
    }

    return filtered;
  }

  const displayProducts = getFilteredProducts();

  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="home-page-root">
      <div className="home-max-container">
        
        <main className="home-main-feed">
          <div className="feed-header-section">
            <div className="header-text">
              <h1 className="header-title">
                {searchTerm ? `Results for "${searchTerm}"` : "Today's Top Products"}
              </h1>
              <p className="header-subtitle">{formattedDate}</p>
            </div>
            
            {!searchTerm && (
              <div className="header-filters">
                {["Popular", "Newest", "Featured"].map((filter) => (
                  <button 
                    key={filter}
                    className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="feed-content-area">
            {isLoading && (
              <div className="loading-state">
                <div className="spinner" />
              </div>
            )}

            {errorMessage && (
              <div className="error-state">
                Something went wrong. Please try again.
              </div>
            )}
            
            {!isLoading && !errorMessage && displayProducts.length > 0 && (
              <ProductList products={displayProducts} />
            )}

            {!isLoading && !errorMessage && displayProducts.length === 0 && (
              <div className="no-results-home">
                <div className="no-results-icon">🔍</div>
                <h2>No results found</h2>
                <p>We couldn't find any products matching "{searchTerm}".</p>
                <Link to="/" className="clear-search-btn">View all products</Link>
              </div>
            )}
          </div>
        </main>

        <aside className="home-sidebar-fixed">
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

          <div className="threads-premium-card">
            <h3 className="threads-header">Trending Forum Threads</h3>
            <div className="threads-scroll-area">
              {trendingThreads.map((thread) => (
                <Link key={thread.id} to={`/community/${thread.id}`} className="thread-link-item">
                  <p className="thread-title-text">{thread.title}</p>
                  <div className="thread-meta-data">
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                      {thread.upvotes}
                    </span>
                    <span className="thread-stat">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
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
