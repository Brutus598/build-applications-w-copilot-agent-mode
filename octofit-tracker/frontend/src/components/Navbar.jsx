import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import octofitLogo from '../assets/octofitapp-small.png';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active fw-bold' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={octofitLogo} alt="OctoFit" height="32" />
          <span>OctoFit Tracker</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className={linkClass} to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className={linkClass} to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
