import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Threads.css";
import { api } from "../api/api";

function Threads() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const data = await api.getThreads();
        setThreads(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchThreads();
  }, []);

  if (loading) return (
    <div className="threads-page-container loading">
      <div className="spinner"></div>
      <p>Loading community discussions...</p>
    </div>
  );
  
  if (error) return <div className="threads-page-container error">Error: {error}</div>;

  return (
    <div className="threads-page-root">
      <div className="threads-max-container">
        <header className="threads-header-section">
          <div className="header-text">
            <h1 className="header-title">Community Discussions</h1>
            <p className="header-subtitle">Connect with makers, ask questions, and share your journey.</p>
          </div>
          <Link to="/submit/thread" className="btn-primary">
            Start a Thread
          </Link>
        </header>

        <main className="threads-list-container">
          {threads.map((thread) => (
            <Link key={thread.id} to={`/community/${thread.id}`} className="thread-card">
              <div className="thread-icon-wrapper">
                <span className="thread-icon">{thread.icon}</span>
              </div>
              <div className="thread-content">
                <p className="thread-community">{thread.community}</p>
                <h3 className="thread-title">{thread.title}</h3>
                <div className="thread-meta">
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    {thread.upvotes} upvotes
                  </span>
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    {thread.comments} comments
                  </span>
                  {thread.online > 0 && (
                    <span className="meta-item online">
                      <span className="online-dot"></span>
                      {thread.online} online
                    </span>
                  )}
                </div>
              </div>
              <div className="thread-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Threads;
