import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card" id={`product-${product.id}`}>
      {/* Left: Thumbnail */}
      <div className="product-thumbnail">{product.thumbnail}</div>

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

        {/* Stats: comments */}
        <div className="product-stats">
          <span className="stat-item">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {product.comments}
          </span>
        </div>
      </div>

      {/* Right: Upvote Button */}
      <div className="upvote-box">
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
        <span className="upvote-number">{product.upvotes}</span>
      </div>
    </div>
  );
}

export default ProductCard;
