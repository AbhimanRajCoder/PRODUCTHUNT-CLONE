import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { api } from '../api/api';


function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Upvotes state
  const [upvotes, setUpvotes] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  
  // Comments state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await api.getProductById(id);
        if (!data) {
          throw new Error('Product not found');
        }
        setProduct(data);
        
        // Initialize upvotes from product data or localStorage
        const savedUpvote = localStorage.getItem(`upvoted_product_${id}`);
        setHasUpvoted(!!savedUpvote);
        
        const localUpvoteCount = localStorage.getItem(`upvote_count_product_${id}`);
        setUpvotes(localUpvoteCount ? parseInt(localUpvoteCount) : data.upvotes);

        // Load comments from localStorage
        const savedComments = localStorage.getItem(`product_comments_${id}`);
        if (savedComments) {
          setComments(JSON.parse(savedComments));
        } else {
          // Initial mock comments
          const initialComments = [
            { id: 1, author: "Early Adopter", text: "This is exactly what I was looking for! The UI is so smooth.", timestamp: new Date().toISOString() },
            { id: 2, author: "Tech Enthusiast", text: "Does this integrate with Slack? Love the concept though!", timestamp: new Date().toISOString() }
          ];
          setComments(initialComments);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpvote = () => {
    if (hasUpvoted) {
      const newCount = upvotes - 1;
      setUpvotes(newCount);
      setHasUpvoted(false);
      localStorage.removeItem(`upvoted_product_${id}`);
      localStorage.setItem(`upvote_count_product_${id}`, newCount);
    } else {
      const newCount = upvotes + 1;
      setUpvotes(newCount);
      setHasUpvoted(true);
      localStorage.setItem(`upvoted_product_${id}`, "true");
      localStorage.setItem(`upvote_count_product_${id}`, newCount);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      id: Date.now(),
      author: "You",
      text: newComment,
      timestamp: new Date().toISOString()
    };

    const updatedComments = [commentObj, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`product_comments_${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };


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
              <span className="detail-votes">{upvotes} Upvotes</span>
            </div>
          </div>
          <div className="detail-actions">
            <button className="visit-btn">Visit Website</button>
            <button 
              className={`detail-upvote-btn ${hasUpvoted ? 'active' : ''}`}
              onClick={handleUpvote}
            >
              ▲ {hasUpvoted ? 'Upvoted' : 'Upvote'} {upvotes}
            </button>
          </div>
        </header>

        {/* Description Section */}
        <section className="detail-section">
          <h2 className="section-title">About this product</h2>
          <p className="detail-description">{product.description}</p>
        </section>

        {/* Comments Section */}
        <section className="detail-section">
          <h2 className="section-title">Comments ({comments.length})</h2>
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <div className="comment-avatar">👤</div>
                <div className="comment-content">
                  <p className="comment-author">{comment.author}</p>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="comment-box" onSubmit={handleAddComment}>
            <textarea 
              placeholder="What do you think?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button type="submit" className="comment-btn">Post Comment</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
