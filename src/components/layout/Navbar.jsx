import React, { useState } from "react";
import "./Navbar.css";
import { SearchModal } from "../Modal/Modal";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">

          <div className="navbar-left">
            <a href="/" className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 45 45" className="size-10 dark:hidden">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
                  <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
                </g>
              </svg>
            </a>

            <div className="search-box" onClick={() => setIsModalOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14.0001L11.1 11.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search (⌘ + k)"
                readOnly
              />
            </div>
          </div>

          <nav className="navbar-center">
            <ul>
              <li><a href="/categories">Best Products</a></li>
              <li><a href="/leaderboard">Launches</a></li>
              <li><a href="/newsletters">News</a></li>
              <li><a href="/forums">Forums</a></li>
              <li className="hide-mobile">
                <a href="/sponsor">Advertise</a>
              </li>
            </ul>
          </nav>
          
          <div className="navbar-right">
            <a href="/newsletters" className="btn-outline">
              <svg width="16" height="16" className="ph-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Subscribe
            </a>
            <button className="btn-primary">
              <svg width="16" height="16" className="ph-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              Sign in
            </button>
          </div>

        </div>
      </header>

      <SearchModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}