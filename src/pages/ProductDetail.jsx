import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5001/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="detail-container loading">Loading product details...</div>;
  if (error) return <div className="detail-container error">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="product-detail-page">
      <div className="detail-container">
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* Header Section */}
        <header className="detail-header">
          <div className="detail-logo">{product.thumbnail}</div>
          <div className="detail-headline">
            <h1 className="detail-name">{product.name}</h1>
            <p className="detail-tagline">{product.tagline}</p>
            <div className="detail-meta">
              <span className="detail-category">{product.category}</span>
              <span className="dot">•</span>
              <span className="detail-votes">{product.upvotes} Upvotes</span>
            </div>
          </div>
          <div className="detail-actions">
            <button className="visit-btn">Visit Website</button>
            <button className="detail-upvote-btn">▲ Upvote</button>
          </div>
        </header>

        {/* Description Section */}
        <section className="detail-section">
          <h2 className="section-title">About this product</h2>
          <p className="detail-description">{product.description}</p>
        </section>

        {/* Mock Comments Section */}
        <section className="detail-section">
          <h2 className="section-title">Comments ({product.comments || 0})</h2>
          <div className="comments-list">
            <div className="comment-item">
              <div className="comment-avatar">👤</div>
              <div className="comment-content">
                <p className="comment-author">Early Adopter</p>
                <p className="comment-text">This is exactly what I was looking for! The UI is so smooth.</p>
              </div>
            </div>
            <div className="comment-item">
              <div className="comment-avatar">👤</div>
              <div className="comment-content">
                <p className="comment-author">Tech Enthusiast</p>
                <p className="comment-text">Does this integrate with Slack? Love the concept though!</p>
              </div>
            </div>
          </div>
          <div className="comment-box">
            <textarea placeholder="What do you think?"></textarea>
            <button className="comment-btn">Post Comment</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
