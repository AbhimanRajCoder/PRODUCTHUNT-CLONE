import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [upvotes, setUpvotes] = useState(product.upvotes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleUpvote = async (e) => {
    e.stopPropagation(); // Prevent card click if we add card navigation later
    
    // Optimistic UI update
    const newVoteStatus = !hasVoted;
    const newUpvoteCount = newVoteStatus ? upvotes + 1 : upvotes - 1;
    
    setHasVoted(newVoteStatus);
    setUpvotes(newUpvoteCount);

    try {
      const response = await fetch(`http://localhost:5001/products/${product.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ upvotes: newUpvoteCount }),
      });

      if (!response.ok) {
        throw new Error('Failed to update upvotes');
      }
    } catch (error) {
      console.error('Error updating upvotes:', error);
      // Rollback on error
      setHasVoted(!newVoteStatus);
      setUpvotes(upvotes);
    }
  };

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
      <div 
        className={`upvote-box ${hasVoted ? 'active' : ''}`} 
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
        <span className="upvote-number">{upvotes}</span>
      </div>
    </div>
  );
}

export default ProductCard;
