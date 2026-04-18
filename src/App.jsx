import React from 'react';
import './App.css';

import { Navbar } from './components/layout/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
