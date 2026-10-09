import React from 'react';
import useFetch from '../hooks/useFetch.js';

const difficultyColors = { easy: 'success', medium: 'warning', hard: 'danger' };

export default function Workouts() {
  const { data, loading, error } = useFetch('workouts');

  if (loading) return <p className="text-muted">Loading workouts…</p>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <h2 className="mb-3">Workouts</h2>
      <div className="row g-3">
        {data?.map((w) => (
          <div className="col-md-6" key={w._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="card-title">{w.description}</h5>
                  <span className={`badge bg-${difficultyColors[w.difficulty] || 'secondary'}`}>
                    {w.difficulty}
                  </span>
                </div>
                <p className="mb-1 text-muted">{w.userId?.name || 'Unknown'}</p>
                <p className="mb-0">
                  <span className="badge bg-info text-capitalize me-2">{w.type}</span>
                  {w.duration} min
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
