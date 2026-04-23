import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Advertise from './pages/Advertise';
import { NewsletterModal } from './components/Modal/NewsletterModal';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);


  return (
    <Router>
      <div className="app-container">
        <Navbar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSubscribe={() => setIsNewsletterOpen(true)}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                onSubscribe={() => setIsNewsletterOpen(true)}
              />
            } 
          />
          <Route path="/posts/:id" element={<ProductDetail />} />
          <Route path="/advertise" element={<Advertise />} />
        </Routes>

        <NewsletterModal 
          isOpen={isNewsletterOpen} 
          onClose={() => setIsNewsletterOpen(false)} 
        />
      </div>

    </Router>
  );
}

export default App;
