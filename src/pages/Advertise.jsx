import React from 'react';
import './Advertise.css';

const Advertise = () => {
  return (
    <div className="advertise-page">
      <section className="advertise-hero">
        <div className="hero-content">
          <span className="badge">Advertising</span>
          <h1>Reach the world's most <br /><span>influential tech audience</span></h1>
          <p>Product Hunt is where the future happens. Connect your brand with millions of makers, early adopters, and tech-savvy founders.</p>
          <div className="hero-ctas">
            <button className="btn-primary-large">Get in touch</button>
            <button className="btn-secondary-large">View media kit</button>
          </div>
        </div>
      </section>

      <section className="advertise-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5M+</h3>
            <p>Monthly unique visitors</p>
          </div>
          <div className="stat-card">
            <h3>600k+</h3>
            <p>Newsletter subscribers</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Tech-focused audience</p>
          </div>
        </div>
      </section>

      <section className="advertise-offerings">
        <div className="section-header">
          <h2>Advertising Formats</h2>
          <p>Simple, effective ways to tell your story.</p>
        </div>
        <div className="offerings-grid">
          <div className="offering-card">
            <div className="offering-icon">📧</div>
            <h3>Newsletter</h3>
            <p>Primary placement in our daily digest reaching over 600,000 tech enthusiasts.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🚀</div>
            <h3>Promoted Products</h3>
            <p>Boost your product to the top of the daily list for maximum visibility.</p>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🖥️</div>
            <h3>Display Ads</h3>
            <p>High-impact display placements across the Product Hunt web and mobile platform.</p>
          </div>
        </div>
      </section>

      <section className="advertise-cta-final">
        <div className="cta-box">
          <h2>Ready to grow?</h2>
          <p>Join brands like Slack, Google, and Stripe in reaching the maker community.</p>
          <button className="btn-primary-large">Contact Our Team</button>
        </div>
      </section>

      <footer className="advertise-footer">
        <p>&copy; 2024 Product Hunt Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Advertise;
