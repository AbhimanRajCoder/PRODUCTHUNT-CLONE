import React from "react";
import "./Modal.css";

export function SearchModal({ isOpen, onClose, searchTerm, setSearchTerm }) {
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
              placeholder="Search for products, launches, or people..." 
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
          {/* Popular Tags Section */}
          <section className="modal-section">
            <h3 className="section-title">POPULAR LAUNCH TAGS</h3>
            <div className="tag-group">
              <span className="launch-tag">Artificial Intelligence</span>
              <span className="launch-tag">Productivity</span>
              <span className="launch-tag">Developer Tools</span>
              <span className="launch-tag">GitHub</span>
              <span className="launch-tag">Open Source</span>
            </div>
            <a href="#" className="view-all-link">View All Launch tags</a>
          </section>

          {/* Product Categories Section */}
          <section className="modal-section">
            <h3 className="section-title">PRODUCT CATEGORIES</h3>
            
            {/* Category Block: Productivity */}
            <div className="category-block">
              <div className="block-header">
                <span className="block-name">Productivity</span>
                <a href="#" className="view-all-red">View all</a>
              </div>
              <div className="link-grid">
                <a href="#">Note and writing apps</a>
                <a href="#">Project management software</a>
                <a href="#">Knowledge base software</a>
                <a href="#">Team collaboration software</a>
                <a href="#">Writing assistants</a>
                <a href="#">Search</a>
              </div>
            </div>

            {/* Category Block: Engineering */}
            <div className="category-block">
              <div className="block-header">
                <span className="block-name">Engineering & Development</span>
                <a href="#" className="view-all-red">View all</a>
              </div>
              <div className="link-grid">
                <a href="#">Automation tools</a>
                <a href="#">AI Coding Agents</a>
                <a href="#">Unified API</a>
                <a href="#">Website builders</a>
                <a href="#">Predictive AI</a>
                <a href="#">Testing and QA software</a>
              </div>
            </div>

            {/* Category Block: Design & Creative */}
            <div className="category-block">
              <div className="block-header">
                <span className="block-name">Design & Creative</span>
                <a href="#" className="view-all-red">View all</a>
              </div>
              <div className="link-grid">
                <a href="#">AI Generative Media</a>
                <a href="#">Graphic design tools</a>
                <a href="#">Video editing</a>
                <a href="#">Design resources</a>
                <a href="#">Photo editing</a>
                <a href="#">Design inspiration websites</a>
              </div>
            </div>
          </section>

          <a href="#" className="view-all-link bottom-link">View All Product categories</a>
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