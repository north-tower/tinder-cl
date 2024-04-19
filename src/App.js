import React from 'react';
import './style.css';
import Header from './Header';
import TinderCards from './TinderCards';
import Chats from './Chats'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from './ChatScreen'

export default function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path="/chat" element={<Chats />}  />
          <Route path="/chat/:person" element={<ChatScreen />}  />


          <Route path="/" element={<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}
