import React from 'react';
import './style.css';
import Header from './Header';
import TinderCards from './TinderCards';
import Chats from './Chats'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/chat" element={<Chats />}  />

          <Route path="/" element={<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}
