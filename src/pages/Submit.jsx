import React from 'react';
import { Link } from 'react-router-dom';

const Submit = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 0 60px',
      background: 'radial-gradient(circle at top right, rgba(255, 97, 84, 0.05), transparent 400px), radial-gradient(circle at bottom left, rgba(64, 123, 255, 0.05), transparent 400px)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '32px 40px',
        display: 'flex',
        justifyContent: 'flex-start'
      }}>
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#9ca3af',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '14px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#4b5563';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back</span>
        </Link>
      </div>

      <div style={{ 
        maxWidth: '800px', 
        width: '100%',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
          Submit a <span>Product</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#4b5563', marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
          This is a placeholder page for the Submit flow. We're building a seamless way for you to launch your innovations.
        </p>
      </div>
    </div>
  );
};

export default Submit;
