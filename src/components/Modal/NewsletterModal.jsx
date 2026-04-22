import React, { useState } from 'react';
import './NewsletterModal.css';

import { motion, AnimatePresence } from 'framer-motion';

export function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after success message
      setTimeout(() => {
        onClose();
        // Reset state after closing animation
        setTimeout(() => {
          setIsSuccess(false);
          setEmail('');
        }, 300);
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content newsletter-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
        >
          <button className="modal-close" onClick={onClose}>&times;</button>
          
          <div className="newsletter-header">
            <div className="newsletter-icon">📬</div>
            <h2>Subscribe to our newsletter</h2>
            <p>Get the best new products in your inbox, every day.</p>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={error ? 'error' : ''}
                  autoFocus
                />
                {error && <span className="error-text">{error}</span>}
              </div>
              
              <button 
                type="submit" 
                className="btn-primary subscribe-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to newsletter'}
              </button>
            </form>
          ) : (
            <motion.div 
              className="success-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4BB543" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>You're on the list!</h3>
              <p>Check your inbox for a confirmation email.</p>
            </motion.div>
          )}

          <div className="newsletter-footer">
            <p>No spam, ever. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
