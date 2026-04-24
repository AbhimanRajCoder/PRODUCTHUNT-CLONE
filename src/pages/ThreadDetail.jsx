import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ThreadDetail.css";
import { api } from "../api/api";

function ThreadDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thread, setThread] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Comments state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const data = await api.getThreads();
        const found = data.find(t => t.id === id);
        if (!found) throw new Error("Thread not found");
        setThread(found);
        
        // Load comments from localStorage
        const savedComments = localStorage.getItem(`thread_comments_${id}`);
        if (savedComments) {
          setComments(JSON.parse(savedComments));
        } else {
          // Default mock comments if none in localStorage
          const defaultComments = [
            {
              id: Date.now() - 10000,
              author: "Community Bot",
              avatar: "🤖",
              text: "Welcome to this discussion! Be kind and helpful.",
              timestamp: new Date(Date.now() - 10000).toISOString()
            }
          ];
          setComments(defaultComments);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchThread();
  }, [id]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);
    
    const commentObj = {
      id: Date.now(),
      author: "You (Maker)",
      avatar: "👤",
      text: newComment,
      timestamp: new Date().toISOString()
    };

    const updatedComments = [commentObj, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`thread_comments_${id}`, JSON.stringify(updatedComments));
    setNewComment("");
    
    // Update thread comment count locally (visual only)
    if (thread) {
      setThread({ ...thread, comments: (thread.comments || 0) + 1 });
    }
    
    setIsSubmitting(false);
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) return (
    <div className="thread-detail-container loading">
      <div className="spinner"></div>
      <p>Loading discussion...</p>
    </div>
  );
  
  if (error) return (
    <div className="thread-detail-container error">
      <h2>Oops!</h2>
      <p>{error}</p>
      <button onClick={() => navigate("/community")} className="btn-outline">Back to Community</button>
    </div>
  );

  return (
    <div className="thread-detail-root">
      <div className="thread-detail-max-container">
        <button className="back-link" onClick={() => navigate("/community")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Community
        </button>

        <article className="thread-main-article">
          <header className="thread-detail-header">
            <div className="thread-detail-icon-bg">
              <span className="thread-detail-icon">{thread.icon}</span>
            </div>
            <div className="thread-detail-info">
              <p className="thread-detail-community">{thread.community}</p>
              <h1 className="thread-detail-title">{thread.title}</h1>
              <div className="thread-detail-meta">
                <span>▲ {thread.upvotes} upvotes</span>
                <span className="dot">•</span>
                <span>{thread.comments} comments</span>
                {thread.online > 0 && (
                  <>
                    <span className="dot">•</span>
                    <span className="online-status">
                      <span className="online-dot"></span>
                      {thread.online} makers online
                    </span>
                  </>
                )}
              </div>
            </div>
          </header>

          <div className="thread-body-content">
            <p>
              This is a community discussion in <strong>{thread.community}</strong>. 
              Makers are sharing their thoughts and experiences about "{thread.title}".
            </p>
            {/* If there was a description field in DB, it would go here */}
          </div>

          <section className="comments-section">
            <h2 className="comments-title">Discussion ({comments.length})</h2>
            
            <form className="comment-form" onSubmit={handleSubmitComment}>
              <div className="comment-input-wrapper">
                <div className="user-avatar">👤</div>
                <textarea 
                  placeholder="What are your thoughts?"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting || !newComment.trim()}
                >
                  {isSubmitting ? "Posting..." : "Comment"}
                </button>
              </div>
            </form>

            <div className="comments-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-avatar-wrapper">
                    <span className="comment-avatar">{comment.avatar}</span>
                  </div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{formatTime(comment.timestamp)}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <div className="comment-footer">
                      <button className="comment-action">Reply</button>
                      <button className="comment-action">Upvote</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="thread-sidebar">
          <div className="sidebar-card">
            <h3>About Community</h3>
            <p>A space for makers to discuss {thread.community.split('/')[1] || 'various topics'}.</p>
            <button className="btn-outline-full">Join Community</button>
          </div>
          
          <div className="sidebar-card">
            <h3>Rules</h3>
            <ul className="rules-list">
              <li>Be respectful to others</li>
              <li>No self-promotion</li>
              <li>Stay on topic</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ThreadDetail;
