import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductCard.css';
import { api } from '../../api/api';
import { useUpvotes } from '../../hooks/useUpvotes';


function ProductCard({ product }) {
  const navigate = useNavigate();
  const { upvotes, hasUpvoted, toggleUpvote } = useUpvotes(product.id, product.upvotes);

  const handleUpvote = async (e) => {
    e.stopPropagation();
    toggleUpvote();

    try {
      // Still update API if needed, but the UI is now synced via hook
      await api.updateProduct(product.id, { upvotes: hasUpvoted ? upvotes - 1 : upvotes + 1 });
    } catch (error) {
      console.error("Failed to update API:", error);
    }
  };

  return (
    <motion.div 
      className="product-card" 
      id={`product-${product.id}`}
      onClick={() => navigate(`/posts/${product.id}`)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "var(--border-color)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Left: Thumbnail */}
      <div className="product-thumbnail">
        {product.logoUrl ? (
          <img src={product.logoUrl} alt={product.name} />
        ) : (
          product.thumbnail
        )}
      </div>

      {/* Middle: Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-description">{product.description}</p>

        {/* Tags */}
        <div className="product-tags">
          {product.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Right: Actions */}
      <div className="product-actions">
        {/* Comment Box */}
        <div className="action-box comment-box">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="action-number">{product.comments}</span>
        </div>

        {/* Upvote Box */}
        <div 
          className={`action-box upvote-box ${hasUpvoted ? 'active' : ''}`} 
          onClick={handleUpvote}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="action-number">{upvotes}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
