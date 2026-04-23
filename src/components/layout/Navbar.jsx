import React, { useState } from "react";
import "./Navbar.css";
import { SearchModal } from "../Modal/Modal";

const NAV_DROPDOWNS = {
  launches: [
    {
      title: "Launch archive",
      description: "Most-loved launches by the community",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.19-2.49A2 2 0 0 1 4.5 16.5z" />
          <path d="M7 15l-3 3" />
          <path d="M11 9l-4 4" />
          <path d="M14.5 4.5c2.1-2.1 6-1.5 6-1.5s.6 3.9-1.5 6a5 5 0 0 1-4.5 1.5l-3 3-4-4 3-3a5 5 0 0 1 1.5-4.5z" />
          <path d="M15 9l-2 2" />
          <path d="M13 15l2 2" />
        </svg>
      ),
      bgColor: "rgba(255, 97, 84, 0.1)",
      iconColor: "#FF6154"
    },
    {
      title: "Launch Guide",
      description: "Checklists and pro tips for launching",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      bgColor: "rgba(64, 123, 255, 0.1)",
      iconColor: "#407BFF"
    }
  ],
  news: [
    {
      title: "Newsletter",
      description: "The best of Product Hunt, every day",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      bgColor: "rgba(124, 58, 237, 0.1)",
      iconColor: "#7c3aed"
    },
    {
      title: "Stories",
      description: "Tech news, interviews, and tips from makers",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
      bgColor: "rgba(236, 72, 153, 0.1)",
      iconColor: "#ec4899"
    },
    {
      title: "Changelog",
      description: "New Product Hunt features and releases",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      ),
      bgColor: "rgba(34, 197, 94, 0.1)",
      iconColor: "#22c55e"
    }
  ],
  forums: [
    {
      title: "Forums",
      description: "Ask questions, find support, and connect",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      bgColor: "rgba(139, 92, 246, 0.1)",
      iconColor: "#8b5cf6"
    },
    {
      title: "Kitty Points Leaderboard",
      description: "The highest scoring community members",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.19-2.49A2 2 0 0 1 4.5 16.5z" />
          <path d="M7 15l-3 3" />
          <path d="M11 9l-4 4" />
          <path d="M14.5 4.5c2.1-2.1 6-1.5 6-1.5s.6 3.9-1.5 6a5 5 0 0 1-4.5 1.5l-3 3-4-4 3-3a5 5 0 0 1 1.5-4.5z" />
        </svg>
      ),
      bgColor: "rgba(249, 115, 22, 0.1)",
      iconColor: "#f97316"
    },
    {
      title: "Streaks",
      description: "The most active community members",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.5 3.5 6.5 1.5 2 2 4.5 2 7a6 6 0 1 1-12 0c0-1.38.5-3 1-4.5 1-2.5 1.5-4.5 1-6.5.5 2 1 3 2 4.5z" />
        </svg>
      ),
      bgColor: "rgba(239, 68, 68, 0.1)",
      iconColor: "#ef4444"
    },
    {
      title: "Events",
      description: "Meet others online and in-person",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      bgColor: "rgba(16, 185, 129, 0.1)",
      iconColor: "#10b981"
    }
  ]
};

const NavItemWithDropdown = ({ title, items, href }) => {
  return (
    <li className="nav-item-container">
      <a href={href} onClick={(e) => e.preventDefault()}>
        {title}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3.5 6.25 7 9.75l3.5-3.5" />
        </svg>
      </a>
      <div className="dropdown-menu">
        {items.map((item, index) => (
          <a key={index} href={`#${item.title.toLowerCase().replace(/ /g, '-')}`} className="dropdown-item">
            <div className="dropdown-icon-wrapper" style={{ backgroundColor: item.bgColor, color: item.iconColor }}>
              {item.icon}
            </div>
            <div className="dropdown-info">
              <h4 className="dropdown-title">{item.title}</h4>
              <p className="dropdown-description">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </li>
  );
};

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

            <div className="search-box" onClick={() => setIsModalOpen(true)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 14.0001L11.1 11.1001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                readOnly
                className="navbar-search-trigger"
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
              <NavItemWithDropdown title="Launches" items={NAV_DROPDOWNS.launches} href="/leaderboard" />
              <NavItemWithDropdown title="News" items={NAV_DROPDOWNS.news} href="/newsletters" />
              <NavItemWithDropdown title="Forums" items={NAV_DROPDOWNS.forums} href="/forums" />
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
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}