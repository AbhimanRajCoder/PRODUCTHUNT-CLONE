import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = ({ title, highlight, text, quote, author, icon, status }) => {
  return (
    <div className="coming-soon-page">
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
          <Link to="/" className="btn-back-home">Back to Home</Link>
          <button className="btn-notify">Notify Me</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
