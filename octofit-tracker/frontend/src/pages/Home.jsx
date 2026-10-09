import React from 'react';
import { Link } from 'react-router-dom';
import octofitLogo from '../assets/octofitapp-small.png';

const cards = [
  { to: '/users', title: 'Users', icon: '👥', desc: 'Manage student profiles' },
  { to: '/teams', title: 'Teams', icon: '🏆', desc: 'Create and view teams' },
  { to: '/activities', title: 'Activities', icon: '🏃', desc: 'Log workouts and activities' },
  { to: '/leaderboard', title: 'Leaderboard', icon: '📊', desc: 'See who is leading' },
  { to: '/workouts', title: 'Workouts', icon: '💪', desc: 'Personalized workout plans' },
];

export default function Home() {
  return (
    <div className="text-center">
      <img src={octofitLogo} alt="OctoFit Tracker" className="mb-3" style={{ maxWidth: '200px' }} />
      <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
      <p className="lead text-muted mb-4">
        Fitness tracking for Mergington High School students
      </p>
      <div className="row g-3 justify-content-center">
        {cards.map((c) => (
          <div className="col-md-4 col-sm-6" key={c.to}>
            <Link to={c.to} className="text-decoration-none">
              <div className="card h-100 shadow-sm hover-shadow">
                <div className="card-body text-center">
                  <div className="display-4 mb-2">{c.icon}</div>
                  <h5 className="card-title text-dark">{c.title}</h5>
                  <p className="card-text text-muted">{c.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
