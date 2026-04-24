import React from 'react';
import { Link } from 'react-router-dom';

const Submit = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      paddingTop: '80px' // Height of fixed Navbar
    }}>
      {/* Navigation Header */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 20px',
      }}>
        <Link 
          to="/" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b7280',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '14px',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = '#111827'}
          onMouseOut={(e) => e.currentTarget.style.color = '#6b7280'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 20px 100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center'
      }}>
        {/* Left Section - Visual */}
        <div style={{
          background: 'linear-gradient(135deg, #FFF5F4 0%, #FFF 100%)',
          borderRadius: '32px',
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '500px'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'rgba(255, 97, 84, 0.05)',
            borderRadius: '50%'
          }}></div>
          
          <div style={{
            fontSize: '120px',
            marginBottom: '40px',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))'
          }}>🚀</div>
          
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              The best place to launch
            </h2>
            <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6' }}>
              Join thousands of makers who have successfully <br /> launched their products on Product Hunt.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div style={{ maxWidth: '480px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#111827', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Submit a product
          </h1>
          <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px', lineHeight: '1.5' }}>
            Found a cool product you want everyone to know about? You're in the right place.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>
                Link to the product
              </label>
              <input
                type="text"
                placeholder="https://www.yourproduct.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  background: '#f9fafb'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6154';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 4px rgba(255, 97, 84, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.background = '#f9fafb';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <button style={{
              background: '#FF6154',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 14px 0 rgba(255, 97, 84, 0.39)',
              width: 'fit-content'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#e5554a';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#FF6154';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              Get started
            </button>
          </div>
          
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #f3f4f6' }}>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>
              Need help? Check out our <Link to="/news" style={{ color: '#FF6154', textDecoration: 'none', fontWeight: '500' }}>Launch Guide</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
