import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import Teams from './pages/Teams.jsx';
import Activities from './pages/Activities.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Workouts from './pages/Workouts.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
      <footer className="text-center text-muted py-3 border-top">
        <small>OctoFit Tracker &middot; Mergington High School</small>
      </footer>
    </BrowserRouter>
  );
}
