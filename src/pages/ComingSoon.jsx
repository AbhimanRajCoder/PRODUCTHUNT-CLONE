import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = ({ title, highlight, text, quote, author, icon, status }) => {
  return (
    <div className="coming-soon-page">
      <div className="page-nav-header">
        <Link to="/" className="back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </Link>
      </div>

      <div className="coming-soon-container">
        <span className="coming-soon-badge">Coming Soon</span>
        <span className="coming-soon-icon">{icon}</span>
        <h1 className="coming-soon-title">
          {title} <span>{highlight}</span>
        </h1>
        <p className="coming-soon-text">{text}</p>
        
        <div className="coming-soon-quote-box">
          <p className="coming-soon-quote">{quote}</p>
          <p className="coming-soon-author">— {author}</p>
        </div>

        <div className="coming-soon-status">
          <div className="status-dot"></div>
          <span className="status-text">{status}</span>
        </div>

        <div className="coming-soon-ctas">
          <button className="btn-notify">Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
