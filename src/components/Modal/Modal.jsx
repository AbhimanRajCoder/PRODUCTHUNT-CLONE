import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { api } from "../../api/api";
import { useUpvotes } from "../../hooks/useUpvotes";

const SearchResultItem = ({ product, onClose }) => {
  const { upvotes } = useUpvotes(product.id, product.upvotes);
  
  return (
    <Link 
      to={`/posts/${product.id}`} 
      className="search-result-item"
      onClick={onClose}
    >
      <div className="result-thumbnail">{product.thumbnail}</div>
      <div className="result-info">
        <h4 className="result-name">{product.name}</h4>
        <p className="result-tagline">{product.tagline}</p>
      </div>
      <div className="result-meta">
        <span className="result-category">{product.category}</span>
        <span className="result-votes">▲ {upvotes}</span>
      </div>
    </Link>
  );
};

export function SearchModal({ isOpen, onClose, searchTerm, setSearchTerm }) {
  const [products, setProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const data = await api.getProducts();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products for search:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const lowerSearch = searchTerm.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name?.toLowerCase().includes(lowerSearch) ||
        product.tagline?.toLowerCase().includes(lowerSearch) ||
        product.category?.toLowerCase().includes(lowerSearch)
    );
    setFilteredResults(filtered);
  }, [searchTerm, products]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content search-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Search Header */}
        <div className="modal-search-header">
          <div className="search-input-wrapper">
            <svg className="modal-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search for products, makers, or topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button className="modal-go-btn" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="#E2E8F0" />
                <path d="M12 8l4 4-4 4M8 12h8" stroke="#94A3B8" />
              </svg>
            </button>
          </div>
        </div>

        <div className="modal-body">
          {searchTerm.trim() !== "" ? (
            <section className="modal-section">
              <h3 className="section-title">
                {filteredResults.length > 0 
                  ? `RESULTS (${filteredResults.length})` 
                  : "NO RESULTS FOUND"}
              </h3>
              <div className="search-results-list">
                {filteredResults.map((product) => (
                  <SearchResultItem 
                    key={product.id} 
                    product={product} 
                    onClose={onClose} 
                  />
                ))}
              </div>
            </section>
          ) : (
            <>
              {/* Popular Tags Section */}
              <section className="modal-section">
                <h3 className="section-title">POPULAR SEARCHES</h3>
                <div className="tag-group">
                  <span className="launch-tag" onClick={() => setSearchTerm("AI")}>AI Tools</span>
                  <span className="launch-tag" onClick={() => setSearchTerm("Productivity")}>Productivity</span>
                  <span className="launch-tag" onClick={() => setSearchTerm("Developer Tools")}>DevTools</span>
                  <span className="launch-tag" onClick={() => setSearchTerm("Design")}>Design</span>
                  <span className="launch-tag" onClick={() => setSearchTerm("Open Source")}>Open Source</span>
                </div>
              </section>

              {/* Product Categories Section */}
              <section className="modal-section">
                <h3 className="section-title">BROWSE CATEGORIES</h3>
                
                <div className="category-block">
                  <div className="block-header">
                    <span className="block-name">Productivity</span>
                    <Link to="/products" className="view-all-red" onClick={onClose}>View all</Link>
                  </div>
                  <div className="link-grid">
                    <span onClick={() => setSearchTerm("Note")}>Note apps</span>
                    <span onClick={() => setSearchTerm("Project")}>Project management</span>
                    <span onClick={() => setSearchTerm("Team")}>Team collaboration</span>
                    <span onClick={() => setSearchTerm("Writing")}>Writing assistants</span>
                  </div>
                </div>

                <div className="category-block">
                  <div className="block-header">
                    <span className="block-name">Engineering & Development</span>
                    <Link to="/products" className="view-all-red" onClick={onClose}>View all</Link>
                  </div>
                  <div className="link-grid">
                    <span onClick={() => setSearchTerm("Automation")}>Automation tools</span>
                    <span onClick={() => setSearchTerm("AI")}>AI Coding</span>
                    <span onClick={() => setSearchTerm("API")}>Unified API</span>
                    <span onClick={() => setSearchTerm("Builder")}>Website builders</span>
                  </div>
                </div>

                <div className="category-block">
                  <div className="block-header">
                    <span className="block-name">Design & Creative</span>
                    <Link to="/products" className="view-all-red" onClick={onClose}>View all</Link>
                  </div>
                  <div className="link-grid">
                    <span onClick={() => setSearchTerm("Graphic")}>Graphic design</span>
                    <span onClick={() => setSearchTerm("Video")}>Video editing</span>
                    <span onClick={() => setSearchTerm("Media")}>AI Media</span>
                    <span onClick={() => setSearchTerm("Resource")}>Design resources</span>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
      
      {/* Close Button Outside (Top Left) */}
      <button className="modal-close-outer-top-left" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="11" fill="white" stroke="none" />
          <path d="M15 9l-6 6M9 9l6 6" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}