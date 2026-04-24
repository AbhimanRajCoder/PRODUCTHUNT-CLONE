import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Advertise from './pages/Advertise';
import Submit from './pages/Submit';
import ComingSoon from './pages/ComingSoon';
import { NewsletterModal } from './components/Modal/NewsletterModal';
import Threads from './pages/Threads';
import ThreadDetail from './pages/ThreadDetail';


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
          <Route path="/community" element={<Threads />} />
          <Route path="/community/:id" element={<ThreadDetail />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/submit" element={<Submit />} />
          <Route 
            path="/submit/product" 
            element={
              <Submit />
            } 
          />
          <Route 
            path="/submit/thread" 
            element={
              <ComingSoon 
                title="Start a" 
                highlight="Thread" 
                icon="💬"
                text="The community discussion platform is being prepared. Soon you'll be able to share ideas and ask questions."
                quote="The art of conversation is the art of hearing as well as of being heard."
                author="William Hazlitt"
                status="Opening the floor..."
              />
            } 
          />
          
          {/* Coming Soon Pages */}
          <Route 
            path="/launches" 
            element={
              <ComingSoon 
                title="Next-gen" 
                highlight="Launches" 
                icon="🚀"
                text="Something massive is preparing for takeoff. We're fueling the engines for the next generation of maker breakthroughs."
                quote="Every great achievement is but a small launch into the unknown."
                author="Unknown Maker"
                status="Fueling the rocket..."
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ComingSoon 
                title="Discover" 
                highlight="New Products" 
                icon="📦"
                text="A curated warehouse of innovation is being built. The tools of tomorrow are arriving soon."
                quote="Productivity is being able to do things that you were never able to do before."
                author="Franz Kafka"
                status="Unboxing the future..."
              />
            } 
          />
          <Route 
            path="/news" 
            element={
              <ComingSoon 
                title="Tech" 
                highlight="News & Stories" 
                icon="📰"
                text="Your daily dose of tech wisdom and maker stories is being written. The first edition is almost ready."
                quote="The secret of change is to focus all of your energy, not on fighting the old, but on building the new."
                author="Socrates"
                status="Printing the truth..."
              />
            } 
          />
          <Route 
            path="/community" 
            element={
              <ComingSoon 
                title="Community &" 
                highlight="Forums" 
                icon="👥"
                text="The village of makers is gathering. We're setting up the town square and discussion boards for the most passionate creators."
                quote="Discussion is an exchange of knowledge; an argument an exchange of ignorance."
                author="Robert Quillen"
                status="Building the handshake..."
              />
            } 
          />
          
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
