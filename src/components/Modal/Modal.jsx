import React from "react";
import "./Modal.css";

export function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Search Header */}
        <div className="modal-search-header">
          <svg className="modal-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Search for products, launches, or people..." 
            autoFocus
          />
          <button className="modal-go-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Popular Tags Section */}
          <section className="modal-section">
            <h3 className="section-title">POPULAR LAUNCH TAGS [cite: 8]</h3>
            <div className="tag-group">
              <span className="launch-tag">Artificial Intelligence [cite: 10]</span>
              <span className="launch-tag">Productivity [cite: 10]</span>
              <span className="launch-tag">Developer Tools [cite: 10]</span>
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
                <span className="block-name">Productivity [cite: 6]</span>
                <a href="#" className="view-all-red">View all</a>
              </div>
              <div className="link-grid">
                <a href="#">Note and writing apps [cite: 10]</a>
                <a href="#">Project management software</a>
                <a href="#">Knowledge base software</a>
                <a href="#">Team collaboration software [cite: 10]</a>
                <a href="#">Writing assistants</a>
                <a href="#">Search [cite: 10]</a>
              </div>
            </div>

            {/* Category Block: Engineering */}
            <div className="category-block">
              <div className="block-header">
                <span className="block-name">Engineering & Development [cite: 5, 9]</span>
                <a href="#" className="view-all-red">View all</a>
              </div>
              <div className="link-grid">
                <a href="#">Automation tools</a>
                <a href="#">AI Coding Agents [cite: 10]</a>
                <a href="#">Unified API</a>
                <a href="#">Website builders</a>
                <a href="#">Predictive AI</a>
                <a href="#">Testing and QA software</a>
              </div>
            </div>
          </section>

          <a href="#" className="view-all-link bottom-link">View All Product categories [cite: 3, 8]</a>
        </div>
      </div>
      
      {/* Close Button Outside */}
      <button className="modal-close-outer" onClick={onClose}>×</button>
    </div>
  );
}