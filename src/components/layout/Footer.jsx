import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Section (Logo & Tagline) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group w-fit" style={{ textDecoration: 'none' }}>
              <div className="w-10 h-10 rounded-full bg-[#FF6154] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-bold text-xl leading-none">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900 tracking-tight">Product Hunt</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">
              Discover the best new products, every day.
            </p>
          </div>

          {/* Middle Section (Navigation Links) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Products */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-gray-900 text-sm tracking-wide">Products</h3>
              <nav className="flex flex-col gap-3">
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Today's Products</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Popular</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Newest</Link>
              </nav>
            </div>

            {/* Column 2: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-gray-900 text-sm tracking-wide">Company</h3>
              <nav className="flex flex-col gap-3">
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>About</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Careers</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Contact</Link>
              </nav>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-gray-900 text-sm tracking-wide">Resources</h3>
              <nav className="flex flex-col gap-3">
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Blog</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Community</Link>
                <Link to="#" className="text-gray-500 hover:text-[#FF6154] text-sm transition-colors duration-200" style={{ textDecoration: 'none' }}>Help Center</Link>
              </nav>
            </div>
          </div>

          {/* Right Section (Newsletter) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-medium text-gray-900 text-sm tracking-wide">Subscribe to Newsletter</h3>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6154]/20 focus:border-[#FF6154] transition-all"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#FF6154] hover:bg-[#ff5142] text-white font-medium text-sm py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm text-gray-500 hover:text-[#FF6154] transition-colors duration-200" style={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-[#FF6154] transition-colors duration-200" style={{ textDecoration: 'none' }}>
              Terms
            </Link>
            <div className="flex items-center gap-4 ml-2">
              {/* Twitter / X Icon */}
              <Link to="#" className="text-gray-400 hover:text-[#FF6154] transition-colors duration-200" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              {/* LinkedIn Icon */}
              <Link to="#" className="text-gray-400 hover:text-[#FF6154] transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
