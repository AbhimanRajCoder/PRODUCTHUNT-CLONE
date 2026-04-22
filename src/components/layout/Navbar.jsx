import React, { useState } from "react";
import "./Navbar.css";
import { SearchModal } from "../Modal/Modal";

export function Navbar({ searchTerm, setSearchTerm, onSubscribe }) {

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

            <div className="search-box">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14.0001L11.1 11.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <nav className="navbar-center">
            <ul>
              <li>
                <a href="/categories">
                  Best Products
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 6.25 7 9.75l3.5-3.5" />
                  </svg>
                </a>
              </li>
              <li><a href="/leaderboard">Launches
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 6.25 7 9.75l3.5-3.5" />
                  </svg>
              </a></li>
              <li><a href="/newsletters">News
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 6.25 7 9.75l3.5-3.5" />
                  </svg>
              </a></li>
              <li><a href="/forums">Forums
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 6.25 7 9.75l3.5-3.5" />
                  </svg>
              </a></li>
              <li className="hide-mobile">
                <a href="/sponsor">Advertise
                               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 6.25 7 9.75l3.5-3.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="navbar-right">
            <button className="btn-outline" onClick={onSubscribe}>
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="size-4"><path stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m11.453 2.195 6.274 4.077c.221.144.332.216.412.313a.8.8 0 0 1 .158.289c.036.12.036.252.036.516v6.11c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092c-.535.273-1.235.273-2.635.273H5.667c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V7.39c0-.264 0-.396.036-.516a.8.8 0 0 1 .157-.29c.08-.096.192-.168.413-.312l6.274-4.077m2.906 0c-.526-.342-.789-.513-1.072-.58a1.7 1.7 0 0 0-.762 0c-.283.067-.546.238-1.072.58m2.906 0 5.16 3.354c.574.372.86.559.96.795a.83.83 0 0 1 .645c-.1.237-.386.423-.96.796l-5.16 3.354c-.526.342-.789.513-1.072.58a1.7 1.7 0 0 1-.762 0c-.283-.067-.546-.238-1.072-.58l-5.16-3.354c-.574-.373-.86-.56-.96-.796a.83.83 0 0 1 0-.645c.1-.236.386-.423.96-.795l5.16-3.354m9.37 13.638-5.536-5m-4.762 0-5.536 5"></path></svg>
              Subscribe
            </button>
            <button className="btn-primary">
              <svg width="14" height="14" className="ph-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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