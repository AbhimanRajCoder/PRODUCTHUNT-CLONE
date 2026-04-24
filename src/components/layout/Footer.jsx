import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          
          {/* Left Section (Logo & Tagline) */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo-circle">
                <span className="footer-logo-p">P</span>
              </div>
              <span className="footer-brand-name">Product Hunt</span>
            </Link>
            <p className="footer-tagline">
              Discover the best new products, every day.
            </p>
          </div>

          {/* Middle Section (Navigation Links) */}
          <div className="footer-nav-grid">
            {/* Column 1: Products */}
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Products</h3>
              <nav className="footer-nav-links">
                <Link to="#" className="footer-link">Today's Products</Link>
                <Link to="#" className="footer-link">Popular</Link>
                <Link to="#" className="footer-link">Newest</Link>
              </nav>
            </div>

            {/* Column 2: Company */}
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Company</h3>
              <nav className="footer-nav-links">
                <Link to="#" className="footer-link">About</Link>
                <Link to="#" className="footer-link">Careers</Link>
                <Link to="#" className="footer-link">Contact</Link>
              </nav>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-nav-col">
              <h3 className="footer-nav-title">Resources</h3>
              <nav className="footer-nav-links">
                <Link to="#" className="footer-link">Blog</Link>
                <Link to="#" className="footer-link">Community</Link>
                <Link to="#" className="footer-link">Help Center</Link>
              </nav>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Product Hunt Clone. All rights reserved.
          </p>
          
          <div className="footer-bottom-links">
            <Link to="#" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="#" className="footer-link">
              Terms
            </Link>
            <div className="footer-social-links">
              {/* Twitter / X Icon */}
              <Link to="#" className="social-icon" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              {/* LinkedIn Icon */}
              <Link to="#" className="social-icon" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

