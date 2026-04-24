import React from 'react';
import { Link } from 'react-router-dom';
import './Submit.css';

const Submit = () => {
  return (
    <div className="submit-page">
      {/* Navigation Header */}
      <div className="submit-nav">
        <Link to="/" className="back-home-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="submit-container">
        {/* Left Section - Visual */}
        <div className="submit-visual">
          <div className="visual-circle"></div>
          
          <div className="visual-emoji">🚀</div>
          
          <div className="visual-text">
            <h2>The best place to launch</h2>
            <p>
              Join thousands of makers who have successfully <br /> launched their products on Product Hunt.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="submit-form-container">
          <h1>Submit a product</h1>
          <p>
            Found a cool product you want everyone to know about? You're in the right place.
          </p>

          <div className="form-fields">
            <div className="input-group">
              <label>Link to the product</label>
              <input
                type="text"
                placeholder="https://www.yourproduct.com"
              />
            </div>

            <button className="btn-submit-start">
              Get started
            </button>
          </div>
          
          <div className="submit-footer">
            <p>
              Need help? Check out our <Link to="/news">Launch Guide</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
