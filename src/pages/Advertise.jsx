import React, { useState } from 'react';
import './Advertise.css';

const Advertise = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How long does a campaign run?", a: "Typically, campaigns run for a full day on the front page, but we offer multi-day and weekly packages for newsletter sponsorships." },
    { q: "Can I target specific categories?", a: "Yes, you can choose to promote your product within specific categories like AI, Productivity, or Developer Tools." },
    { q: "What assets do I need to provide?", a: "We require a high-resolution logo, a short description, and your target URL. For display ads, our team will provide a specification guide." }
  ];

  return (
    <div className="advertise-page">
      <section className="advertise-hero">
        <div className="hero-content">
          <span className="badge">Advertising</span>
          <h1>Reach the world's most <br /><span>influential tech audience</span></h1>
          <p>Product Hunt is where the future happens. Connect your brand with millions of makers, early adopters, and tech-savvy founders.</p>
          <div className="hero-ctas">
            <button className="btn-primary-large">Contact Our Team</button>
            <button className="btn-secondary-large">View Media Kit</button>
          </div>
        </div>
      </section>

      <section className="brand-logos">
        <p className="section-subtitle">TRUSTED BY THE BEST TEAMS</p>
        <div className="logos-ticker">
          <div className="logo-item">Google</div>
          <div className="logo-item">Slack</div>
          <div className="logo-item">Stripe</div>
          <div className="logo-item">OpenAI</div>
          <div className="logo-item">Shopify</div>
          <div className="logo-item">Microsoft</div>
        </div>
      </section>

      <section className="advertise-visual">
        <div className="visual-container">
          <div className="visual-text">
            <h2>High-impact placements</h2>
            <p>Your product deserves to be seen. Our advertising formats are designed to integrate seamlessly into the user experience while providing maximum visibility.</p>
            <ul className="visual-features">
              <li>✓ Native look and feel</li>
              <li>✓ Priority placement on home page</li>
              <li>✓ Targeted newsletter reach</li>
            </ul>
          </div>
          <div className="visual-mockup">
            <img src="/assets/images/ad-mockup.png" alt="Ad Mockup" />
          </div>
        </div>
      </section>

      <section className="advertise-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>5M+</h3>
            <p>Monthly unique visitors</p>
            <span className="stat-trend">↑ 12% YoY</span>
          </div>
          <div className="stat-card">
            <h3>600k+</h3>
            <p>Newsletter subscribers</p>
            <span className="stat-trend">↑ 5k / week</span>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Tech-focused audience</p>
            <span className="stat-trend">Verified buyers</span>
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
            <ul className="offering-details">
              <li>High open rates</li>
              <li>Native integration</li>
            </ul>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🚀</div>
            <h3>Promoted Products</h3>
            <p>Boost your product to the top of the daily list for maximum visibility.</p>
            <ul className="offering-details">
              <li>Home page placement</li>
              <li>Verified traffic</li>
            </ul>
          </div>
          <div className="offering-card">
            <div className="offering-icon">🖥️</div>
            <h3>Display Ads</h3>
            <p>High-impact display placements across the Product Hunt web and mobile platform.</p>
            <ul className="offering-details">
              <li>Custom creative</li>
              <li>Retargeting options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="advertise-testimonials">
        <div className="testimonial-box">
          <div className="quote-icon">“</div>
          <p className="testimonial-text">Product Hunt has been our single most effective channel for acquiring early-stage founders. The quality of traffic is unmatched.</p>
          <div className="testimonial-author">
            <div className="author-info">
              <strong>Sarah Jenkins</strong>
              <span>Head of Growth, Aura Labs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="advertise-faq">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  {faq.q}
                  <span className="faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
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
